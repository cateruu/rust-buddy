import passport from 'passport';
import passport_steam from 'passport-steam';
import { supabase } from './supabase';

export interface SteamUser {
  displayName: string;
  id: string;
  photos: {
    value: string;
  }[];
  provider: string;
  _json: {
    profileurl: string;
    loccountrycode: string;
  };
}

const SteamStrategy = passport_steam.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: SteamUser, done) => {
  done(null, user);
});

passport.use(
  new SteamStrategy(
    {
      returnURL: `${process.env.WEBSITE_URL}/api/auth/return`,
      realm: `${process.env.WEBSITE_URL}`,
      apiKey: process.env.STEAM_API_KEY,
    },
    async (
      _: string,
      profile: SteamUser,
      done: (a: null | string, b: SteamUser) => typeof done
    ) => {
      const { data, error: selectError } = await supabase
        .from('users')
        .select('id')
        .eq('steam_id', profile.id);

      if (selectError) console.error('select user error ->', selectError);

      if (data.length) {
        const { error: updateError } = await supabase
          .from('users')
          .update({
            displayName: profile.displayName,
            photo: profile.photos[0].value,
            steam_url: profile._json.profileurl,
            country: profile._json.loccountrycode,
            last_activity: new Date(),
          })
          .eq('steam_id', profile.id);

        if (updateError) console.error('update user error ->', updateError);
      } else {
        const { error } = await supabase.from('users').insert({
          steam_id: profile.id,
          displayName: profile.displayName,
          photo: profile.photos[0].value,
          steam_url: profile._json.profileurl,
          country: profile._json.loccountrycode,
          last_activity: new Date(),
        });
        if (error) console.error('create new user error ->', error);
      }

      return done(null, profile);
    }
  )
);

export default passport;

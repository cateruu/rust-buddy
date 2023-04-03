import passport from 'passport';
import passport_steam from 'passport-steam';

export interface SteamUser {
  name: string;
  id: string;
  photos: {
    value: string;
  };
  provider: string;
  identifier: string;
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
      returnURL: 'http://localhost:8080/api/auth/return',
      realm: 'http://localhost:8080',
      apiKey: process.env.STEAM_API_KEY,
    },
    (
      _: string,
      profile: SteamUser,
      done: (a: null | string, b: SteamUser) => typeof done
    ) => {
      return done(null, profile);
    }
  )
);

export default passport;

import { NextApiRequest, NextApiResponse } from 'next';
import passport, { SteamUser } from './passport';
import nextConnect from 'next-connect';
import cookieSession from 'cookie-session';

export type NextAuthApiRequest = NextApiRequest & { user: SteamUser };

const router = nextConnect<NextApiRequest, NextApiResponse>();

router.use(
  cookieSession({
    secret: process.env.SESSION_SECRET,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  })
);

router.use(passport.initialize());
router.use(passport.session());

export default router;

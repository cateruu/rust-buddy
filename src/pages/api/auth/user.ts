import { NextApiResponse } from 'next';
import router, { NextAuthApiRequest } from '../../../lib/router';

const handler = async (req: NextAuthApiRequest, res: NextApiResponse) => {
  await router.run(req, res);

  res.status(200).json(req.user || null);
};

export default handler;

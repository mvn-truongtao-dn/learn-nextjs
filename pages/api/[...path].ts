// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
// type Data = {
//   name: string
// }
export const config = {
  api: {
    bodyParser: false,
  },
};
const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //don't send cookies to api server
  req.headers.cookie = '';
  // api/students
  // https://js-post-api.herokuapp.com/api/students
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });
  //su dung selfHandleResponse thi k can xu ly phan duoi
  //   res.status(200).json({ name: 'PATH - Match all here' })
}

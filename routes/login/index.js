import express from 'express';
// import { getTodos } from '../modules//B/index.js';
import { tmpl } from '../../modules/login/S/index.js';
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index', {
    title: '로그인',
    tmpl: `
      <h1>로그인</h1>
      ${tmpl}
    `,
  });
});

export default router;

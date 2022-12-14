import express from 'express';
import { tmpl } from '../../modules/login/S/index.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.render('index', {
    title: '로그인',
    tmpl,
  });
});

export default router;

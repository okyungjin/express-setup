import express from 'express';
import loginRouter from './login/index.js';
import todosRouter from './todos/index.js';

const router = express.Router();

router.use('/login', loginRouter);
router.use('/todos', todosRouter);

router.get('/', async (req, res, next) => {
  res.render('index', {
    title: '환영합니다 :)',
    tmpl: `
      <a href="/todos">할 일 목록 보러가기</a>
      <a href="/login">로그인</a>
    `,
  });
});

export default router;

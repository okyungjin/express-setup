import express from 'express';
const router = express.Router();

/* GET home page. */
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

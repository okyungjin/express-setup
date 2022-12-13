import express from 'express';
import { getTodos } from '../../modules/todos/B/index.js';
import { tmpl } from '../../modules/todos/S/index.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
  const todos = await getTodos();
  res.render('index', {
    title: '할 일 목록!',
    tmpl: tmpl(todos),
  });
});

export default router;

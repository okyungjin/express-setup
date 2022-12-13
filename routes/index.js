import express from 'express';
import { getTodos } from '../modules/main/B/index.js';
import { tmpl } from '../modules/main/S/index.js';
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const todos = await getTodos();
  res.render('index', { title: 'hi?~', tmpl: tmpl(todos) });
});

export default router;

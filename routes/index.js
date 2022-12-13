import express from 'express';
import { tmpl } from '../modules/main/S/index.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express~', html: tmpl('Express') });
});

export default router;

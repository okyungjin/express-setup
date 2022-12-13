import express from 'express';
import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/index.js';
import loginRouter from './routes/login/index.js';
import todosRouter from './routes/todos/index.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(path.join(path.resolve(), 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/todos', todosRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals = {
    message: err?.message ?? 'Error occurred.',
    error: process.env.NODE_ENV !== 'production' ? err : {},
  };
  res.status(err.status || 500);
  res.render('error');
});
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')} is running`);
});

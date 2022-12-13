import { tap, go } from 'fxjs';
import { $el, $appendTo, $qs } from 'fxdom'
import { tmpl } from '../modules/todos/S/index.js';
import { events } from '../modules/todos/F/index.js';

go(
  tmpl,
  $el,
  tap(console.log),
  events,
  $appendTo($qs('body'))
);

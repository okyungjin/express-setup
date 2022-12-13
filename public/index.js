import { tap, go } from 'fxjs';
import { $el, $appendTo, $qs } from 'fxdom'
import { tmpl } from '../modules/main/S/index.js';
import { events } from '../modules/main/F/index.js';

go(
  tmpl,
  $el,
  tap(events),
  $appendTo($qs('body'))
);

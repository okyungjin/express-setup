import { tap, go } from 'fxjs';
import {$el, $appendTo, $qs, $delegate} from 'fxdom';
import { tmpl } from '../modules/todos/S/index.js';
import { events } from '../modules/todos/F/index.js';
import '../styles/index.css';

go(
  $qs('main'),
  events,
);

import { pipe, go, tap, each } from 'fxjs';
import { $delegate, $closest, $children, $toggleClass } from 'fxdom';

export const events = pipe(
  $delegate('click', '.button--edit', ({ currentTarget }) => {
    go(
      currentTarget,
      $closest('.todo-list__item'),
      $children,
      each($toggleClass('hidden'))
    );
  }),
  $delegate('click', '.button--save', (e) => {
    console.log('save clicked!', e);
  }),
  $delegate('keyup', '.input--todo', (e) => {
    if (e.key === 'Enter') console.log('todo enter~!');
  }),
);

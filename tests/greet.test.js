import test from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../public/script.js';

test('greet returns Hello, World!', () => {
  assert.equal(greet('World'), 'Hello, World!');
});

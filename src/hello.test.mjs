import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hello } from './hello.mjs';

test('hello', () => assert.equal(hello(), 'Lun'));

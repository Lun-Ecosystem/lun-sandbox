import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from './slugify.mjs';

test('slugify punctuation', () => assert.equal(slugify("Lun'Anima : le Core"), 'lun-anima-le-core'));
test('slugify accents', () => assert.equal(slugify('Écosystème Été'), 'ecosysteme-ete'));
test('slugify empty', () => assert.equal(slugify(''), ''));
test('slugify trims dashes', () => assert.equal(slugify('--Hello  World--'), 'hello-world'));
test('slugify digits', () => assert.equal(slugify('Lun 2'), 'lun-2'));

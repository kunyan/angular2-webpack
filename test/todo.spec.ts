/// <reference path="../typings/main.d.ts" />
import { expect } from 'chai';
import { assert } from 'chai';
import { Todo } from '../app/todo';

describe('Todo', () => {

    it('has text', () => {
        let todo: Todo = {text: 'Washing dishes', done: false};
        expect(todo.text).to.be.equals('Washing dishes');
    });

    it('has done', () => {
        let todo: Todo = {text: 'Washing dishes', done: true};
        expect(todo.done).to.be.equals(true);
    });
});

/// <reference path="../typings/main.d.ts" />
import 'reflect-metadata';
import { expect } from 'chai';
import { assert } from 'chai';
import { TodoApp } from '../app/todo_app';

describe('TodoApp', () => {

    let todoApp: TodoApp;
    beforeEach(() => {
        todoApp = new TodoApp();
    });

    it('remaining', () => {
        expect(todoApp.remaining).to.be.equals(1);
    });

    it('archive', () => {
        todoApp.archive();
        expect(todoApp.todos.length).to.be.equals(1);
    });

    it('addTask', () => {
        todoApp.addTask({ text: 'Washing dishes', done: false });
        expect(todoApp.todos.length).to.be.equals(3);
    });


});

/// <reference path="../typings/main.d.ts" />
import 'reflect-metadata';
import { expect } from 'chai';
import { assert } from 'chai';

// import { Todo } from '../app/todo';
import { TodoApp } from '../app/todo_app';

describe('TodoApp', () => {

    let todoApp: TodoApp;
    beforeEach(() => {
        todoApp = new TodoApp();
    });

    it('addTask', () => {
        // let todo: Todo = {text: 'Washing dishes', done: false};
        todoApp.addTask({ text: 'Washing dishes', done: false });
        expect(todoApp.todos.length).to.be.equals(3);
    });
});

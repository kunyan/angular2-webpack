/// <reference path="../typings/main.d.ts" />
import 'reflect-metadata';
import { expect } from 'chai';
import { assert } from 'chai';
import { TodoForm } from '../app/todo_form';

describe('TodoForm', () => {

    let todoForm: TodoForm;
    beforeEach(() => {
        todoForm = new TodoForm();
    });

    it('addTodo without task', () => {
        todoForm.addTodo();
    });

    it('addTodo without task', () => {
        todoForm.task = 'old task';
        todoForm.addTodo();
    });
});

import { Todo } from '../app/todo';

describe('Todo', () => {

    it('has text', () => {
        let todo: Todo = {text: 'Washing dishes', done: false};
        expect(todo.text).toEqual('Washing dishes');
    });

    it('has done', () => {
        let todo: Todo = {text: 'Washing dishes', done: true};
        expect(todo.done).toEqual(true);
    });
});

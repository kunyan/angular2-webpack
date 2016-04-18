webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var browser_1 = __webpack_require__(1);
	var todo_app_1 = __webpack_require__(229);
	browser_1.bootstrap(todo_app_1.TodoApp);


/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var todo_list_1 = __webpack_require__(230);
	var todo_form_1 = __webpack_require__(231);
	var TodoApp = (function () {
	    function TodoApp() {
	        this.todos = [
	            { text: 'learn angular', done: true },
	            { text: 'build an angular app', done: false }
	        ];
	    }
	    Object.defineProperty(TodoApp.prototype, "remaining", {
	        get: function () {
	            return this.todos.filter(function (todo) { return !todo.done; }).length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TodoApp.prototype.archive = function () {
	        var _this = this;
	        var oldTodos = this.todos;
	        this.todos = [];
	        oldTodos.forEach(function (todo) {
	            if (!todo.done) {
	                _this.todos.push(todo);
	            }
	        });
	    };
	    TodoApp.prototype.addTask = function (task) {
	        this.todos.push(task);
	    };
	    TodoApp = __decorate([
	        core_1.Component({
	            selector: 'todo-app',
	            template: "\n    <h2>Todo</h2>\n    <span>{{remaining}} of {{todos.length}} remaining</span>\n    [ <a (click)=\"archive()\">archive</a> ]\n    <todo-list [todos]=\"todos\"></todo-list>\n    <todo-form (newTask)=\"addTask($event)\"></todo-form>",
	            styles: ['a { cursor: pointer; cursor: hand; }'],
	            directives: [todo_list_1.TodoList, todo_form_1.TodoForm]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TodoApp);
	    return TodoApp;
	}());
	exports.TodoApp = TodoApp;


/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var TodoList = (function () {
	    function TodoList() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], TodoList.prototype, "todos", void 0);
	    TodoList = __decorate([
	        core_1.Component({
	            selector: 'todo-list',
	            styles: ["\n    .done-true {\n      text-decoration: line-through;\n      color: grey;\n    }"
	            ],
	            template: "\n    <ul class=\"list-unstyled\">\n      <li *ngFor=\"#todo of todos\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"todo.done\">\n        <span class=\"done-{{todo.done}}\">{{todo.text}}</span></label>\n      </li>\n    </ul>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TodoList);
	    return TodoList;
	}());
	exports.TodoList = TodoList;


/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var TodoForm = (function () {
	    function TodoForm() {
	        this.newTask = new core_1.EventEmitter();
	        this.task = '';
	    }
	    TodoForm.prototype.addTodo = function () {
	        if (this.task) {
	            this.newTask.next({ text: this.task, done: false });
	        }
	        this.task = '';
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TodoForm.prototype, "newTask", void 0);
	    TodoForm = __decorate([
	        core_1.Component({
	            selector: 'todo-form',
	            template: "\n    <form (ngSubmit)=\"addTodo()\">\n      <input type=\"text\" [(ngModel)]=\"task\" size=\"30\"\n             placeholder=\"add new todo here\" required>\n      <input class=\"btn-primary\" type=\"submit\" value=\"add\">\n    </form>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TodoForm);
	    return TodoForm;
	}());
	exports.TodoForm = TodoForm;


/***/ }

});
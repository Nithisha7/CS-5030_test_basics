

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todos", () => {
        expect(todo_service.add_todo({ title: 'T1', description: 'D1', done: false }).todo.length).toEqual(4);
    });

    test("delete_todos", () => {
        expect(todo_service.delete_todo(1).todo.length).toEqual(3);
    });

    test("update_todos1", () => {
        expect(todo_service.update_todo(0,{ title: 'T1', description: 'D1', done: true }).todo.length).toEqual(3);
    });

    test("update_todos2", () => {
        expect(todo_service.update_todo(0,{ title: 'T1', description: 'Do that', done: true })).toEqual({"todo":[{ title: 'T1', description: 'Do that', done: true },
        { title: 'T3', description: 'D1', done: false },
        { title: 'T1', description: 'D1', done: false }]});
    });
    
});
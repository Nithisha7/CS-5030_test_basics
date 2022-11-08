class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todo_data.todo.push(todo);
        return this.todos;
    }

    delete_todo(id){
        // Your code here
        this.todo_data.todo.splice(id,1)
        return this.todos;
    }

    update_todo(id, todo){
        // Your code here
        this.todos.todo[id]=todo
        return this.todos
    }
}

t = new todoservice()
t.add_todo({
    "title": "T4",
    "description": "D4",
    "done": false
});
console.log(t.todo_data.todo)

t.delete_todo(3);
console.log(t.todo_data.todo);

t.update_todo(1,{ title: 'T2', description: 'D2', done: false } );
t.update_todo(2,{ title: 'T3', description: 'D3', done: false } );
console.log(t.todo_data.todo);

module.exports= todoservice;
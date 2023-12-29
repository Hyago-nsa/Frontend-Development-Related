class Todo {
    id: string;
    text: string;

    constructor(TodoText: string){
        this.id = new Date().toString();
        this.text = TodoText;
    }
}

export default Todo;
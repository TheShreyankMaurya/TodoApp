function TodoInfo(todo) {
    let Total = todo.length;
    let Done = 0;

    for (let obj of todo) {
        if (obj.done) {
            Done += 1;
        }
    }

    let Remaining = Total - Done;

    return { total: Total, done: Done, remaining: Remaining };
}

export { TodoInfo };

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const todos = data.slice(0, 5);
            todos.forEach(todo => {
                console.log(todo.title);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

//Pour tester la fonction fetchTodos faire node Basic_Fetch.js
fetchTodos();
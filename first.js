const loadData1 = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const todos = JSON.parse(this.responseText);
            
            const tableBody = document.querySelector("#titles tbody");
            tableBody.innerHTML = ""; 

            todos.forEach(todo => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td>${todo.username}</td>
                    <td>${todo.email}</td>
                    <td>${todo.address.street}, ${todo.address.city}, ${todo.address.zipcode}</td>


                `;

                tableBody.appendChild(row);
            });
        }
    }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
}
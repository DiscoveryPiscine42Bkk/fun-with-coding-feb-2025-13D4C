const list = document.getElementById("ft_list");
        let TodoList = [];

        function createTodo(text) {
            const element = document.createElement('div');
            element.classList.add('todo');
            element.innerHTML = '<p>' + text + '</p>' + '<button onclick="remove(\'' + text + '\')">Delete</button>';
            return element;
        }

        function render() {
            list.innerHTML = '';
            for (let index = 0; index < TodoList.length; index++) {
                const element = TodoList[index];
                list.appendChild(createTodo(element));
            }
            document.cookie = "todos=" + JSON.stringify(TodoList);
        }

        function newTodo() {
            let name = prompt("Name the todo.");
            if (name && name.trim() !== "") {
                TodoList.unshift(name);
                render();
            }
        }

        function remove(text) {
            let yes = confirm('Are you sure to remove?');
            if (yes) {
                TodoList = TodoList.filter((a) => a != text);
                render();
            }
        }

        window.onload = function () {
          
            const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.startsWith("todos=")) {
                        const cookieValue = cookie.substring("todos=".length);
                         if(cookieValue.length > 0){
                              TodoList = JSON.parse(cookieValue);
                         }
                        render();
                        return;
                    }
                }
        }
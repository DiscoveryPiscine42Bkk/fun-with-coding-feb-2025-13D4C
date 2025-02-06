$(document).ready(function() {
    const $list = $("#ft_list");
    let todoList = [];

    function createTodo(text) {
        const $element = $('<div>').addClass('todo');
        $element.html(`<p>${text}</p><button>Delete</button>`);
        $element.find('button').click(function() {
            remove(text); 
        });
        return $element;
    }

    function render() {
        $list.empty();
        $.each(todoList, function(index, element) {
            $list.prepend(createTodo(element));
        });
        document.cookie = "todos=" + JSON.stringify(todoList) + ";path=/";
    }


    function newTodo() {
        let name = prompt("Name the todo.");
        if (name && name.trim() !== "") {
            todoList.unshift(name);  
            render();          
        }
    }

    $("#new").click(newTodo);


    function remove(text) {
        let yes = confirm('Are you sure to remove?');
        if (yes) {
            todoList = todoList.filter((a) => a != text); 
            render();                               
        }
    }

    function loadTodosFromCookie() {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith("todos=")) {
                const cookieValue = cookie.substring("todos=".length);
                
                if (cookieValue) { 
                    try {
                        todoList = JSON.parse(cookieValue);
                    } catch (error) {
                        console.error("Error parsing cookie:", error);
                       
                        document.cookie = "todos=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    }
                }
                
                break;
            }
        }
    }

    loadTodosFromCookie();
    render();
});
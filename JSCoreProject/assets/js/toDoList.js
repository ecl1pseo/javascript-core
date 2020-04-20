//pattern of todo
function ToDo() {
    this.lists = [];
    this.checked = [];
}

function displayTodo(todo) {
    for (i = 0; i < todo.lists.length; i++) {
        $('ul').append(`<li><span class="fa fa-trash"></span> ${todo.lists[i]}</li>`);
    }
    if (todo.checked.length > 0) {
        for (let i of todo.checked) {
            $('li').eq(i).addClass('completed');
        }
    }
}

//create an initial structure 
$('document').ready(function () {
    if (localStorage.length === 0) {
        $('h3').html('Create new To-Do');
        $('#new-li').prop('disabled', true);
    }
    else {
        for (i = 0; i < localStorage.length; i++) {
            $('select').append(`<option>${localStorage.key(i)}</option>`);
        }
        let todo = JSON.parse(localStorage.getItem($('select').val()));
        displayTodo(todo);
        $('h3').html(`<span id="trash" class="fa fa-trash"> </span> ${$('select').val()}`);
    }
});

//display a todo
$('select').change(function () {
    let selectedTodo = $('select').val();
    let todo = JSON.parse(localStorage.getItem($('select').val()));
    $('ul').children().remove();
    $('h3').html(`<span id="trash" class="fa fa-trash"></span> ${selectedTodo}`);
    displayTodo(todo);
});

//Check off specific todos by clicking
$('ul').on('click', 'li', function () {
    let todo = JSON.parse(localStorage.getItem($('select').val()));
    $(this).toggleClass('completed');
    if ($(this).hasClass('completed')) {
        todo.checked.push($(this).index());
        localStorage.setItem($('select').val(), JSON.stringify(todo));
    }
    else {
        todo.checked.splice(todo.checked.indexOf($(this).index()), 1);
        localStorage.setItem($('select').val(), JSON.stringify(todo));
    }
});

//Delete a To-Do List
$('h3').on('click', 'span', () => {
    localStorage.removeItem($('select').val());
    $('select option:selected').remove();
    $('ul').children().fadeOut(300, function () {
        $(this).remove();
    });
    if (localStorage.length === 0) {
        $('select').val('');
        $('#new-li').val('');
        $('h3').html('Create new To-Do');
        $('#new-li').prop('disabled', true);
    }
    else {
        $('select option:selected').next().prop('selected', true);
        $('h3').html(`<span id="trash" class="fa fa-trash"></span> ${$('select').val()}`);
        let nextTodo = JSON.parse(localStorage.getItem($('select').val()));
        displayTodo(nextTodo);
    }
});

//Click on icon to delete li
$('ul').on('click', 'span', function (event) {
    event.stopPropagation();
    //delete option from array
    let todo = JSON.parse(localStorage.getItem($('select').val()));
    todo.lists.splice([$(this).parent().index()], 1);
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
        todo.checked = [];
        for (i = 0; i < $('li').length; i++) {
            if ($('li').eq(i).hasClass('completed')) {
                todo.checked.push(i);
            }
        }
        localStorage.setItem($('select').val(), JSON.stringify(todo));
    });
});

//Add new list
$('#new-li').keypress(function (event) {
    if (event.which === 13) {
        //grabbing new list from text
        let todoText = $(this).val();
        $(this).val('');
        let todo = JSON.parse(localStorage.getItem($('select').val()));
        //adding an li to array
        todo.lists.push(todoText);
        localStorage.setItem($('select').val(), JSON.stringify(todo));
        //creates a new li and add to $('ul')
        $('ul').append(`<li><span class="fa fa-trash"></span> ${todoText}</li>`);
    }
})

//creating new todo
$('button').click(function () {
    let regExp = /^[\w\s-]{3,21}$/;
    let todoName = $('#new-todo').val();
    let checkTodoName = regExp.test(todoName);
    for (i = 0; i < localStorage.length; i++) {
        if (todoName === localStorage.key(i)) {
            $('#new-todo').val('');
            return;
        }
    }
    if (todoName === '' || checkTodoName === false) {
        $('#new-todo').val('');
        return;
    }
    $('#new-li').prop('disabled', false);
    $('h3').html(`<span id="trash" class="fa fa-trash"> </span> ${todoName}`);
    $('#new-todo').val('');
    $('select').append(`<option>${todoName}</option>`);
    $('select').val(todoName);
    $('ul').children().remove();
    localStorage.setItem(todoName, JSON.stringify(new ToDo()));
});







// связанные списки
// структура данных должна быть не перегружена и не содержать много вложенных сущностей

const todoListId_1 = '1'
const todoListId_2 = '2'

const todoLists = [
    {id: todoListId_1, title: 'What to learn', filter: 'all'},
    {id: todoListId_2, title: 'What to buy', filter: 'all'}
]

// обозначение свойств объекта с помощью [] - означает, что используется не значение а выражение или ссылка на переменную
const tasks = {
    [todoListId_1]: [ // '1' ключ
        {id: '11', title: 'HTML', isDone: true},
        {id: '12', title: 'CSS', isDone: true},
        {id: '13', title: 'JS', isDone: true},
    ],
    [todoListId_2]: [ // '2' ключ
        {id: '21', title: 'Beer', isDone: true},
        {id: '22', title: 'Fish', isDone: true},
        {id: '231', title: 'Cheese', isDone: true},
    ],
    [10 + 20]: [], // '30'
    [todoListId_1 + todoListId_2]: [], // '12'
}

// реализация ассоциативного массива есть объект в JS

// add new task to first tasks. обращение к свойству объекта - []. Спред оператор и что добавляем
console.log([...tasks[todoListId_1], {id: '14', title: 'Redux', isDone: false}])
// find task with id = 21
console.log(tasks[todoListId_2].find(t => t.id === '21'))
// Находим нужный тайтл. Заходим в объект-ключ-массив-объект-свойство. Два вида записи
console.log(tasks[todoListId_1][2]["title"])
console.log(tasks[todoListId_1][2].title)

//C -> [...], concat, push
//R -> map, filter, sort, find
//U -> map
//D -> filter

//reduce - сократить массив на одно значение или получить это одно значение
//передается колбэк - (аккумулятор, элемент) => функция, старт значение аккумулятора (по умолчанию 1 элемент массива)
const numbers = [1,2,3,4,5]
// сумма элементов
console.log(numbers.reduce((acc, el) => acc + el, 0))
//acc = 0, el = 1 -> 1
//acc = 1, el = 2 -> 3
//acc = 3, el = 3 -> 6
//acc = 6, el = 4 -> 10
//acc = 10, el = 5 -> 15
//-> 15

//найти максимум в массиве
console.log(numbers.reduce((acc, el) => acc > el ? acc: el))
//-> 5

//найти студента с саммым высоким баллом
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 25,
        isMarried: false,
        scores: 100
    }
];
\
console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

//Фильтрация с помощью reduce
console.log(students.reduce((acc, el) => {
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc
    , []}))

//Хотим переформатировать структуру данных и получить то что ниже
const sts = {
    'Bob': {
        age: 22,
        isMarried: true,
        scores: 85
    },
    "Alex": {
        age: 21,
        isMarried: true,
        scores: 89
    },

}

console.log(students.reduce((acc,el) => {
    acc[el.name] = {...el}
    delete acc[el.name].name
    return acc
}, {}))
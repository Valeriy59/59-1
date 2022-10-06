// CRUD - create, read, update, delete
// Методы массивов map, filter, find

const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// получить массив имен [Bob, Alex, Nick, John]
// 1. взять каждый элемент
// 2. получить из него новое значение
// 3. поместить значение в новый массив

const getNames = (arr) => {
    const result = []
    const getNewValue = (el) => el.name
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}
console.log(getNames(students))

// получить ["Bob, 22 yo, 89 scores", ....]
// 1. взять каждый элемент
// 2. получить из него новое значение
// 3. поместить значение в новый массив

const getData = (arr) => {
    const result = []
    const getNewValue = (el) => `${el.name}, ${el.age} yo, ${el.scores} scores`
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}
console.log(getData(students))

// универсальная функция easyMap

const easyMap = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        result[i] = newValue
    }
    return result
}
// функция easyMap передается в качестве аргумента в другую функцию
console.log(easyMap(students,(el) => el.name))
console.log(easyMap(students,(el) => `${el.name}, ${el.age} yo, ${el.scores} scores`))
console.log(easyMap(students,(el) => el.scores))

//аналогично работает map (каждый элемент нового массива - это преобразованный элемент исходного массива)
console.log(students.map((el) => el.name))
console.log(students.map((el) => `${el.name}, ${el.age} yo, ${el.scores} scores`))
console.log(students.map((el) => (el) => el.scores))



// универсальная функция easyFilter (fn функция предикат - возвращает true или false, проверяет входит ли в условие элемент)

const easyFilter = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(students,el => el.scores >= 100) // если у студента больше 100 баллов, то вернется в новый массив этот элемент

// аналогично работает filter (нет никакого пребразования, все элементы возвращаются в новый массив, согласно условию)
console.log(students.filter(el => el.scores >= 100))



// универсальная функция easyFind (fn функция предикат - возвращает true или false, проверяет входит ли в условие элемент)

const easyFind = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            return (arr[i])
        }
    }
}

console.log(easyFind(students, el => el.name === "Alex"))

// метод find (возвращает первый элемент массива согласно условию)
console.log(students.find(el => el.name === "Alex"))



// универсальная функция easyJoin (fn функция возвращает строку элементов соедениненных по сепаратору )

const easyJoin = (arr, separator = ",") => {
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            result = result + arr[i] + separator
        } else {
            result += arr[i]
        }
    }
    return result
}

console.log(easyJoin(["alex", "bob", "goga"], ' '))

// метод join (возвращает строку элементов соедениненных по сепаратору)
console.log(["alex", "bob", "goga"].join("+"))

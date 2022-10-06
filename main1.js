// users => copy users => change copy => use copy with changes
//
const user = {  // ссылка на объект #567
    name: "Bob",
    age: 23
}

const user2 = user  // ссылка на объект #567

user2.name = "Alex"
console.log(user.name)  // "Alex"

// {}, new Object(), Object.create()

const copyUser = {...user}  // #999 new object, spread operator, создание копии объекта

// copyUser.name = user.name
// copyUser.age = user.age

console.log(copyUser)
console.log(copyUser === user) // false
console.log({} === {}) // false


const array = [1, 2, 3]
const copyArray = [...array]


const state = [
    {
        id: 1,
        name: "Bob",
        isStudent: true

    },
    {
        id: 2,
        name: "Donald",
        isStudent: true

    },
    {
        id: 3,
        name: "Ann",
        isStudent: true

    },
]

const copyState = [...state]  // поверхностная копия спред оператор

const copyState1 = [ // полная копия
    {...state[0]},
    {...state[1]},
    {...state[2]},
    {...state[3]},
]

const copyState2 = state.map(st => ({...st})) // map создает новый масссив

// если нужно изменить только имя не надо делать копию всего
// id === 3, "Ann" => "Anne"

const copyState3 = state.map(st => st.id === 3 ? {...st, name: "Anne"}: st)
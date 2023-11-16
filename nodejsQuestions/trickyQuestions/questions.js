// 1
// function fruit() {
//     console.log(name)
//     console.log(price)

//     var name = 'apple'
//     let price = 20
// }

// fruit()
// Q 1
// output - undefined - in js hoisting rule we can use the varibale before declaring it
//         // can't access before initilization - js hoisting doesn't apply on let and const


// Q2
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1)
// }

// output - 3 3 3
// var has global scope,   we have used setTimeout function that will get executed after sometime, in the meanwhile for get over, so that time the value of i would be 3, thats why three time 3

// Q3
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1)
// }

//output  0,1,2
// let have block label scope thats why every time it will print different value

// Q4
// console.log(+true)
// console.log(typeof +true)

// output->  1 number     whenever we add + sign before boolean or string datatype it will convert that to integer or number that why  true become 1

// Q5
// console.log(!"anil")
// console.log(typeof ("anil"))

// output -> false and string, (!before any string means false)


// Q6
// let data = "size"
// const bird = {
//     size: 'small'
// }
// console.log(bird[data])
// console.log(bird['size'])
// console.log(bird.size)
// console.log(bird.data)

// // output
// small
// small
// small
// undefined

// Q7

// let c = { name: "peter" }
// let d;

// d = c;
// c.name = "anil"
// console.log(d.name)

// output
// anil - > whenver we use object it will use reference type, data store in one place  both will have same memory reference

// Q7
// var x;
// var x = 10;
// console.log(x)

// output/
// 10 -> we can declare one variable multiple time


// Q8
// var x;
// let x = 10;
// console.log(x)

// output
// error -> we can't declare let and var with same name

// Q9
// let a=3
// let b= new Number(3)
// console.log(a==b)
// console.log(a===b)


// output
// true
// false => value of both a and b is same but datatype is diffrent and === is used to compare value as well as datATYPE OF VARIBALE.

// Q11
// let name;
// nmae = {}
// console.log(name)

// output
// undefined


//Q12

// function fruit() {
//     console.log('woof!')
// }

// fruit.name = 'apple'

// fruit()

// // output
// woof   if we are adding any key to any function then it will not affect the function, nothin will happen

// Q13
// function sum(a, b) {
//     return a + b;
// }

// console.log(1, "2")

// output
// 1 2


// Q14

// let number = 0
// console.log(number++)
// console.log(++number)
// console.log(number)

// output
// 0 -> first it will print then after that it will get incremented
// 2 -> number is got incremented by one in the first console.log, and then then second console.log it is increment by one that why 2
//2 -> now the number is 2

// Q15

// function getAge(...args) {
//     console.log(typeof args)
// }

// getAge(21)

// Object --> in js they treat object and array botha as array

// let n = [1, 23, 4]
// console.log(typeof n)
// // Object --> in js they treat object and array botha as array

// Q16
// function getAge() {
//     'use strict'
//     age = 21;
//     console.log(age)
// }

// getAge()

// output
// error age is not defined.    if we use 'use-strcit mode than we will have to put let age=21 or var age=21'

// Q17
// const sum = eval('10*10+5')
// console.log(sum)

// output
// 105  - eval take string as integer

// Q18
// sessionStorage.setItem('cool_secret',123)
//  for localstorgae 30 days
// it will lost once u close the browser


// Q19
// const obj = { 1: "a", 2: "b", 3: "c" }
// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty(1))

// //output
// true    if u have numeric key then you can check as number and string
// true


// Q20
// const obj = { a: "one", b: "two", a: "repeat" }
// console.log(obj)

// // output
// { a: 'repeat', b: 'two' }

// Q21
// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue
//     console.log(i)
// }

// output 1 2 4

// Q22
// const foo = () => console.log('first')
// const bar = () => setTimeout(() => console.log('second'))
// const baz = () => console.log('third')

// bar()
// foo()
// baz()

// outptu    after execution of normal function the setTimout function gets executed
// first
// third
// second


// Q23

// call and bind
// const person = { name: 'lydia' }
// function sayHi(age) {
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21))


// lydia is 21        for call we can directly call a function
// [Function: bound sayHi]      when ever we are binding a fucntion then that we will have to call that function like this sayHi.bind(person, 21)()

// Q24

// function sayHi() {
//     return (() => 0)(
//     )
// }

// console.log(typeof sayHi())
// output number


// Q25
// const numbers = [1, 2, 3]
// numbers[9] = 11
// console.log(numbers)

// output
// [ 1, 2, 3, <6 empty items>, 11 ]

// Q26
// const numbers = [1, 2, 3]
// numbers[3] = numbers
// console.log(numbers)

{/* <ref *1> [ 1, 2, 3, [Circular *1] ] */ }

// Q27

// 29 Everything in javascript is either a...
// A: primitive or Object
// B: function or object
// C:trick question! only objects
// B: number or object

// output
// primitive or Object

// Q28
// console.log(!!null)
// console.log(!!"")
// console.log(!!1)

// Q29
// console.log(setInterval(() => console.log('hi'), 1000))
// console.log(setInterval(() => console.log('hi'), 1000))
// console.log(setInterval(() => console.log('hi'), 1000))


// Q30
// console.log(3 + 4 + '5')

// Q31
// console.log(typeof 3 + 4 + '5')
//output number45

// Q32
// function getInfo(number){
//     member.name='anil'
// }

// const person = {name:'sarah'}
// getInfo(person)
// console.log(person)

//output
// {name:'anil'}
// whenever we pass any object to a fucntion it passed as a reference

// Q34
// function Car() {
//     this.make = 'tata'
//     return { make: 'Kia' }
// }

// const myCar = new Car()
// console.log(myCar.make)

//output
// make:'Kia'

// Q35
// let x = y = 10
// console.log(y)

// output 10

// Q36
// console.log(!true - true)

// -1

// Q37
// console.log(true + +'10')
// 11

// Q38
// count character

// const str = "hare krishna hare krishna krishna krishna hare hare"

// const obj = {}

// for (let f of str) {
//     if (obj[f]) {
//         obj[f] += 1
//     }
//     else {
//         obj[f] = 1
//     }
// }

// console.log(obj)


// Q39
//statically typed langauge
// is a language where we define datatype of variable while declaring it

// Q40
// console.log(-0 == 0)  = true
// console.log(-0 === 0) = true


// Q40
// make length 0.
// let arr = [1, 3, 5, 6]
// arr.length = 0
// console.log(arr)

// Q41
// let a = 10
// let b = 20
// let c = 30 - (a = b + 10)
// console.log(`c = ${c}`)

// output 0.

// Q41

// console.log('A')
// !async function () {
//     const x = await 5;
//     console.log('c')
// }()

// console.log("B")
//   ouput a,b,c

// Q42
// console.log(false == [])
// console.log(false == ![])

// o/p true true

// Q43
// console.log(888888888888888888)
// 888888888888888800

// Q44
// const arr = ["ab", "cd", "ef"]
// const str = "abcdef"

// const strMatch = str.includes('a')
// const arrMatch = arr.includes('a')

// console.log(strMatch, arrMatch)
// o/p true false

// Q45
// const obj = { name: 'X' }

// delete obj.name;
// obj.name = 'Y'

// Q46
// function init(x, y, z) { }
// function end(a, b = 0, c) { }

// console.log(init.length)
// console.log(end.length)


// o/p 3 1
// 47

// const arr = [1, 2, 3]
// console.log(arr[5])

// o/p undefined

// Q48
// 5 ways to create obj

// const obj1 = {}

// const obj2 = new Object()

// const obj3 = Object.assign({}, {})

// const obj4 = Object.create({})

// function test() { }

// const obj5 = new test()
// console.log(obj1, obj2, obj3, obj4, obj5
// )

// Q49
// const obj = {}
// obj[obj['A'] = 'B'] = "c"
// console.log(obj)

// o / p { A: 'B', B: 'c' }

// Q50

// let str = new String('js')
// console.log(str === 'js')
// console.log(str == 'js')

// o/p    false true

// const data1 = ['c', 'b', 'f']
// const data2 = ['c', 'b', 'f']

// const d = data1.slice().reverse()
// data2.reverse()

// console.log(d)
// console.log(data1)
// console.log(data2)
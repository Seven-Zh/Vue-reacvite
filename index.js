import { reactive } from "./reactive.js";

// const t = {
//   a: 1,
//   b: 2,
//   get c() {
//     return this.a + this.b;
//   },
//   d: {
//     e: 1,
//   },
// };

// const state = reactive(t);

// function fn() {
//   for (const key in state) {
//   }
//   Object.keys(state);
//   state.a;
//   state.b;
//   console.log(state.c);
// }

// fn();

// const state2 = reactive(t);

// console.log(state === state2);

// state.d.e = 5;

// Reflect.deleteProperty(state, "a");

// console.log("a" in state);

// state.a

const arr = [1, 2, 3, 4, 5, 6];

const state = reactive(arr);

state[0];

// state.forEach(item => {

// });

console.log(state.includes(1));

const obj = reactive({});

state.push(obj);

console.log(state.includes(obj));

console.log(state)

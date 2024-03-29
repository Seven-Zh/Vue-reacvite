import { reactive } from "./reactive.js";
//this指向应该是被代理的对象；
// const t = {
//   a: 1,
//   b: 2,
//   get c() {
//     return this.a + this.b;
//   },
//   d: {
//     e: {
//       f: 1,
//     },
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

// 用同一个对象去代理，他们应该是相等的
// console.log(state === state2);

//对象里面的值还是对象get应该返回被代理的对象值，不然就会触发不了依赖收集
// state.d.e.f

// state.a

// state.c

// console.log(state)

// Reflect.deleteProperty(state, "a");

// console.log("a" in state);

// state.a

// console.log(state.d.e)

// 将一个原始对象的代理对象push进一个代理过的数组里，不管是原始对象o还是代理对象onj，state.includes返回的都应该是true
//所以在push方法触发set时，应该set的是代理对象obj的原始值
// const o = {}

// const obj = reactive(o)

// const arr = [1, 2, 3]

// const state = reactive(arr)

// state.push(obj)

// console.log(state.includes(obj))  //true

// console.log(state.includes(o))  //true

// console.log(state)

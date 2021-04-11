// rest
const objA = {
  a: 1,
  d: 7,
}

const objB = {
  ...objA,
  d: 4,
  t:5,
}

const objC = {
  e: 6
}

// const combineObj = {...objA, ...objB, ...objC }
// const combineObj2 = Object.assign(objA, objB, objC)
console.log(objB)
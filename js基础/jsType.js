// 5中基本类型
let data = ""
console.log(typeof data) // "string"

data = 0
console.log(typeof data) // "number"

data = NaN
console.log(typeof data) // "number"

data = false
console.log(typeof data) // "boolean"

data = undefined
console.log(typeof data) // "undefined"

data = null
console.log(typeof data) // "object"

// ES6新增类型
data = Symbol('data')
console.log(typeof data) // "symbol"

//  其他类型
data = {}
console.log(typeof data) // "object"

data = function(){}
console.log(typeof data) // "function"

data = []
console.log(typeof data) // "object"

// 数组判断
let data = []
console.log(data instanceof Array) // "true"
console.log(data.__proto__===Array.prototype) // "true"
console.log(Object.getPrototypeOf(data)===Array.prototype) // "true"
console.log(data.constructor===Array) // "true"
console.log(Object.prototype.toString.call(data)==="[object Array]") // "true"
console.log(Array.isArray(data)) // "true"



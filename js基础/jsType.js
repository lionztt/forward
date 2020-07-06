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

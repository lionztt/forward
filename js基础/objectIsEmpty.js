// 1. 序列化后判断
var data = {};
var temp = JSON.stringify(data) == "{}";
console.log(temp); //true

// 2.  for in 循环判断
var data = {}
var isEmpty = function(obj){
   for(var key in obj){
    return false;
  }
   return true;
}
console.log(isEmpty(data));// true;

// 3. 判断对象属性名称数组长度
var data = {};
var arr = Object.getOwnPropertyNames(data);
console.log(arr.length==0) // length为0

// 4. ES6 语法，判断对象属性名称数组长度
var data = {};
var arr = Object.keys(data);
console.log(arr.length==0) ; //length为0
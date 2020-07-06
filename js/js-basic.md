# Js基础

## 判断一个对象是否是空对象

    ```javascript
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
    ```

## 判断js数据类型

    ```javascript
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

    ```

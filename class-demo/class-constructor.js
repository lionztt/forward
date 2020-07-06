class MathHandle {
    constructor(x, y) { // new关键字立马执行的函数
        this.x = x;
        this.y = y;
    }
    add() { // 扩展方法
        return this.x + this.y;
    }
}

const m = new MathHandle(1, 2);
console.log(m.add())

console.log(typeof MathHandle)
console.log(MathHandle === MathHandle.prototype.constructor)
console.log(m.__proto__ === MathHandle.prototype)


class Animal{
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} eat`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    bark() {
        console.log(`${this.name} bark`)
    }
}

const hashiqi = new Dog('哈士奇')
hashiqi.eat() 
hashiqi.bark()
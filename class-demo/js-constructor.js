function MathHandle(x, y){
    this.x = x;
    this.y = y;
}

MathHandle.prototype.add = function(){
    return this.x + this.y
}

var m = new MathHandle(1, 2)
console.log(m.add())

console.log(typeof MathHandle)
console.log(MathHandle === MathHandle.prototype.constructor)
console.log(m.__proto__ === MathHandle.prototype)

// 继承
function Animal() {
    this.eat = function() {
        console.log('animal eat')
    }
}

function Dog() {
    this.bark = function() {
        console.log('dog bark')
    }
}

Dog.prototype = new Animal()

var hashiqi = new Dog()
hashiqi.bark()
hashiqi.eat()



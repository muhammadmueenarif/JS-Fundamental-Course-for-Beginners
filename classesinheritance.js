class Animal {
    constructor(name) {
        this.name=name;
    }
    makesound(){
        console.log(`${this.name} make a generic sound`);
    }
}

class Cat extends Animal {
    makesound() {
        console.log(`${this.name} says meow`);
    }
}

const myCat= new Cat('Whiskers');
myCat.makesound();
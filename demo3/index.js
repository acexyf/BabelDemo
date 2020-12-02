let fun = () => console.log("hello babel.js", this);

class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`my name is：${this.name}`);
  }
}

Object.assign({},{})


const tom = new Person("tom");
tom.say();

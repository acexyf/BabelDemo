let fun = () => console.log("hello babel.js");
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`my name is：${this.name}`);
  }
}
const tom = new Person("tom");
tom.say();

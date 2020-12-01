[].filter((elem) => {
  return elem > 5;
});

Object.assign({},{})

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

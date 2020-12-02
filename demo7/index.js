[1, 5, 10, 15].filter((value) => {
  return value > 9;
});

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


let promise = new Promise((resolve, reject) => {
  resolve(1);
});

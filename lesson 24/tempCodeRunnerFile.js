class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' издает звук.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(this.name + ' лает.');
    }
  }
  
  var d = new Animal('Митци');
  d.speak();
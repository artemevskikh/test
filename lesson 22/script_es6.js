class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`)
    }
}
let ivan = new User('Ivan', 28),
    alex = new User('Alex', 29);
console.log(ivan);
console.log(alex);
ivan.exit();
alex.exit();

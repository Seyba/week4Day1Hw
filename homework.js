//* ================ Week 4 - Day 1 - HW ====================

class Hamster {
    constructor(owner="", name){
        this.owner = owner
        this.name = name
        this.price = 15
    }
    wheelRun(){
        console.log('squeak, squeak')
    }
    eatFood(){
        console.log('nibble, nibble')
    }
    getPrice(){
        return this.price
    }
}

class Person  {
    constructor(name){
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamster = []
        this.bankAccount = 340
        this.name = name
    }

    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(name){
        console.log(`Hi ${name}`)
    }

    eat(){
        //console.log(`${this.weight += 1}, ${this.mood += 1}`)
        this.weight + 1
        this.mood + 1
    }
    exercise(){
        return this.age - 1
    }

    ageUp(){
        this.age + 1
        this.height + 1
        this.weight + 1
        this.mood - 1
        this.bankAccount + 1
    }
    buyHamster(ham){
        ham = new Hamster(ham)
        this.mood + 10
        this.bankAccount -= ham.getPrice
        this.hamster.push(ham)
    }
    
}
// buyHamster(hamster) - push the hamster object onto the hamster array, 
// increment mood by 10, 
// decrement bankAccount by the value of 
// the hamster (hint: use getPrice())
const timmy = new Person('Timmy') // instantiate Person 
timmy.age = 5 // age timmy to 5
const timmyAge = timmy.getAge()
console.log('timmy is', timmyAge) // logs Timmy's age
// Timmy's eating
timmy.eat() //
timmy.eat() //
timmy.eat() // timmy eats five times
timmy.eat() //
timmy.eat() //
timmy.buyHamster('turk')
// Timmy's excercising
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.age = 9
const gus = new Hamster('Gus', 'Timmy')
timmy.buyHamster(gus)
timmy.age = 15

timmy.eat()
timmy.eat()

timmy.exercise()
timmy.exercise()

timmy.getAge()


class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.entree = dessert
    }
    
}

class Chef {
    getDinner(appetizer, entree, dessert){
        return new Dinner(appetizer, entree, dessert)
    }
    
}
const chefMike = new Chef()

const dinnerOne = chefMike.getDinner('salad', 'steak', 'yogurt')
const dinnerTwo = chefMike.getDinner('Shrimp', 'burger', 'chocolate')
const dinnerThree = chefMike.getDinner('lobster', 'chicken', 'granola bar')

console.log(dinnerOne)
console.log(dinnerTwo)
console.log(dinnerThree)
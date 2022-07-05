class Hero {
    constructor (name) {
        this.name = name
        this.attack = "default"
        this.jump = "default"
    }

    attack() {
        console.log("attack")
    }

    jump() {
        console.log("jump")
    }
    
}

let Vayne = new Hero ("Vayne")

Vayne.attack


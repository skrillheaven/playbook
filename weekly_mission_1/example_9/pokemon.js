class pokemon {
    constructor(name){
        this.name = name
        this.poke_name = "Mi pokemon ";
    }
    
    sayHello(){
        console.log(this.poke_name + this.name + " te saluda!!!")
    }

    sayMessage(say){
        console.log( this.poke_name + this.name + " dice: " + say)

    }


}
module.exports = pokemon
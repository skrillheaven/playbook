export default class pokemon {

    constructor(name){
        this.name = name
        this.pokename = "Mi pokemon "
    }

    sayHello(){
        console.log(this.pokename + this.name + " te saluda!!!")
    }


}
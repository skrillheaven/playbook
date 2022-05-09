import Explorer from './explorer.js'

export default class Viajero extends Explorer {
    constructor(name, username, mission, cycle) { //constructor de la clase hija
        super(name, username, mission) // atributos clase padre 
        this.cycle = cycle //agregando atributo cycle al padre 
    }

    getGeneralInfo() {
        let nameAndUsername = this.getNameAndUsername()
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}
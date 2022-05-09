//clase padre, en la cual trabajaremos mas adelante 
export default class Explorer { // EXPORT NOS PERMITE USAR LA CLASE EN OTRO ARCHIVO
    constructor(name, username, mission) {
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername() {
        return `Explorer ${this. name}, username: ${this.username}`
    }
}
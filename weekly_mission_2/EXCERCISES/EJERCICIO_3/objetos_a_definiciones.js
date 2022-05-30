class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issue_close) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issue_close = issue_close
    }


    getTotalIssues() {
        return (this.issues_open + this.issue_close)
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }

}


const datos = new Student("1", "2", "3", "4", "5", "6", "7", "8")
console.log(datos)
console.log(datos.getTotalIssues())
console.log(datos.getGeneralInfo())
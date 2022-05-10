const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}


const issue = {
    title: "Requerimiento 1",
    repositoryNameAssociated: repo.name,
    status: "close",
    numberOfComments: 15,
    labels: 25,
    author: repo.author,
    dateCreated: new Date(2018, 15, 24, 10, 33, 30, 0),
    lastUpdated: new Date(),

    getTitleAndAuthor: function() {
        return `The title is: ${this.title} and the author is: ${this.repositoryNameAssociated}`
    }



}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log("\n ISSUES")
console.log(issue)
console.log(issue.getTitleAndAuthor())
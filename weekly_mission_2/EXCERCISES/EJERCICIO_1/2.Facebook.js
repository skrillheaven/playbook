const user = {
    name: "Alberto Cruz",
    email: "@gmail.com",
    password: "1234",
    pictureperfil: "☼Æý",
    getname: function() {
        return `Name User: ${this.name}`
    }
}


console.log("USER")
console.log(user)
console.log(user.getname())
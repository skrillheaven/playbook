const user = {
    name: "Alberto Cruz",
    email: "@gmail.com",
    password: "1234",
    pictureperfil: "☼Æý",
    getname: function() {
        return `Name User: ${this.name}`
    }
}

const post = {
    nameuser: user.name,
    date: new Date(),
    title: "My little, beautiful dog ↓↓",
    comments: 47,
    reactions: 12,
    getAuthorandTitle: function() {
        return `Your friend ${this.nameuser} \njust posted something new!!!! ${this.title}`
    },
    getDate: function() {
        return `Date Time: ${this.date}`
    }
}






console.log("USER")
console.log(user)
console.log(user.getname())


console.log("\nPOST")
console.log(post)
console.log(post.getAuthorandTitle())
console.log(post.getDate())
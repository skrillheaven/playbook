const explorers = [{
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]



console.log("Imprimiendo nombre y stack del explorer con for each")
explorers.forEach(explorer => console.log("Nombre del explorer : " +
        explorer.name + "\nStack:" +
        explorer.stack))
    //explorers.forEach(explorer => console.log(explorer.stack)) otra manera de hacerlo

console.log("\nImprimiendo lista con MAP")
const explorer_stack = explorers.map(list_explorer => list_explorer.stack)

console.log("\nStack con map: " +
    explorer_stack)

console.log("\nUSO DE FILTER")
const filter_js = explorers.filter(jslist => jslist.stack.includes("js"))
console.log("Explorers con stack js: ")
console.log(filter_js)
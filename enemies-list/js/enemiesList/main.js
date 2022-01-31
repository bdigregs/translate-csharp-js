// Put your code here

console.log("My enemies list!")
console.log("-----------------------")

const Enemies = [
    {
        FirstName: "Joshua",
        LastName: "Flowers",
        Offenses: [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        IsReallyHated: true
    },
    {
        FirstName: "Darth",
        LastName: "Vader",
        Offenses: [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
        ],
        IsReallyHated: false
    },
    {
        FirstName: "Betty",
        LastName: "Rudelady",
        Offenses: [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"
        ],
        IsReallyHated: true
    },
    {
        FirstName: "Leon",
        LastName: "Peck",
        Offenses: [
            "Keeps giving me a hotplate"
        ],
        IsReallyHated: false
    }
]
 console.log(Enemies)



let getEnemies = () => {
    for (enemy of Enemies) {
        if (enemy.isReallyHated = true) {
            console.log(`${enemy.FirstName} ${enemy.LastName}, really, really dislike!`)
        }
        else {
            console.log(`${enemy.FirstName} ${enemy.LastName}`)
        }
    }
}
getEnemies()

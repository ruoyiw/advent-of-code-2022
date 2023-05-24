import { readFileSync } from "node:fs"

const elves = readFileSync("./day-01/day01.txt", {encoding: "utf-8"}).trim().split("\n\n")

const puzzle1 = () => {
   const calories = elves.map((elf) => {
    const caloryArray = elf.split('\n').map(Number)
    const total = caloryArray.reduce((acc, cur) => acc + cur, 0)
    return total
   })

   console.log(Math.max(...calories))

   return calories
}

const puzzle2 = () => {
   const calories = puzzle1()
   const sortedCalories = calories.sort((a, b) => b - a)

   const firstThree =  sortedCalories.reduce((acc, cur, index) => {
      if (index < 3) { 
         return acc + cur
      } return acc
   }, 0)

   console.log({ firstThree })
}

puzzle2()
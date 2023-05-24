import { readFileSync } from "node:fs"

const scoreGuide1 = {
    X: {
        score: 1,
        A: 3,
        B: 0,
        C: 6,
    },
    Y: {
        score: 2,
        A: 6,
        B: 3,
        C: 0,
    },
    Z: {
        score: 3,
        A: 0,
        B: 6,
        C: 3,
    },
}

const scoreGuide2 = {
    X: {
        score: 0,
        A: 3,
        B: 1,
        C: 2,
    },
    Y: {
        score: 3,
        A: 1,
        B: 2,
        C: 3,
    },
    Z: {
        score: 6,
        A: 2,
        B: 3,
        C: 1,
    },
}

const rounds = readFileSync("./day-02/day02.txt", {encoding: "utf-8"}).trim().split("\n")

const puzzle1 = () => {
    const scores = rounds.map((round) => {
        return scoreGuide1[round[2]].score + scoreGuide1[round[2]][round[0]]
    })
    const total = scores.reduce((acc, cur) => acc + cur, 0)

    console.log({ total })
}

const puzzle2 = () => {
    const scores = rounds.map((round) => {
        return scoreGuide2[round[2]].score + scoreGuide2[round[2]][round[0]]
    })
    const total = scores.reduce((acc, cur) => acc + cur, 0)

    console.log({ total })
}

puzzle2()
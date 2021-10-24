export type HandleType = {

    id: number
    contestId: number
    problem: ProblemType
    author: {
        contestId: number
        members: [
            {
                handle: string
            }
        ],
        participantType: string
        ghost: boolean
        room: number
        startTimeSeconds: number
    },
    programmingLanguage: string
    testset: string
    passedTestCount: number
    timeConsumedMillis: number
    memoryConsumedBytes: number
    verdict: VerdictType
}

export type ProblemType = {
    contestId: number
    index: string
    name: string
    type: string
    points: number
    tags: []
}

export enum VerdictType {
    OK = 'OK',
    WRONG = 'WRONG'
}
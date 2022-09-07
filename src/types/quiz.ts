export interface Problem {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>
}

export interface State {
    data: Array<Problem>,
    results: Array<string>,
    isloaded: boolean,
    score: number
}
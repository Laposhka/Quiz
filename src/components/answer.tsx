import { useSelector} from "react-redux"
import {Problem, State} from '../interfaces/quiz'
import "../assets/css/result.scss"

const Answer = (props: {no: number}) => {
    const problem: Problem = useSelector(
        (state: {quiz: State}) => {
            return state.quiz.data[props.no]
        }
    )

    const myAnswer = useSelector(
        (state: {quiz: State}) => state.quiz.results[props.no]
    )

    const isCorrect: boolean = (myAnswer === problem.correct_answer);

    return (
        <>
            <div className="answer">
                <div className="correctness">{isCorrect ? "+" : "-"}</div>
                <div className="problem" dangerouslySetInnerHTML={{__html: problem["question"]}}/>
            </div>
        </>
    )
}

export default Answer;
import { useSelector} from "react-redux"
import "../assets/css/quiz.scss"
import {Problem, State} from '../interfaces/quiz'

const Question = (props: {no:number}) => {

    const problem: Problem = useSelector((state: {quiz: State}): Problem => {
        return state.quiz.data[props.no]
    })
    
    return (
        <>
            <div className="heading">
                {`${problem["category"]}`}
            </div>
            <div className="question" dangerouslySetInnerHTML={{__html: problem["question"]}}>
            </div>
        </>
    )
}

export default Question
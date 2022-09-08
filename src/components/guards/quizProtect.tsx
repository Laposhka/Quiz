import { useSelector} from "react-redux"
import {State} from '../../interfaces/quiz'
import { Navigate } from 'react-router-dom';

const QuizProtect = (props: any) => {
    const {quizProgress} = useSelector((state: {quiz: State}) => state.quiz)
    if(quizProgress === 1){
        return (
            <>{props.children}</>
        )
    }
    else {
        return (
            <Navigate replace to='/'/>
        )
    }
}

export default QuizProtect
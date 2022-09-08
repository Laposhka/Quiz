import { useSelector} from "react-redux"
import {State} from '../../interfaces/quiz'
import { Navigate } from 'react-router-dom';

const ResultProtect = (props: any) => {
    const {quizProgress} = useSelector((state: {quiz: State}) => state.quiz)
    if(quizProgress === 2){
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

export default ResultProtect
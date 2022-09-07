
import { useSelector, useDispatch} from "react-redux"
import { useNavigate, } from "react-router-dom";
import Answer from '../../components/answer'
import {State} from '../../types/quiz'
import { clearData } from "../../redux/quiz.slice";
import { playAgain } from "../../redux/result.slice";

import '../css/quiz.scss'
import '../css/result.scss'

const Result = () => {
    const {isloaded, score} = useSelector((state: {quiz: State}) => state.quiz);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        (!isloaded) ? <></> : ( 
            <div className='result'>
                <div className='heading'>
                    <div className="heading-inner">
                        You scored<br/>
                        {score} / 10
                    </div>
                </div>
                <div className='answers'>
                    {
                        [...Array(10)].map((ele, i) => {
                            return (
                                <Answer no={i} key={i}/>
                            )
                        })
                    }
                </div>
                <button className='btn green' onClick={() => {
                        dispatch(clearData())
                        // dispatch(playAgain())
                        navigate('/quiz')
                    }
                }>PLAY AGAIN?</button>
            </div>
        )
    )
}

export default Result
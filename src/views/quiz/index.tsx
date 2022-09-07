import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';

import Question from "../../components/question"
import {fetchUrl} from "../../config/fetchUrl"
import { setData, setResult } from '../../redux/quiz.slice'
import {State} from '../../types/quiz'
import { resultState } from "../../types/result";
import "../css/quiz.scss"

const Quiz = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {play} = useSelector((state: {result: resultState}) => state.result);

    useEffect(() => {
        fetch(fetchUrl)
        .then(response => response.json())
        .then(res => dispatch(setData(res.results)))
    }, [dispatch, play])

    const isloaded = useSelector((state: {quiz: State}) => state.quiz.isloaded);
    const [no, setNo] = useState(0)
    
    const handleClick = (ans: string) => {
        dispatch(setResult(ans))
        if(no === 9) {
            navigate('/result')
        }
        setNo(no + 1);
    }

    return (
        (!isloaded) ? 
        <ReactLoading className="loading" type={"bars"} color={'#FFF'}/> : (
            <div className="quiz">
                <Question no={no}></Question>
                <div className="number">
                    {no + 1} / 10
                </div>
                <div className="btns">
                    <button className="btn green" onClick={() => handleClick("True")}>True</button>
                    <button className="btn red" onClick={() => handleClick("False")}>False</button>
                </div>
            </div>
        )
    )
}

export default Quiz
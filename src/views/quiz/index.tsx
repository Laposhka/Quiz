import { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';

import Question from "../../components/question"
import Button from "../../components/button";

import {fetchUrl} from "../../config/fetchUrl"

import { setData, setResult, finishQuiz } from '../../redux/quiz.slice'
import {State} from '../../interfaces/quiz'
import "../../assets/css/quiz.scss"

const Quiz = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(fetchUrl)
        .then(response => response.json())
        .then(res => dispatch(setData(res.results)))
    }, [dispatch])

    const isloaded = useSelector((state: {quiz: State}) => state.quiz.isloaded);
    const [no, setNo] = useState(0)
    
    const handleClick = useCallback((ans: string) => {
        dispatch(setResult(ans))
        if(no === 9) {
            dispatch(finishQuiz())
            navigate('/result')
        }
        setNo(no + 1);
    }, [no, dispatch, navigate]);

    return (
        (!isloaded) ? 
        <ReactLoading className="loading" type={"bars"} color={'#FFF'}/> : (
            <div className="quiz">
                <Question no={no}></Question>
                <div className="number">
                    {no + 1} / 10
                </div>
                <div className="btns">
                    <Button color="green" text="True" handleClick={() => handleClick("True")}/>
                    <Button color="red" text="False" handleClick={() => handleClick("False")}/>
                </div>
            </div>
        )
    )
}

export default Quiz
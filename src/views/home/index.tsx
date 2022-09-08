
import Button from '../../components/button'
import '../../assets/css/home.scss'
import { startQuiz } from '../../redux/quiz.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="intro">
            <div className='heading'>Welcome to the<br/>Trivia Challenge!</div>
            <div className='brief'>You will be presented with 10 True or False questions.</div>
            <div>Can you score 100%?</div>
            <div className='link'>
                <Button text='Begin' color='yellow' handleClick={() => {
                    dispatch(startQuiz())
                    navigate('/quiz')
                }}/>
            </div>
        </div>
    )
}

export default Home
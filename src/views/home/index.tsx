
import {Link} from 'react-router-dom'
import '../css/home.scss'

const Home = () => {
    return (
        <div className="intro">
            <div className='heading'>Welcome to the<br/>Trivia Challenge!</div>
            <div className='brief'>You will be presented with 10 True or False questions.</div>
            <div>Can you score 100%?</div>
            <div className='link'>
                <Link to='/quiz'>Begin</Link>
            </div>
        </div>
    )
}

export default Home
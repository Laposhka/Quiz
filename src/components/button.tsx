import '../assets/css/quiz.scss'

interface IButtonProps {
    color: string,
    text: string,
    handleClick?(): any,
}

const Button = (props: IButtonProps) => {
    return (
        <button className={`btn ${props.color}`} onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

export default Button;
import './static/app.css'
import Images from './Images'

function Card(props) {
    console.log(props)
    return (
        <>
            <div className="card">
                <Images src={props.url}/>
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title"> {props.sname} </h3>
                    <a href={props.link}>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card
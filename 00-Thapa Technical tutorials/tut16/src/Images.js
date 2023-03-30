const image = {
    width : '250px'
}

function Images(props) {
    console.log(props)
    return <img src={props.src} style={image} alt="myPic" className="card__img" />
}

export default Images
function List(params) {
    return (
        <>  
            <h2>Friend List 🙋‍♀️🐰🐹🐶🙀</h2>
            <ul> {params.data.map((data) =><li>{data}</li>)} </ul>
        </>
    )
}

export default List
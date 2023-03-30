/* 
    TODO: Todo mini project
    ? when use map then relaise return statement must be component
    ? <input value={name_hook}> to get re-render
    ? when we perform delete just pass the delete function as props to child to get used

    ! mistake onClick={props.deleteItems(id)}
        * onClick={() => props.deleteItems(id)}
    ! main logic of delete 
        * setLists((prev) => { return prev.filter((item, index) => {
            * return index !== id; });
    })
*/
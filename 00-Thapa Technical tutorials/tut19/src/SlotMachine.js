function SlotMachine(params) {
    let x = params.x, y = params.y, z = params.z;
    console.log(params) 

    if(x === y && y === z) {
        return (
            <>
                <p> {x} {y} {z} </p>
                <p>This is Matching</p>
            </>
        )   
    } else {
        return (
            <>
                <p> {x} {y} {z} </p>
                <p>This is 👎 Matching</p>
            </>
        )
    }
}

export default SlotMachine
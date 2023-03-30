/* 
    TODO: Forms
    ? controlled is input form element whose value is controlled by React 
        * <input type="text" name="name" id="name" value={'vishal'} />
        ? <input value={value}>
        ? use defaultValue="vishal" (single source of truth)
        ? must be handle using onChange
*/
const inputData = (params) => {
    let {name,value} = params.target
    setData((prev) => {
      return {
        ...prev,
        [name] : value,
      }
    })
}
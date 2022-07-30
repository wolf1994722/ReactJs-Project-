// generic type template letral

type listProps<T> = {
    items : T[]
    onClick : (value: T) => void
}

// function List<T extends string | number>({items, onClick} : listProps<T>) {
//   return (
//     <>
//         <h2>List of Items</h2>
//         {
//             items.map((item,index) =>{
//                 return(
//                     <div key={index} onClick={()=> onClick(item)}>{item}</div>
//                 )
//             })
//         }
//     </>
//   )
// }
function List<T extends {first : string, last : string}>({items, onClick} : listProps<T>) {
  return (
    <>
        <h2>List of Items</h2>
        {
            items.map((item,index) =>{
                return(
                    <div key={index} onClick={()=> onClick(item)}>{item.first} {item.last}</div>
                )
            })
        }
    </>
  )
}

export default List
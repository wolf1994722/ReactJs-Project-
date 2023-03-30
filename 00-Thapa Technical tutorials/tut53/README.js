/* 
    TODO: Portfolio Filter Image Gallery
    ! if we make folder inside public then it can be access in src with name of folder only
    ? npm install react-icons --save
*/

//! filter item using tag
const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categItem;
    });

    setItems(updatedItems);
}
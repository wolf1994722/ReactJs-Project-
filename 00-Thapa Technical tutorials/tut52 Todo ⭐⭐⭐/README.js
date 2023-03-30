/* 
    TODO: TODO with edit + sass
    ? npm i sass
*/

const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categItem;
    });

    setItems(updatedItems);
}
/* 
  * Render Multiple Element inside ReadDOM.render()
*/

document.getElementById("root").render(
  <div>
    <h1>welcome</h1>
    <p>card</p>
  </div>
);

document.getElementById("root").render(
  [
    <h1>welcome</h1>,
    <p>card</p>
  ]
);

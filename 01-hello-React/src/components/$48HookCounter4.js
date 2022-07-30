import React, { useState } from "react";

function HookCounter4() {
  const [items, setItem] = useState([]);
  const changeItem = () => {
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random()*10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={changeItem}>Add item in list</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            Id: {item.id} - value : {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter4;

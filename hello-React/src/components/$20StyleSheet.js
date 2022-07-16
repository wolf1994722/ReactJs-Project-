import React from "react";
import "./$19StyleSheet.css";
import './$20error.css'
import styles from './$20succes.module.css'

const input = {
    border : '1px solid #555',
    color : 'red',
    outline :'none',
    padding : '5px 15px',
    margin : '0'
}

function StyleSheet({ heading }) {
  let classname = heading ? "heading" : "";
  return (
    <div>
      <span className={`${classname} addition`}>Random Text</span>
      <input type="text" style={input} placeholder="Enter text here .." />
      <span className="error">this is simple text</span>
      <span className={styles.sucess}>this is module css</span>
    </div>
  );
}

export default StyleSheet;

import React, { useState } from "react";
// import axios from 'axios'
import axios from 'axios'
import ImageResult from "../image-results/ImageResult";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(15);
  const apiURL = "https://pixabay.com/api/";
  const apiKey = "28696198-e716d029c7345f28bd166cb54";
  // let images = [];
  const [images, setImages] = useState([])

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
    // this.setState({[e.target.name] : e.target.value})
  };

  const onAmountValue = (e, index, value) => {
    setAmount(e.target.value)
  }
  const btnClick = ()=>{
    axios.get(`${apiURL}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`).then(res => setImages(res.data.hits)).catch(err => console.log(err))
    console.log(images);
    console.log(`${apiURL}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`);
  }

  return (
    <>
      <input
        type="text"
        name=""
        placeholder="Search For Images"
        id=""
        value={searchText}
        onChange={onSearchTextChange}
        
      />
      <select
        name="amount"
        id="amount"
        value={amount}
        onChange={onAmountValue}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>

        <button onClick={btnClick}>search</button>
      {images.length > 0 ? (<ImageResult images={images}></ImageResult>) : null}
    </>
  );
}

export default Search;

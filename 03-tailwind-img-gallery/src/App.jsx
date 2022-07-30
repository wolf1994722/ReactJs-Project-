import { useEffect, useState } from "react";
import "./App.css";
import Imagecard from "./components/imagecard";
import ImagesSearch from "./components/imagesSearch";

// REACT_APP_PIXABAY_API_KEY

function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("yellow+flowers");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=28696198-e716d029c7345f28bd166cb54&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImagesSearch searchText={(text) => setTerm(text)}></ImagesSearch>

      {!isLoading && images.length === 0 && (<h1 className="text-6xl text-center mt-32 mx-auto">
      No image found{" "}</h1>)} 

      {isLoading ? (
        <h1 className="text-6xl text-center mt-32 mx-auto">
          Loading data ...{" "}
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, id) => (
            <Imagecard key={id} image={image}></Imagecard>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

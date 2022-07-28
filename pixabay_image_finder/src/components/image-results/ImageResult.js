import React from "react";
import PropTypes from "prop-types";

function ImageResult(props) {
  let imageListContent;
  const { images } = props;

  if (images) {
    imageListContent = (
      <div className="grid grid-cols-3 gap-4">
        {images.map((image,index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-purple-500 text-xl mb-2">
                Photo by {image.user}
              </div>
              <ul>
                <li>
                  <strong>Views: </strong>
                  {image.views}
                </li>
                <li>
                  <strong>Downloads: </strong>
                  {image.downloads}
                </li>
                <li>
                  <strong>Likes: </strong>
                  {image.likes}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  } else imageListContent = null;

  return <div>{imageListContent}</div>;
}

ImageResult.prototype = {
  images: PropTypes.array.isRequired,
};

export default ImageResult;

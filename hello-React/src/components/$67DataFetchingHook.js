import React, { useReducer, useEffect } from "react";
import axios from "axios";

const intialState = {
  loading: true,
  err: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        err: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: true,
        err: "Something went wrong ! 😭",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingHook() {
  const [state, dispatch] = useReducer(reducer, intialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, [state.id]);
  return (
    <div>
      <div>
        data : {state.loading ? "Loading" : state.post.title}
        <br />
        Err : {state.err ? state.err : null}
      </div>
    </div>
  );
}

export default DataFetchingHook;

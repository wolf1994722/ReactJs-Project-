import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

//* store
// import { deleteAllUser } from "../store/slices/UserSlice";
import { deleteAllUser } from "../store/actions/index";

function DeleteAllUsers() {
  const dispatch = useDispatch();

  const clearAllUser = () => {
    // dispatch(deleteAllUser()); 
    dispatch(deleteAllUser());
  };
  return (
    <Wrapper>
      <button onClick={() => clearAllUser()} className="btn clear-btn">
        Delete All User
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .clear-btn {
    margin: 20px 0 0 0;
    font-size: 23px;
    text-transform: capitalize;
    background-color: #db338a;
  }
`;

export default DeleteAllUsers;

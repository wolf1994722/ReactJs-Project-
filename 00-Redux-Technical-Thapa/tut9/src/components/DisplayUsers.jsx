import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/all'
import { useDispatch } from 'react-redux'

//* store
import { removeUser } from '../store/slices/UserSlice'  

const DisplayUsers = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.users
  })
  const singleUserDeleted = (idx) => {
    dispatch(removeUser(idx))
  }

  return (
    <Wrapper>
      <ul>
        {data.map((item, idx) => {
          return <li key={idx}>
            {idx + 1}. {item}
            <button 
              onClick={() => singleUserDeleted(idx)}
              className="btn-delete">
              <MdDeleteForever className='delete-icon' />
            </button>
          </li>
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  li {
    width: 100%;
    padding : 10px;
    font-size: 20px;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  button {
    background: white;
    border: 0;
    transition: 0.2s;
  }
  button: hover {
    transform: scale(1.2);
  }
`;

export default DisplayUsers
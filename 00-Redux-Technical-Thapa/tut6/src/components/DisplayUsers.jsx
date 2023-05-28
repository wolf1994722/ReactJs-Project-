import styled from 'styled-components'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users
  })

  return (
    <Wrapper>
      <ul>
        {data.map((item, idx) => {
          return <li key={idx}>{idx+1}. {item}</li>
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
  }
`;

export default DisplayUsers
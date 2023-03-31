import styled from 'styled-components'

const MenuBar = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #333;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`


export default function Menu() {
  return (
    <MenuBar>
      <li>Business</li>
      <li>Entertainment</li>
      <li>General</li>
      <li>Health</li>
      <li>Science</li>
      <li>Sports</li>
      <li>Technology</li>
    </MenuBar>
  )
}
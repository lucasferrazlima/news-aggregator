import React, { useState } from 'react';
import styled from 'styled-components'
import { useRouter } from 'next/router';

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

const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`

export default function Menu() {

  const handleClick = (e) => {
    let category = e.target.getAttribute('data-category')
    if (category === 'General') {
      router.push(`/`)
    } else {
      router.push(`/category/${category}`)
    }
  }

  const router = useRouter()

  return (
    <MenuBar>
      <MenuItem onClick={handleClick} data-category='General'>Home</MenuItem>
      <MenuItem onClick={handleClick} data-category='Business'>Business</MenuItem>
      <MenuItem onClick={handleClick} data-category='Entertainment'>Entertainment</MenuItem>
      <MenuItem onClick={handleClick} data-category='Health'>Health</MenuItem>
      <MenuItem onClick={handleClick} data-category='Science'>Science</MenuItem>
      <MenuItem onClick={handleClick} data-category='Sports'>Sports</MenuItem>
      <MenuItem onClick={handleClick} data-category='Technology'>Technology</MenuItem>
    </MenuBar>
  )
}
import React, { useState } from 'react';
import styled from 'styled-components'
import { useRouter } from 'next/router';

const MenuBar = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 1rem 10rem;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem;
`

const MenuItem = styled.li`
  cursor: pointer;
  font-family: 'Montserrat';
  align-self: center;
  &:hover {
    color: #ff0000;
  }
`

const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 600;
  color: #007aff;
  margin: 0;
  padding: 0;
  padding-right: 2rem;
  border-right: 5px solid #007aff;
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
      <Title>News <br />Pulse</Title>
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
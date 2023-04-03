import React, { useState } from 'react';
import styled from 'styled-components'
import { useRouter } from 'next/router';

const MenuBar = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 1rem 6rem;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem;
  background-color: #f2f2f2;

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(5, 8rem);
    align-items: center;
    justify-items: center;
  }

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    // select all besides last and first child
    >*:not(:last-child):not(:first-child ) {
      display: none;
    }
    &.active {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 350px;
      background-color: #f2f2f2;
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      > *:not(:last-child):not(:first-child ) {
        display: block;
      }
      + * {
        margin-top: 350px;
      }
    }
  }
`

const MenuItem = styled.li`
  cursor: pointer;
  font-family: 'Montserrat';
  align-self: center;
  background-image: linear-gradient(#007aff 0 0);
  background-size: 200% .08em;
  background-position: 200% 100%;
  background-repeat: no-repeat;
  transition: background-size .3s, background-position .3s .3s, color .3s .3s;
  &:hover {
    transition: background-size .3s .3s, background-position .3s, color .3s .3s;
    background-size: 200% 100%;
    background-position: 100% 100%;
    color: #fff;
  }


`

const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 600;
  color: #007aff;
  margin: 0;
  padding: 0;
  padding-right: 1rem;
  border-right: 5px solid #007aff;

  @media (max-width: 1100px) {
    grid-row: 1 / 3;
  }

  @media (max-width: 680px) {
    border: none;
    padding: 0;
    margin: 0;
    &.active {
      display: none;
    } 
  }
`
const MenuIcon = styled.i`
  display: none;
  @media (max-width: 680px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    &.active {
      color: #007aff;
      order: -1;
    }
  }
`
const handleIconClick = () => {
  const menu = document.querySelector(MenuBar);
  const title = document.querySelector(Title);
  const icon = document.querySelector(MenuIcon);
  menu.classList.toggle('active');
  title.classList.toggle('active');
  icon.classList.toggle('active');
}


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
      <MenuIcon className='material-icons' onClick={handleIconClick}>menu</MenuIcon> 
    </MenuBar>
  )
}
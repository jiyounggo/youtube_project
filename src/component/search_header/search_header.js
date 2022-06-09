import styles from './search_header.module.css'
import React, { useRef, useState } from 'react';
import styled, {css} from 'styled-components';

const Header = styled.div`
  display : flex;
  height : 4rem;
  padding : 0.8em 1em;
  background: black;
  color : white;
`
const LogoIMG= styled.img`
`
const Title= styled.h1`
margin: 0;
margin-right:1.1em
`
const Input= styled.input`
 flex-basis : 100%
 outline : 0;
 font-size : 1.2rem
`
const Button= styled.button`
 backgroung-color : darkgrey;
`
const ButtonIMG= styled.img`
 padding : 0.2em;
 height:100%

`
const SearchHeader = ({onSearch}) => {
    let [입력값,입력값변경]=useState("");
    
    const onSubmit =(e)=>{
      e.preventDefault();
      onSearch(입력값)

  };
    return(
    <Header>   
       <LogoIMG src = "/images/logo.png" alt="logo"/>
        <Title>Youtube</Title>
        <form>
        <Input  type="search" placeholder="search..." onChange={(e)=>{
          입력값변경(e.currentTarget.value)
        }} />
        <Button type="submit" onClick={(e)=>onSubmit(e)}>
        <ButtonIMG src ="/images/search.png" alt="search"/>
        </Button>
        </form>
    </Header>
    )
  }

export default SearchHeader;
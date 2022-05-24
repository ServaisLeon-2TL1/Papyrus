import {Badge} from "@material-ui/core";
import {AddShoppingCartOutlined, Search, ShoppingCart, ShoppingCartOutlined} from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png'
import cart from '../img/cart.png' // relative path to image
import Cart from "../pages/Cart";
import { Link}  from "react-router-dom"


const Container = styled.div`
    height: 60px;
    align-items:center;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    `;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    align-items:center;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex:1;
    align-items:center;
    text-align:center;
    `;

const Logo = styled.h1`
    
    `

const Right = styled.div`
    flex:1;
    align-items:center;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    `;

const  MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
 
`;

const Option = styled.option`;
`;
const Button = styled.button`
   
 display:inline-block;
 padding:0.46em 1.6em;
 border:0.1em solid #000000;
 margin:0 0.2em 0.2em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#000000;
 text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
 background-color:#FFFFFF;
 text-align:center;
 transition: all 0.15s;
text-decoration: none;
`;




const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>FR EN DE</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>

                    <img src = {logo} />

                </Center>
                <Right>
                    <Button>

                        <Link to="/login">LOGIN</Link>
                    </Button>
                    <Button>
                        <Link  to="/register">REGISTER</Link>
                    </Button>
                    <Link to="/Test"><img src = {cart} /></Link>


                    <MenuItem>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};



export default Navbar;
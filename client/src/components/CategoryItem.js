import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div `
  flex:1;
  margin: 3px;
  height: 70vh;
  position:relative;
  `;
const Image = styled.img `
  width: 50%;
  height : 100%;
  object-fit: cover; 
  ${mobile({height :"20vh" })}
  
  `;
const Info = styled.div `
position:absolute;
top : 0;
left:10;
width:50%;
height:100%;
display: flex;
align-items:rigth;
justify-content:center;
flex-direction:column;
`;
const Title = styled.h1 `
opacity : 0.8;
`;
const Button = styled.button `
height :5%;
background-color:#8FBC8F;
border: border;
cursor:pointer;
opacity : 0.9;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>AJOUTER</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
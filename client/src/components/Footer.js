import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, LocalPhone, MailOutline, RoomOutlined, Twitter } from '@material-ui/icons';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection :"column" })}
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 20px;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
    margin:20px 0px;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin : 20px;
    
`;

const Center = styled.div`
flex:1;
padding:20px;
${mobile({display :"none" })}
`;

const Title = styled.h3`
    margin-bottom :30px;
`;

const List= styled.ul`
    margin:0;
    padding: 0;
    list-style: none; // supprimer les points qui font liste
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width : 50%; //separer la colonne en deux ( pas vrmt nécessaire ici )
    margin-bottom:10px; // ecart entre les mots
`;
const Right = styled.div`
flex:1;
${mobile({backgroundColor :"#eee" })}
`;

const ContactItem= styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment = styled.img`
    width : 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Papyrus.</Logo>
                <Desc>Venez nous suivres aussi sur nos réseaux sociaux !</Desc>
                <SocialContainer>
                    <Link to="https://www.facebook.com/PapyrusLLN/"></Link><SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Liens utiles</Title>
                <List>
                    <ListItem>Accueil</ListItem>
                    <ListItem>Panier</ListItem>
                    <ListItem>Mon compte</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <RoomOutlined style = {{marginRight : "20px"}}/>
                    Place de l'université, 19 1348 Louvain-la-Neuve, Belgique
                </ContactItem>
                <ContactItem><LocalPhone style = {{marginRight : "20px"}}/>
                    010 45 06 59
                </ContactItem>
                <ContactItem><MailOutline style = {{marginRight : "20px"}}/>
                    papyruslln@gmail.com
                </ContactItem>
                <Payment src="https://www.reussir-mon-ecommerce.fr/wp-content/uploads/2016/03/cb_visa_mastercard_logo-1.png"/>  
                {/*https://i.ibb.co/Qfvn4z6/payment.png autre image bien*/}
            </Right>
        </Container>
    );
};

export default Footer;
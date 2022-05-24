import React, { useRef, useState } from "react";
import { useAuth }  from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from '../responsive';
import devanture from '../img/devanture.jpg'

const Container = styled.div`
    width :100vw;
    height : 100vh;
    background : linear-gradient(
        rgba(255,255,255,0.2),
        rgba(255,255,255,0.3)
    ),
    url("https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5w/fleurs-domicile.jpg ") center ; // https://www.jardiner-malin.fr/wp-content/uploads/2021/12/bouquet-roses-coupees.jpg   https://static6.depositphotos.com/1162239/648/i/600/depositphotos_6489213-stock-photo-bouquet-of-roses.jpg   https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/deco/styles/decoration-mariage/fleurs-mariage/1-le-bouquet/70480936-1-fre-FR/1.-Le-bouquet.jpg   
    display : flex;
    align-items : center ; // mettre le form au milieu
    justify-content : center ;
    background-repeat: no-repeat;
    background-size:cover;
`;

const Wrapper = styled.div`
    width : 40%;
    padding : 20px;
    background-color : white;
    
    ${mobile({width :"75%" })}
`;



const Title = styled.h1`
        font-size : 24px;
        font-weight : 300;
        font-weight: bold;
`;

const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin : 20px 10px 0px 0px;
        padding : 10px;
`;

const Button = styled.button`
        width :  30%;
        border : none;
        padding : 14px 15px;
        background-color : #20B2AA;
        color: white;
        cursor: pointer;
        margin: 10px 50px 20px 0;
`;
const Form = styled.form`
        display : flex;
        flex-wrap:wrap;
        
`

export default function Signup() {
    const usernameRef = useRef()
    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const addressRef = useRef()
    const signup  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(usernameRef.current.value, lastNameRef.current.value, firstNameRef.current.value, emailRef.current.value, passwordRef.current.value, addressRef.current.value)
            navigate.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }


    return (
        <Container>
            <Wrapper>
        
               <Title>S'inscrire</Title>
                
                <Form onSubmit={handleSubmit}>

                    <Input placeholder="username" id="username" type="text" ref={usernameRef} required>
                    </Input>

                    <Input placeholder="lastName" id="lastName" type="text" ref={lastNameRef} required>
                    </Input>

                    <Input placeholder="firstName" id="firstName" type="text" ref={firstNameRef} required>
                    </Input>
                
                    <Input placeholder="email" id="email"  type="email" ref={emailRef} required >
                    </Input>
                    
                    <Input placeholder="mot de passe" id="password" type="password" ref={passwordRef} required>
                    </Input>

                    <Input placeholder="confirmer mot de passe" id="password-confirm" type="password" ref={passwordConfirmRef} required>
                    </Input>

                    <Input placeholder="address" id="address" type="text" ref={addressRef} required>
                    </Input>

                    <Button className="signup" disabled={loading} type="submit">
                    S'inscrire
                    </Button>
                </Form>
           
        <div className="fin" >
            Vous avez déja un compte ? <Link to="/login">Connexion</Link>
        </div>
    </Wrapper>
    </Container>
    )
}
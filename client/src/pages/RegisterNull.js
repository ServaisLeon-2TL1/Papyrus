import styled  from 'styled-components'
import { mobile } from '../responsive';
import {useState} from "react";
import axios from "axios";


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
    background-color : transparent;
    
    ${mobile({width :"75%" })}
`;

const Form = styled.form`
        display : flex;
        flex-wrap:wrap;
        
`

const Title = styled.h1`
        font-size : 24px;
        font-weight : 300;
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
        padding : 15px 15px;
        background-color : #20B2AA;
        color: white;
        cursor: pointer;
        margin: 10px 50px 20px 0;
`;


const RegisterNull = () => {
    const [username, setUsername] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const register = () => {
        const data = {
            username: username,
            lastName: lastName,
            firstName: firstName,
            email: email,
            password: password,
            address: address
        };
        axios.post("http://localhost:8080/v1/register", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.message);
            })
    };

    return (
        <Container>
            <Wrapper>
                <Title>Create a new account</Title>
                <Form>
                    <Input onChange={(event) => {
                            setUsername(event.target.value);
                        }
                    } placeholder = "Username"/>
                    <Input onChange={(event) => {
                            setLastName(event.target.value);
                        }
                    } placeholder = "Last name"/>
                    <Input onChange={(event) => {
                            setFirstName(event.target.value);
                        }
                    } placeholder = "First name"/>
                    <Input onChange={(event) => {
                            setEmail(event.target.value);
                        }
                    } placeholder = "Email"/>
                    <Input onChange={(event) => {
                            setPassword(event.target.value);
                        }
                    } className="form__input" type="password"  placeholder="Password"/>
                    <Input onChange={(event) => {
                            setAddress(event.target.value);
                        }
                    } placeholder = "Address"/>
                    <Button type="submit" onClick={register}>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default RegisterNull;
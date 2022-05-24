import styled  from 'styled-components'
import { mobile } from '../responsive';


const Left = styled.div`
float: left;
margin : 20px;
`;

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    background : linear-gradient(
        rgba(255,255,255,0.2),
        rgba(255,255,255,0.2)
    ),
    url("https://scontent-bru2-1.xx.fbcdn.net/v/t1.15752-9/277435404_689718462338524_5925619315358594577_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=OesgGPBGiN4AX-1Pncl&_nc_ht=scontent-bru2-1.xx&oh=03_AVLQby2ZbGq76PtotT9NdXWsWjSl08di3OSqKop7gCKP5Q&oe=6272216F") center ;
    display : flex;
    align-items : center ; // mettre le form au milieu
    justify-content : center ;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Wrapper = styled.div`
    width : 25%;
    padding : 20px;
    background-color : white;
    position: absolute;
    top: 200px;
    left: 660px;
    font-size: 18px;
    ${mobile({width :"75%" })}
`;

const Form = styled.form`
        display : flex;
        flex-direction: column;
`;

const Title = styled.h1`
        font-size : 24px;
        font-weight : 300;
        font-family:Andale Mono, monospace;
`;

const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin : 10px 0px;
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
        //margin-bottom:10px;
`;

const Lien = styled.a`
        margin: 5px 0px;
        font-size : 12px;
        text-decoration: underline;
        cursor:pointer;
        
`;

const Login = () => {
    return (

        <Container>
            <Wrapper>
                <Title>Connecte toi </Title>
                <Form>
                    <Input placeholder = "nom d'utilisateur"/>
                    <Input  className="form__input" type="password"  placeholder="mot de passe"/>
                    <Button>Connexion</Button>
                    <Lien>Tu as perdu ton mot de passe ?</Lien>
                    <Lien>Créer un nouveau compte</Lien>
                </Form>
            </Wrapper>
        </Container>

    );
};

export default Login;
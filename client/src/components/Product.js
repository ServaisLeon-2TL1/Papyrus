import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import  styled  from 'styled-components'

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.19); //mettre l'iamge en plus foncé avec de l'oppacité
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;
`;

const Container =styled.div`
    flex:1;
    margin:2px;
    win-width:280px;
    height :350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:black; //#f0e6cc  #fdf4e1 #F5DEB3 #f5fbfd
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }; // quand on passe dessu ca fait l'opacité
`;

const Circle = styled.div`
    width:180px;
    height:300px;
    //border-radius:60%;
    background-color:black;
    position:absolute;
`;
const Image = styled.img`
    height:89%;
    z-index:2;
`;

const Icon = styled.div`
    width :40px;
    height:40px;
    border-radius :50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition: all 0.5s ease; //fonctionne pas
    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1);
    } // quand on passe sur l'icon il se grossi
`;

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
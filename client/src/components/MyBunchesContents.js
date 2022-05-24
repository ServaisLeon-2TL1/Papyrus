import {Fragment, useState, useEffect} from "react";
import './MyBunchesContents.css';
import {Link} from "react-router-dom";


function MyBunchesContents() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const accessToken = localStorage.getItem('accessToken');
    const bunchId = localStorage.getItem('selectedBunchId');

    useEffect(() => {
        fetch(`http://localhost:8080/v1/bunches/${bunchId}/contents`, {headers: {authorization: "BearerToken " + accessToken}})
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Unauthorized</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="bunchContentsItems">
                {items.map(item => (
                    <Fragment key={item.ref}>
                        <div className="bunchContentsItem">
                            <p className="bunchContentsInfo">
                                No_{item.ref}<br/>
                                Flower: {item.name}<br/>
                                Color: {item.color}<br/>
                                Quantity: {item.quantity}<br/>
                                Price: {item.unitPrice}€<br/>
                                Total: {item.selectionPrice}€
                            </p>
                            <button type="button">
                                <Link to="/myBunches">View all bunches</Link>
                            </button>
                        </div>
                    </Fragment>
                ))}
            </div>
        );
    }
}


export default MyBunchesContents;
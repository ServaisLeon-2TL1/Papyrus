import {Fragment, useState, useEffect} from "react";
import './MyBunches.css';
import {Link} from "react-router-dom";

function setBunchId (id) {
    localStorage.setItem('selectedBunchId', id);
    console.log(localStorage.getItem('selectedBunchId'));
    return localStorage.getItem('selectedBunchId');
}


function MyBunches() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        fetch("http://localhost:8080/v1/bunches", {headers: {authorization: "BearerToken " + accessToken}})
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
    } else if (!items.length) {
        return "You have no bunch.";
    } else {
        return (
            <div className="bunchItems">
                {items.map(item => (
                    <Fragment key={item.id}>
                        <div className="bunchItem">
                            <p className="bunchInfo">
                                Id: {item.id}<br/>
                                Creation date: {item.creation}<br/>
                                Last update: {item.lastUpdate}<br/>
                                Total: {item.price}€
                            </p>
                            <button type="button" onClick={setBunchId(item.id)}>
                                <Link to={'/myBunches/' + item.id + '/contents'}>View content</Link>
                            </button>
                        </div>
                    </Fragment>
                ))}
            </div>
        );
    }
}


export default MyBunches;
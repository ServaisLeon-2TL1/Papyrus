import {Fragment, useState, useEffect} from "react";


function MyInfo() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        fetch("http://localhost:8080/v1/myAccount", {headers: {authorization: "BearerToken " + accessToken}})
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
            <div>
                {items.map(item => (
                    <Fragment key={item.id}>
                        <p id="myInfo">
                            My id: {item.id}<br/>
                            My username: {item.username}<br/>
                            My full name: {item.fullName}<br/>
                            My email: {item.email}<br/>
                            My address: {item.address}
                        </p>
                    </Fragment>
                ))}
            </div>
        );
    }
}


export default MyInfo;
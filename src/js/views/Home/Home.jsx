import React, {useEffect} from "react";
import "../Home/home.css";

//Service
import { getStarWars } from "../../service/starWars";

//Components
import Card from "../../component/Card/Card.jsx";

const Home = () => {

    const starWars = async () => {
        try{
            const res = await getStarWars();
            const data = await res.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        starWars();
    }, []);

    return (
        <div>
            <h1>
                Hola
                <Card />
            </h1>
        </div>

    )
};

export default Home;

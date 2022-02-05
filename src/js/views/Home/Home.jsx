import React, {useEffect, useContext} from "react";
import "../../views/Home/home.css";
import {Context} from "../../store/appContext.js";

//Service
import { getCharacters, getPlanets } from "../../service/starWars.js";

//Components
import Card from "../../component/Card/Card.jsx";

const Home = () => {

    const {store, actions} = useContext(Context);
    console.log(store);

    const starWars = async () => {
        try{
            const res = await getCharacters();
            const json = await res.json();
            console.log(json);
            actions.setStarWars(json);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        starWars();
    }, []);

    return (
        <div>
            <div className="row">
                {
                    store.starWars.map(card => <Card key={card.uid}/> )
                }
            </div>
        </div>

    )
};

export default Home;

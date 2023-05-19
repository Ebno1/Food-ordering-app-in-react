import React from "react";
import { useState } from "react";

import Heading from "./Heading";
import Order_body from "./Body/Order_body";
import CartList from "./Body/CartList";

const Home=()=>{

    const [ closed, setClosed ] = useState(true);

    const openModalHandler = () => {
        setClosed(false);
    }

    const closeHandler= () =>{
        setClosed(true);
    }

    return (
        <React.Fragment>
            <Heading openModal={openModalHandler} />
            <Order_body />
            {!closed && <CartList close={closeHandler} />}
        </React.Fragment>
    )
}

export default Home;

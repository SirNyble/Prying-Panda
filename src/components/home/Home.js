import "./Home.css";

import React from "react";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Home = () => (
    <div>
        <p class="row col-xs-2"> HELLO WORLD </p>
    </div>
);

export default Home;
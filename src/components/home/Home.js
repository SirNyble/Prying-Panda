import "./Home.css";
import axios from 'axios';
import React from "react";

// The Home component
// Currently does not do much
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {userName: "",
                        bannerPicture: "",
                        profilePicture: ""};
    }

    componentDidMount() {
        axios.get("/api/search/Nyble")
          .then(res => {
              console.log(res);
            this.setState({userName: res["data"]["userName"], bannerPicture: res["data"]["bannerPicture"], profilePicture: res["data"]["profilePicture"] });
          });
      }

    render() {
        if(this.state.userName === "") {
            return <div><p>LOADING</p></div>
        }
        return (
            <div class="blended">
                <p> {this.state.userName} </p>
                <img src={this.state.profilePicture} />
                <img src={this.state.bannerPicture} />

            </div>  
        );
    }
}

export default Home;
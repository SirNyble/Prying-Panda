import "./Home.css";
import axios from 'axios';
import React from "react";
import { Image} from "react-bootstrap";

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
            <div class="user">
                <Image src={this.state.profilePicture} className="profile" alt="logo" rounded />
                <Image src={this.state.bannerPicture} className="banner"/>
            </div>
        );
    }
}

export default Home;
import "./User.css";
import axios from 'axios';
import React from "react";
import { Image} from "react-bootstrap";

// The User component
// Displays a users profile
class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profileLoaded: false,
            userName: props.match.params.userName,
            bannerPicture: "",
            profilePicture: "",
            errors: ""
        };
        console.log(this.state);
    }

    componentDidMount() {
        axios.get("/api/search/" + this.state.userName)
        .then(res => {
            this.setState({
                profileLoaded: true,
                userName: res.data.userName, 
                bannerPicture: res.data.bannerPicture, 
                profilePicture: res.data.profilePicture
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                errors: err.response.data.error
            });
        });
      }

    render() {
        if(this.state.errors !== "") {
            return (
                <div className="error">
                    <h1>{this.state.errors}</h1>
                </div>
            );
        }

        if(this.state.profileLoaded === false) {
            return <div><p>LOADING</p></div>
        }
        return (
            <div className="user">
                <Image src={this.state.profilePicture} className="profile" alt="logo" rounded />
                <Image src={this.state.bannerPicture} className="banner"/>
            </div>
        );
    }
}

export default User;
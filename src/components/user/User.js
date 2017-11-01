import "./User.css";
import axios from 'axios';
import React from "react";
import { Grid, Image, Row, Col, FormGroup, FormControl, HelpBlock} from "react-bootstrap";

// The User component
// Displays a users profile
class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userQuestion: "",
            profileLoaded: false,
            userName: props.match.params.userName,
            bannerPicture: "",
            profilePicture: "",
            errors: ""
        };
        console.log(this.state);
    }

    getValidationState() {
        console.log("VALIDATING");
        const length = this.state.userQuestion.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }

      handleChange(e) {
        console.log(e.target); 
        this.setState({ userQuestion: e.target.value });
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
            <Grid>
                <Row>
                    <Col  className="user">
                        <Image src={this.state.profilePicture} className="profile" alt="logo" rounded />
                        <Image src={this.state.bannerPicture} className="banner"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <form>
                            <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                            >
                                <FormControl
                                    componentClass="textarea"
                                    type="text"
                                    value={this.state.userQuestion}
                                    placeholder="What is your burning question?"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Validation is currently based on string length.</HelpBlock>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
                <p className="filler"> asdlfjksdfjl</p>
            </Grid>
            
        );
    }
}

export default User;
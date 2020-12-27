import React, { Component } from "react";
import "../../utilities.css";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="Profile-avatarContainer">
          <div className="Profile-avatar" />
        </div>
        <h1 className="Profile-name u-textCenter">YOUR NAME HERE</h1>
        <hr className="Profile-line" />
        <div className="u-flex">
          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">About Me</h4>
            <div id="profile-description">
              Extra Challenge: Modify catbook to show a personalized description here!
            </div>
          </div>
          {/* Insert Cat Happiness component here. HINT: You probably want to add a new Profile-subContainer to hold the CatHappiness component. */}
          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
            <div id="favorite-cat">corgi</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

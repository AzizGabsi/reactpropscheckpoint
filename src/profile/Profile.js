import React from "react";
import PropTypes from 'prop-types'
const Profile = (props) => {
    return (
        <div className="profile">
            {props.children}
            <h3>{props.fullName}</h3>
            <h3>{props.bio}</h3>
            <h3>{props.profession}</h3>
            <button onClick={() => props.handleName()}>Click Me!</button>
        </div>   
    );
};
Profile.defaultProps = {
    fullName : "the full name",
    bio : "the bio",
    profession : "the profession",
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func

};

export default Profile
import PropTypes from 'prop-types';

function UserGreeting(props) {
    return (
        props.isLoggedIn ? 
        <h2 className="Welcome">Welcome {props.username}</h2> :
        <h2 className="login">Please login</h2>
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest",
}
export default UserGreeting;

import profilePic from './assets/profile.jpeg';
function Profile(){
    const handleClick=(e)=> (e.target.style.display="none");
    return(
        <img onClick={(e)=>handleClick(e)} src={profilePic}></img>
    );
}
export default Profile;
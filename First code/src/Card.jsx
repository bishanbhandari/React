import profilePic from './assets/images.jpeg'
import './index.css'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture" />
            <h2 className="card-title">Goku Black</h2>
            <p className='card-text'>One of my favourite character from Dragon Ball</p>
        </div>
    );
}
export default Card;
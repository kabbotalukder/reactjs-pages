import React from 'react';
import './DevCard.css'

const DevCard = () => {
    return(
        <div className='profile-container'>
            <img className='profile-picture' src='https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/289484449_3241164679454626_2064223992643744043_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PQd2dQz9rzcAX_Wi8-B&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfDraan7SXnksof0jmWjMkhcZbdJqKfyIgJmAV0jRuQ1tQ&oe=647E9565' alt='Profile Picture'/>
            <div className='title-holder'>
                <h2 className='profile-title'>Kabbo Talukder</h2>
                <p className='profile-position'>Software Engineer</p>
            </div>
        </div>
    );
}

export default DevCard;
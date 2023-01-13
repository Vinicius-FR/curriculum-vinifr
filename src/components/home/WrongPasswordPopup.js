import React from 'react';
import './Home.css';

function WrongPasswordPopup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className='wrong-password'>
            <p>Insert the correct password to upload</p>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default WrongPasswordPopup

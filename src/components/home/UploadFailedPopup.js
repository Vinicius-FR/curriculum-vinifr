import React from 'react';
import './Home.css';

function UploadFailedPopup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className='wrong-password'>
            <p>Upload failed due to incorrect password!</p>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default UploadFailedPopup

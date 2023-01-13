import React from 'react';
import './Home.css';

function UploadOkPopup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className='correct-password'>
            <p>Upload succeeded!</p>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default UploadOkPopup
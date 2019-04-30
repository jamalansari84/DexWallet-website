import React from 'react';

const BigPhone = (props) => {
  return (
    <span className="bigPhone">
        <video className="heroVid" poster="/img/poster.jpg" playsInline autoPlay muted loop>
            <source src="/img/bigPhoneVideo.mp4" type="video/mp4" width="40%"></source>
        </video> </span>
      );
}

export default BigPhone;
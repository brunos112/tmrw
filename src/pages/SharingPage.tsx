import React from "react";
import Layout from "../components/common/Layout";

const SharingPage = () => {
  return (
    <Layout page="sharing">
      <div className="center-all sharing-page">
        <img src="images/sharing_thumbnail.jpg" />
        <div className="video-section">
          <video width="100%" height="100%" autoPlay controls>
            <source src="videos/capsule_time.mp4" type="video/mp4" />
            <source src="videos/capsule_time.ogg" type="video/ogg" />
          </video>
          <div className="profile-section">
            <img className="user-profile" src="images/user_profile.png" />
            <div className="profile-desc">
              <label>Ashely</label>
              <span>Jan 1, 2015</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SharingPage;

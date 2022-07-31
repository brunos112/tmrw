import React from "react";
import Layout from "../components/common/Layout";

const HomePage = () => {
  return (
    <Layout>
        <div className="center-all homg-page">
            <h1>Send <img className="user-desktop" src="images/user_img.svg" /> memories</h1>
            <h1>to the future <img className="feature-underline" src="images/feature_underline.svg" /><img className="emoji-desktop" src="images/emoji.svg" /></h1>
            <button className="pre-order-btn">
                Pre-Order on the App Store
            </button>
        </div>
    </Layout>
  );
};

export default HomePage;

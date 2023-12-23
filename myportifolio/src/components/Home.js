// components/Home/Home.js

import React from 'react';
//import Typist from 'react-typist';

const Home = () => {
  console.log("Home component rendered");

  return (
    <div className="home-container">
        <h1>My name is Mark Mwangi</h1>
        <h3>I am a Junior Software Engineer</h3>
      <p>Welcome to my portfolio! I'm passionate about...</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Home;

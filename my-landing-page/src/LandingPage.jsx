// import React from 'react';
// import './LandingPage.css'; // Add this file for styling

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       {/* Background Image */}
//       <div className="background-image">
//         {/* Company Name */}
//         <h1 className="company-name">Nursery Shopping</h1>

//         {/* Paragraph about the company */}
//         <h2 className="company-description">
//         Welcome to Nursery Farm, your trusted source for premium plants, trees, and shrubs.Explore our wide variety of ornamental plants, fruit trees, and more, and experience exceptional service from our knowledgeable team. Let us help bring your green vision to life!
//         </h2>

//         {/* Get Started Button */}
//         <a href="/product" className="get-started-button">
//           Get Started
//         </a>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';
import './LandingPage.css';

const NurseryPage = () => {
  return (
    <div className="nursery-container">
      <div className="left-section">
        <h1>Welcome To<br />Eden Greens Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="right-section">
        <div className="text-content">
          <h2>Welcome to Eden Greens Nursery, where green meets serenity!</h2>
          <p>
          At Eden Greens Nursery, we are passionate about creating green spaces that breathe life into your home and environment. 
          Our mission is to cultivate and provide a wide variety of high-quality plants, trees, and shrubs that not only beautify your surroundings but also promote healthier and more sustainable living. 
          Whether you're looking for air-purifying indoor plants, vibrant outdoor shrubs, or exotic varieties to elevate your garden, we have something for everyone.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Visit Eden Greens Nursery 
            today and experience the beauty of nature right at your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NurseryPage;

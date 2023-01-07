import React from 'react';
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Header from './commonResource/Header/Header';
import Alert from './commonResource/Alert/Alert';
import IpadPro from './commonResource/SectionOne/IpadPro';
import MacBookAir from './commonResource/SectionTwo/MacBookAir';
import Iphone11Pro from './commonResource/SectionThree/Iphone11Pro';
import Iphone11 from './commonResource/SectionFour/Iphone11';
import CDC from './commonResource/SectionFive/CDC';
import Arcade from './commonResource/SectionSix/Arcade';
import Footer from './commonResource/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <Alert />
      <IpadPro />
      <MacBookAir />
      <Iphone11Pro />
      <Iphone11 />
      <CDC />
      <Arcade />
      <Footer />
    </div>
  );
}

export default App;

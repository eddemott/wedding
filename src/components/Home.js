import React from 'react';
import styled from 'styled-components';

const HomePage = () =>
<BackgroundImage>
    <div className="background">
        <div className="imgWrapper">
            <img className='image1 desktop' src={require('../assets/EandB.3.jpg')} alt="Ed and Becca wedding"></img>
            <img className='image2 desktop' src={require('../assets/EandB.1.jpg')} alt="Ed and Becca bogota"></img>
            <img className='image3 desktop' src={require('../assets/EandB.2.jpg')} alt="Ed and Becca Ibiza"></img>
            <img className='image4 desktop' src={require('../assets/EandB.4.jpg')} alt="Ed and Becca onesie"></img>
            <img className='image5 mob' src={require('../assets/EandB.5.jpg')} alt="Ed and Becca onesie"></img>
            <img className='image6 mob' src={require('../assets/EandB.6.jpg')} alt="Ed and Becca onesie"></img>
            <img className='image7 mob' src={require('../assets/EandB.7.jpg')} alt="Ed and Becca onesie"></img>
            <img className='image8 mob' src={require('../assets/EandB.8.jpg')} alt="Ed and Becca onesie"></img>
        </div>
    </div>
    
    <SaveTheDate>
        <div>BECCA & ED</div>
        <div className='save'>Save<span className='the'> the </span>date</div>
        <div>29.06.19 | HARROGATE</div>
    </SaveTheDate>
</BackgroundImage>


const BackgroundImage = styled.div`
  img {
    width: 50%;
    height: auto;
  }
  .imgWrapper {
    transform: translateY(-50%);
    overflow: hidden;
  }
  .background {
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    padding-top: 50vh;
    z-index: -1;
  }
  overflow: hidden;
  height: 100vh;
  max-height: 100vh;

  .mob {
    display: none;
  }

  @media screen and (max-width: 850px) {
    .imgWrapper {
      transform: translateY(0%);
    }
    .background {
      padding-top: 0px;
      display: inline;
    }
    .mob {
      display: inline-block;
      width: 50vw;
      height: 50vh;
    }
    .desktop {
      display: none;
    }
  }
  }
`;

const SaveTheDate = styled.div`
  background-color: white;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  font-family: "Helvetica Neue LT Std";

  font-size: 4vw;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  white-space: nowrap;

  @media screen and (max-width: 850px) {
    font-size: 7vw;
  }
  .save {
    color: #2d3a2d;
    font-family: "selimaregular";
    font-size: 10vw;
    opacity: 1;
    @media screen and (max-width: 850px) {
      font-size: 20vw;
    }
    .the {
      font-size: 6vw;
      @media screen and (max-width: 850px) {
        font-size: 12vw;
      }
    }
  }
`;

export default HomePage;
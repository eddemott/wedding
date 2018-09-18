import React from 'react';
import styled from 'styled-components';

const HomePage = () =>
<BackgroundImage>
    <div className="background">
        <div className="imgWrapper">
            <img className='image1' src={require('../assets/EandB.1.jpg')} alt="Ed and Becca wedding"></img>
            <img className='image2' src={require('../assets/EandB.2.jpg')} alt="Ed and Becca bogota"></img>
            <img className='image3' src={require('../assets/EandB.3.jpg')} alt="Ed and Becca Ibiza"></img>
            <img className='image4' src={require('../assets/EandB.4.jpg')} alt="Ed and Becca onesie"></img>
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
        max-width: 50%;
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
`;

const SaveTheDate = styled.div`
    background-color : white;
    text-align : center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .9;
    font-family: 'Helvetica Neue LT Std';
    font-size: 50pt;
    padding:10px 20px 10px 20px;
    border-radius: 5px;
    
    .save {
        font-family: 'selimaregular';
        font-size: 125pt;
        .the {
            font-size: 70pt;
        }
    }
`;

export default HomePage;
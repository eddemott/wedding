import React from "react";
import styled from "styled-components";

import Line from "./line";
import Link from "./Link";

const WeddingPage = () => (
  <div>
    <Banner>
      <div className="content">
        <h1>On the day</h1>
        <Line />
      </div>
      <div className="imageBanner" />
    </Banner>

    <Spotlight>
      <div className="content">
        <div className="textWrapper right">
          <h2>The Ceremony</h2>
          <p>
            The Ceremony will take place at the Sun Pavilion, which is within
            easy walking distance of the center of Harrogate. The ceremony will
            begin promptly at 1:30pm. If you are coming from further afield
            please give yourself plenty of time to get there as Harrogate
            traffic can be heavy on a Saturday. The groomsparty will be enjoying
            a drink in the Fat Badger Public House beforehand if you wish to
            arrive earlier.
            <br />
            After the ceremony, transport will be provided to the reception
            venue, where there is limited space for parking.
          </p>
          <div>
            <Link
              href="http://thefatbadgerharrogate.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Fat Badger
            </Link>
            <Link
              href="http://www.sunpavilion.co.uk/"
              rel="noopener noreferrer"
              target="_blank"
              className="Pavillion"
            >
              The Sun Pavillion
            </Link>
          </div>
        </div>
      </div>
      <div className="image image1" alt="Socks" />
    </Spotlight>

    <Spotlight>
      <div className="image image2" alt="Sun Pavillion Image" />
      <div className="content">
        <div className="textWrapper left">
          <h2>Dress Code</h2>
          <p>
            Semi formal attire. Jacket & a tie is sufficient for men, summer
            dresses for ladies. Given the reception will be held in the garden,
            we would suggest that ladies in particular wear appropriate
            footwear. We would also advise that you avoid wearing yellow- it
            appears to be particularly attractive to the garden's fauna.
          </p>
        </div>
      </div>
    </Spotlight>

    <Spotlight>
      <div className="content">
        <div className="textWrapper right">
          <h2>Getting Home</h2>
          <p>
            Harrogate taxis get very busy on a Saturday night, so it is
            advisable to prebook your ride home for the end of the night. The
            wedding will be well signposted, however taxis can be advised that
            Hay a Park is half a mile past Knaresborough Rugby Club.
          </p>
          <p>
            <span>Address : </span>
            <Link
              href="https://goo.gl/maps/kKdfeJATntC93xSa6"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Stables, Hall Farm Barns, Hay a Park, Knaresborough, HG5 0SN
            </Link>
            <br />
            <Link
              href="http://bluelinetaxis.co.uk/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blue Line Taxis
            </Link>
          </p>
        </div>
      </div>
      <div className="image image3" alt="Bus" />
    </Spotlight>
  </div>
);

const Banner = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    display: block;
    text-align: center;
    padding-bottom: 0.5em;
    font-weight: 300;
    padding-top: 1em;
  }

  .content {
    width: 50%;
  }
  .imageBanner {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787910/savethedate_zk4gwg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
  }
`;

const Spotlight = styled.div`
  width: 100vw;
  height: 28em;
  display: flex;
  flex-direction: row-reverse;
  position: relative;

  .content {
    width: 65%;
  }

  .textWrapper {
    padding: 6rem 10rem 3rem 6rem;
    width: 75%;
    margin: 0 auto;
    align-self: center;
  }
  .textWrapper.right {
    text-align: left;
  }
  .textWrapper.left {
    text-align: right;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.375;
    letter-spacing: -0.05em;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0 0 2rem 0;
    font-weight: 300;
  }

  a {
    font-size: 1.25rem;
    margin: 0 0 2rem 0;
    font-weight: 300;
  }

  .Pavillion {
    margin-left: 4em;
  }
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 35%;
  }
  .image1 {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787920/paintedSunPav_qzolvv.jpg");
  }
  .image2 {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787849/shades.jpg");
  }
  .image3 {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787854/kayak_ww3qgr.jpg");
  }
`;

export default WeddingPage;

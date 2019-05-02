import React from "react";
import styled from "styled-components";

import harrogateMap from "../assets/harrogateMap.jpg";
import windmill from "../assets/windmill.jpg";
import exit from "../assets/exit.jpg";
import bestival from "../assets/bestival.jpg";

const AdditionalInfo = () => (
  <div>
    <Spotlight>
      <div className="image image1" alt="Socks" />
      <div className="content">
        <div className="textWrapper right">
          <h2>Sunday</h2>
          <p>
            Many of you have travelled far and wide to celebrate with us, and we
            would like to spend as much time with you as we can! The bride’s
            mum and stepdad are opening their doors from 12-3pm for anyone who
            is still around, to enjoy a ploughman's lunch, and nurse our
            hangovers together. Please let us know in the RSVP section if you
            think you’ll be popping by.
            <br />
            <span>Address : </span>
            <a
              href="https://goo.gl/maps/V5V6NP8BBMSkTnm86"
              rel="noopener noreferrer"
              target="_blank"
            >
              Gate Cottage, Stammergate Lane, Linton, LS22 4JB
            </a>
            <br />
            From the main road in Linton, follow the white railings down a steep
            little hill next to The Windmill Pub, and you'll find the house just
            down there on the left.
          </p>
        </div>
      </div>
    </Spotlight>

    <Spotlight>
      <div className="content">
        <div className="textWrapper right">
          <h2>Harrogate</h2>
          <p>
            There are a few direct trains from London to Harrogate each day,
            however trains run frequently to York or Leeds, where you can
            interchange easily.
          </p>
          <p>
            There are hotels and B&Bs to suit every budget in and around
            Harrogate and Knaresborough. The wedding party will be staying at
            the White Hart Hotel, which is a short walk from the ceremony venue.
            We have secured a number of rooms at a fixed rate of £109 per
            night. To book one of these rooms, please email Rachel at
            <a
              href="mailto:office@whiteharthotelharrogate.com?Subject=Room Booking - GA00265"
              target="_top"
            >
              office@whiteharthotelharrogate.com
            </a>
            quoting the code GA00265.
          </p>
        </div>
      </div>
      <div className="image image2" alt="Socks" />
    </Spotlight>

    <Spotlight>
      <div className="image image3" alt="Sun Pavillion Image" />
      <div className="content">
        <div className="textWrapper left">
          <h2>Gift List</h2>
          <p>
            Your presence at our wedding is gift enough, but if you do wish to
            buy us something to mark this occasion then we have a selected some
            items to help us complete our new home, and to help us along the way
            with planning our dream honeymoon, which are listed on Prezzola.
          </p>
          <p>Prezzola link</p>
        </div>
      </div>
    </Spotlight>

    <Spotlight>
      <div className="content">
        <div className="textWrapper right">
          <h2>Contact</h2>
          <p>
            If you have any questions, or need any further information then
            please don't hesitate to contact Becca on <span> </span>
            <a href="tel:07552783044">07552783044</a>, or at <span> </span>
            <a
              href="mailto:rebeccaculleton@hotmail.co.uk?Subject=Wedding Help"
              target="_top"
            >
              rebeccaculleton@hotmail.co.uk.
            </a>
            <span> </span>Ed has no idea what's going on...
          </p>
        </div>
      </div>
      <div className="image image4" alt="Bus" />
    </Spotlight>
  </div>
);

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
    padding: 6rem 10rem 3rem 6rem
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

  span {
        font-size: 1.25rem;
    margin: 0 0 2rem 0;
    font-weight: 300;
  }

  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 35%;
  }
  .image1 {
    background-image: url("${windmill}");
  }
  .image2 {
    background-image: url("${harrogateMap}");
  }
  .image3 {
    background-image: url("${exit}");
  }
  w.image4 {
    background-image: url("${bestival}");
  }
`;

export default AdditionalInfo;

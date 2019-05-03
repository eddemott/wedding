import React from "react";
import styled from "styled-components";

import Link from "./Link";

const AdditionalInfo = () => (
  <Info>
    <div className="row">
      <div className="col-lg-6 col-xs-12 first-lg">
        <div className="box left">
          <div className="content">
            <h2>Sunday</h2>
            <p>
              Many of you have travelled far and wide to celebrate with us, and we
              would like to spend as much time with you as we can! Becca's Mum and
              Stepdad will be opening their doors from 12pm until 3pm for anyone
              who is still around, to enjoy a ploughman's lunch, and nurse our
              hangovers together. Please let us know in the RSVP section if you
              think you’ll be popping by.
            <br />
              <span>Address : </span>
              <Link
                href="https://goo.gl/maps/V5V6NP8BBMSkTnm86"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gate Cottage, Stammergate Lane, Linton, LS22 4JB
            </Link>
              <br />
              From the main road in Linton, follow the white railings down a steep
              little hill next to The Windmill Pub, and you'll find Gate Cottage
              just down there on the left.
          </p>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-xs-12 first-xs">
        <div className="box"><div className="image image1" alt="Socks" /></div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-5 col-xs-12 first-xs">
        <div className="box"><div className="image image2" alt="Socks" /></div>
      </div>
      <div className="col-lg-7 col-xs-12 first-lg">
        <div className="box right">
          <div className="content">
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
            <Link
                href="mailto:office@whiteharthotelharrogate.com?Subject=Room Booking - GA00265"
                target="_top"
              >
                &nbsp;office@whiteharthotelharrogate.com&nbsp;
            </Link>
              quoting the code GA00265.
          </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-7 col-xs-12 first-lg">
        <div className="box left">
          <div className="content">
            <h2>Gift List</h2>
            <p>
              Your presence at our wedding is gift enough, but if you do wish to
              buy us something to mark this occasion then we have a selected a few
              items for our newly renovated home, and some vouchers to help us
              along the way with planning our dream honeymoon.
          </p>
            <p>
              <Link
                href="https://prezola.com/wishlists/10205205/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Prezola Gift List
            </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-xs-12 first-xs">
        <div className="box"><div className="image image3" alt="Sun Pavillion Image" /></div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-5 col-xs-12 first-xs">
        <div className="box"><div className="image image4" alt="Bus" /></div>
      </div>
      <div className="col-lg-7 col-xs-12 first-lg">
        <div className="box right">
          <div className="content">
            <h2>Contact</h2>
            <p>
              If you have any questions, or need any further information then
            please don't hesitate to contact Becca on <span> </span>
              <Link href="tel:07552783044">07552783044</Link>, or at{" "}
              &nbsp;
            <Link
                href="mailto:rebeccaculleton@hotmail.co.uk?Subject=Wedding Help"
                target="_top"
              >
                rebeccaculleton@hotmail.co.uk.
            </Link>
              &nbsp; Ed has no idea what's going on...
          </p>
          </div>
        </div>
      </div>
    </div>
  </Info>
);

const Info = styled.div`
  .top {
  padding-top: 5em;
  }
  .content {
    padding: 5rem;
  }
  h2 {
    font-size: 2.25rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    margin: 0 0 1rem 0;
  }
  p, a {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
  }
  .left {
  text-align: right;
  }
  .right {
  text-align: left;
  }
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 55vh;
  }
  .image1 {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787856/windmill_fcns15.jpg");
  }
  .image2 {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787934/harrogateMap_wzvbx1.jpg");
  }
  .image3 {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787849/exit.jpg");
  }
  .image4 {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787849/bestival.jpg");
  }
  @media only screen and (max-width: 1180px) {
    .content {
      padding: 2em;
    }
    h2, p {
      text-align: center;
    }
    .top {
      padding-top: 0;
    }
    .image {
    height: 30vh;
  }
  }
`;
export default AdditionalInfo;
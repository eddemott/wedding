import React from "react";
import styled from "styled-components";

import Link from "./Link";
import Line from "./line";

const WeddingPage = () => (
  <div>
      <Banner>
      <div className="content">
        <h1>On the day</h1>
        <Line />
      </div>
      <div className="imageBanner" />
    </Banner>

  <Wedding>
<div className="row top">
      <div className="col-lg-5 col-xs-12 first-xs">
          <div className="box"><div className="image image1" alt="Socks" /></div>
      </div>
        <div className="col-lg-7 col-xs-12 first-lg">
          <div className="box right">
            <div className="content">
                <h2>The Ceremony</h2>
                    <p>
                        The Ceremony will take place at the Sun Pavilion, which is within
                        easy walking distance of the centre of Harrogate. The ceremony will
                        begin promptly at 1:30 pm. If you are coming from further afield
                        please give yourself plenty of time to get there as Harrogate
                        traffic can be heavy on a Saturday. The grooms party will be
                        enjoying a drink in the Fat Badger Public House beforehand if you
                        wish to arrive earlier.
                        <br />
                        After the ceremony, transport will be provided to the reception
                        venue, where there is limited space for parking.
                    </p>
                    <div className="links">
                <Link href="http://thefatbadgerharrogate.com" rel="noopener noreferrer" target="_blank">The Fat Badger</Link>
                <Link href="http://www.sunpavilion.co.uk/" rel="noopener noreferrer" target="_blank" className="Pavillion"> The Sun Pavillion</Link>
            </div>
            </div>
          </div>
        </div>
    </div>

<div className="row">
<div className="col-lg-7 col-xs-12 first-lg">
  <div className="box left">
    <div className="content">
      <h2>Dress Code</h2>
      <p>            
      Semi-formal attire. Jacket & a tie is sufficient for men, summer
      dresses for ladies. Given the reception will be held in the garden,
      we would suggest that ladies, in particular, wear appropriate
      footwear. We would also advise that you avoid wearing yellow- it
      appears to be particularly attractive to the garden's fauna.
      </p>
    </div>
  </div>
</div>
<div className="col-lg-5 col-xs-12 first-xs">
  <div className="box">
    <div className="image image2" alt="Sun Pavillion Image" />
  </div>
</div>
</div>

<div className="row">
<div className="col-lg-5 col-xs-12 first-xs">
  <div className="box">
    <div className="image image3" alt="Sun Pavillion Image" />
  </div>
</div>
<div className="col-lg-7 col-xs-12 first-lg">
  <div className="box right">
    <div className="content">
      <h2>Getting Home</h2>
        <p>
          Harrogate taxis get very busy on a Saturday night, so it is
          advisable to prebook your ride home for the end of the night. The
          wedding will be well signposted, however, taxis can be advised that
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
</div>
</div>
  </Wedding>
  </div>
);

const Banner = styled.div`
  .imageBanner {
    background-image: url("https://res.cloudinary.com/eddemott/image/upload/f_auto,q_auto/v1556787910/savethedate_zk4gwg.jpg");
   background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
`;

const Wedding = styled.div`
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

  .Pavillion {
    margin-left: 4em;
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

  @media only screen and (max-width: 1180px) {
    .content {
      padding: 2em;
    }
    h2, p, a {
      text-align: center;
    }
    .top {
      padding-top: 0;
    }
    .image {
    height: 30vh;
    }
    .Pavillion {
    margin-left: 1em;
  
  }
`;

export default WeddingPage;

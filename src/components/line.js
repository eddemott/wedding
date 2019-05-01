import React from "react";
import styled from "styled-components";

const line = () => (
  <Line>
    <ul className="timeline timeline-centered">
      <li className="timeline-item">
        <div className="timeline-info">
          <span>1:00pm</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">Guests Arrive</h3>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-info">
          <span>1:30pm</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">Ceremony</h3>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-info">
          <span>2:30pm</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">Coaches Depart</h3>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-info">
          <span>3:15pm</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">Champagne & Canapes</h3>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-info">
          <span>5:00pm</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">Dinner and Speeches</h3>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-info">
          <span>8:00pm</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">1st Dance</h3>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-info">
          <span>10:00pm</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">Coffee, cake & late night snacks</h3>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-info">
          <span>2:00am</span>
        </div>
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3 className="timeline-title">Carriages</h3>
        </div>
      </li>
    </ul>
  </Line>
);

const Line = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center; */

  .timeline {
    width: 100%;
  }
  /*----- TIMELINE ITEM -----*/
  .timeline-item {
    display: flex;
    padding-left: 50px;
    position: relative;
  }
  .timeline-item:nth-child(even) {
    flex-direction: row-reverse;
  }
  .timeline-item:last-child {
    padding-bottom: 0;
  }

  /*----- TIMELINE INFO -----*/
  .timeline-info {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    margin: 0 0 0.5em 0;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /*----- TIMELINE MARKER -----*/
  .timeline-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15px;
  }
  .timeline-marker:before {
    background: #899081;
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
  }
  .timeline-marker:after {
    content: "";
    width: 4px;
    background: #ccd5db;
    display: block;
    position: absolute;
    top: 30px;
    bottom: 4px;
    left: 8.5px;
  }
  .timeline-item:last-child .timeline-marker:after {
    content: none;
  }

  /*----- TIMELINE CONTENT -----*/
  .timeline-content {
    padding-bottom: 40px;
  }
  .timeline-content p:last-child {
    margin-bottom: 0;
  }
  .timeline-centered,
  .timeline-centered .timeline-item,
  .timeline-centered .timeline-info,
  .timeline-centered .timeline-marker,
  .timeline-centered .timeline-content {
    display: block;
    margin: 0;
    padding: 0;
  }
  .timeline-centered .timeline-item {
    display: flex;
    padding-bottom: 40px;
    overflow: hidden;
  }
  .timeline-centered .timeline-marker {
    position: absolute;
    left: 50%;
    margin-left: -7.5px;
  }
  .timeline-centered .timeline-info,
  .timeline-centered .timeline-content {
    width: 50%;
  }
  .timeline-centered > .timeline-item:nth-child(odd) .timeline-info {
    text-align: right;
    padding-right: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(odd) .timeline-content {
    text-align: left;
    padding-left: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(even) .timeline-info {
    float: right;
    text-align: left;
    padding-left: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(even) .timeline-content {
    text-align: right;
    padding-right: 30px;
  }
  .timeline-centered > .timeline-item.period .timeline-content {
    float: none;
    padding: 0;
    width: 100%;
    text-align: center;
  }
  .timeline-centered .timeline-item.period {
    padding: 50px 0 90px;
  }
  .timeline-centered .period .timeline-marker:after {
    height: 30px;
    bottom: 0;
    top: auto;
  }
  .timeline-centered .period .timeline-title {
    left: auto;
  }
  .timeline-title {
    margin: 0;
  }

  /*----------------------------------------------
    MOD: MARKER OUTLINE
----------------------------------------------*/
  .marker-outline .timeline-marker:before {
    background: transparent;
    border-color: #ff6b6b;
  }
`;

export default line;

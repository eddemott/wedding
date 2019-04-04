import React from 'react';
import styled from 'styled-components';

const AccommodationPage = () =>

<HotelText>
    <p>
    There are hotels and B&BS to suit every budget in and around Harrogate and Knaresborough. The bridal party will be staying at the White Hart Hotel, which is a short walk through the park to the ceremony venue. There are a limited number of rooms available at a rate of XXX. You can book directly with the venue using code XXX. 
    </p>
    <ul>
        <li>White Hart</li>
        <li>Hotel X</li>
        <li>Hotel Y</li>
        <li>BnB etc</li>
    </ul>
</HotelText>

const HotelText = styled.div`
    p {
        width: 70vw;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.5em;
        font-family: 'Helvetica Neue LT Std';
    }
`;
 
export default AccommodationPage;
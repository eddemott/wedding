import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-family: 'Helvetica Neue LT Std';
    font-size: 20pt;
    color: black;
    text-decoration: none;
    :visited {
        text-decoration: none;
    }
    :hover {
        color: #2d3a2d;;
    }
`;

export default StyledLink;
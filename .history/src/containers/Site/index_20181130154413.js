import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Heading = styled.h1`
    color: red;
`;


export class Site extends React.PureComponent {

  render() {

    return (
        <MainContainer>            
            <Heading>Well, hello world!</Heading>
            <p>Enter application</p>
            <button type="submit">GO IN</button>
        </MainContainer>
        )
    }       
}

export default Site;

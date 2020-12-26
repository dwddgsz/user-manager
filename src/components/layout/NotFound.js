import React from 'react';
import Subtitle from '../reusable/Subtitle';
import styled from 'styled-components';
import history from '../../history'



const NotFoundWrapper = styled.section`
button {
    display:block;
        margin:15px auto 0;
        padding: 5px 20px;
        border:2px solid var(--dark);
        border-radius:4px;
        color:var(--white);
        background-color: var(--dark);
        cursor:pointer;
        transition: background-color .3s, border .3s, color .3s;
        &:hover,&:focus {
            background-color:var(--white);
            border: 2px solid var(--dark);
            color: var(--dark);
        }
}
`


const NotFound = () => {
    const pushToHome = () => {
        history.push('/')
    }
    return (
        <NotFoundWrapper>
        <Subtitle>Page Not Found</Subtitle>
        <button onClick={pushToHome}>Home</button>
        </NotFoundWrapper>
    )
}

export default NotFound

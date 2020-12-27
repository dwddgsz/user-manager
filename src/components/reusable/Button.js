import React from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.button`
        display:block;
        ${props=>props.center === 'true'? 'margin:0 auto' : null};
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
`

const Button = ({children,handleOnClick,center}) => {
    return (
        <ButtonWrapper center={center} onClick={handleOnClick}>{children}</ButtonWrapper>
    )
}

export default Button

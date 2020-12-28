import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
	display: block;
	${(props) => (props.center ? 'margin:0 auto' : null)};
	padding: 5px 0;
	width: 85px;
	border: 2px solid var(--dark);
	border-radius: 4px;
	color: var(--white);
	background-color: var(--dark);
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
	&:hover,
	&:focus {
		background-color: var(--white);
		color: var(--dark);
	}
`

const Button = (props) => {
	return (
		<ButtonWrapper center={props.center} onClick={props.handleOnClick}>
			{props.children}
		</ButtonWrapper>
	)
}

export default Button

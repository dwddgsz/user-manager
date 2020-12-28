import React from 'react'
import styled from 'styled-components'

const SubtitleWrapper = styled.h2`
	margin-top: 40px;
	margin-bottom: 30px;
	text-align: center;
	font-size: 2.2rem;
`

const Subtitle = (props) => {
	return <SubtitleWrapper>{props.children}</SubtitleWrapper>
}

export default Subtitle

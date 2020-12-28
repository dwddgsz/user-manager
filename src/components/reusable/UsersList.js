import React, { Component } from 'react'
import styled from 'styled-components'

import UserCard from './UserCard'
import Subtitle from './Subtitle'

const UsersListWrapper = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		li {
			font-size: 2rem;
		}
	}
`

class UsersList extends Component {
	render() {
		return (
			<UsersListWrapper>
				<Subtitle>Users List</Subtitle>
				<ul>
					{Object.keys(this.props.filteredData).length === 0 ? (
						<li>No records found</li>
					) : (
						this.props.filteredData.map((element) => {
							return <UserCard data={element} key={element.id} />
						})
					)}
				</ul>
			</UsersListWrapper>
		)
	}
}

export default UsersList

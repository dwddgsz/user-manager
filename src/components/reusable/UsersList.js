import React from 'react'
import styled from 'styled-components';
import UserCard from './UserCard';
import Subtitle from './Subtitle'

const UsersListWrapper = styled.section`
max-width:1200px;
margin:0 auto;
ul {
    display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
}
`

const UsersList = () => {
    return (
        <UsersListWrapper>
            <Subtitle>Users List</Subtitle>
            <ul>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            </ul>
        </UsersListWrapper>
    )
}

export default UsersList

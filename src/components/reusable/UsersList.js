import React,{Component} from 'react'
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

class UsersList extends Component {
    renderUsers = () => {
        if (this.props.filteredData) {
            return this.props.filteredData.map(element=>{
                return (<UserCard data={element} key={element.id}/>)
            })
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }


    render() {
    return (
        
        <UsersListWrapper>
            <Subtitle>Users List</Subtitle>
            <ul>
                {this.renderUsers()}
            </ul>
        </UsersListWrapper>
    )
    }
}

export default UsersList
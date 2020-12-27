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
    state = {
        allData: [],
        filteredData: [],
    }
    componentDidMount() {
        fetch('http://fronttest.ekookna.pl/')
        .then((res)=>{return res.json()})
        .then((res=>{this.setState({allData:res.users})}))
        .then(()=>{this.setState({filteredData:this.state.allData})})
        .catch(()=>{console.log('error')})
    }
    renderUsers = () => {
        if (this.state.filteredData) {
            return this.state.filteredData.map(element=>{
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
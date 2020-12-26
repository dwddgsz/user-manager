import React,{Component} from 'react'

import Subtitle from '../reusable/Subtitle';
import Filter from '../reusable/Filter';
import UsersList from '../reusable/UsersList';

class Home extends Component {
    render() {
    return (
        <div>
        <Subtitle>Filter Options</Subtitle>
        <Filter></Filter>
        <UsersList></UsersList>
        </div>
    )
    }
}

export default Home

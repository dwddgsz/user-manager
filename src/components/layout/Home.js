import React,{Component} from 'react'

import Subtitle from '../reusable/Subtitle';
import Filter from '../reusable/Filter';
import UsersList from '../reusable/UsersList';

class Home extends Component {
    state = {
        allData: [],
        filteredData: [],
        searchPhrase:'',
        minAge:1,
        maxAge:200,
    }
    componentDidMount() {
        fetch('http://fronttest.ekookna.pl/')
        .then((res)=>{return res.json()})
        .then((res=>{this.setState({allData:res.users})}))
        .then(()=>{this.setState({filteredData:this.state.allData})})
        .catch(()=>{console.log('error')})
    }

    handleOnSubmit = () => {
        if (parseInt(this.state.minAge) > parseInt(this.state.maxAge)) {
            console.log(this.state.minAge);
            console.log(this.state.maxAge);
            console.log('is higher');
            return;
        } else {
            this.setState({filteredData:this.state.allData.filter((element)=>{
                if((parseInt(element.age) >= parseInt(this.state.minAge)) &&  (parseInt(element.age) <= parseInt(this.state.maxAge))){
                    return element;
                }
                else {
                    return null;
                }
            })},()=>{
                this.setState({filteredData:this.state.filteredData.filter((element)=>{
                    if(element.last_name.toUpperCase().includes(this.state.searchPhrase.toUpperCase())) {
                        return element;
                    }
                    else {
                        return null;
                    }
                })})
            })
        }

    }
    handleOnChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
    return (
        <div>
        <Subtitle>Filter Options</Subtitle>
        <Filter 
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
        searchPhrase={this.state.searchPhrase}
        minAge={this.state.minAge}
        maxAge={this.state.maxAge}
        ></Filter>
        <UsersList filteredData={this.state.filteredData} ></UsersList>
        </div>
    )
    }
}

export default Home

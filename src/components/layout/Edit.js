import React,{Component} from 'react'
import styled from 'styled-components';
import history from '../../history';

import Form from '../reusable/Form';
import Subtitle from '../reusable/Subtitle'
import Button from '../reusable/Button'



class Edit extends Component {
    state = {
        isDataAvaible:false,
        message:'',
        success:false,
    }
    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://fronttest.ekookna.pl/user/${id}`)
        .then((res)=>{return res.json()})
        .then((res=>{this.setState(res.user)}))
        .then((()=>{this.setState({isDataAvaible:true})}))
        .catch(()=>{this.setState({isDataAvaible:false})})
    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            message: '',
            success:false,
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        // NO EMPTY STRINGS
        if (
            (this.state.first_name === '') ||
            (this.state.last_name ==='') ||
            (this.state.age ==='') ||
            (this.state.street ==='') ||
            (this.state.city ==='') ||
            (this.state.age ==='')
            ) {
                this.setState({message: 'field cannot be empty'});
                return;
            }

            // NO WHITESPACE CHARACTERS
            const regexpNoWhitespace = /^\S*$/;
        if (
            (!this.state.first_name.match(regexpNoWhitespace)) ||
            (!this.state.last_name.match(regexpNoWhitespace)) ||
            (!this.state.postal_code.match(regexpNoWhitespace)) ||
            (!this.state.street.match(regexpNoWhitespace)) ||
            (!this.state.city.match(regexpNoWhitespace))
            ) {
                this.setState({message: 'field cannot contain white spaces'});
                return;
            }

            // ONLY LETTERS
            const regexpLettersOnly = /^[a-zA-Z]+$/;
        if (
            (!this.state.first_name.match(regexpLettersOnly)) ||
            (!this.state.last_name.match(regexpLettersOnly)) ||
            (!this.state.street.match(regexpLettersOnly)) ||
            (!this.state.city.match(regexpLettersOnly))
            ) {
                this.setState({message: 'name, street and city fields can only contain letters'});
                return;
            }

            // REQUEST
    const details = {
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        street:this.state.street,
        postal_code:this.state.postal_code,
        city:this.state.city,
        age:this.state.age,
    };
    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const id = this.props.match.params.id
    fetch(`http://fronttest.ekookna.pl/user/${id}?_method=PUT`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
    .then((()=>{this.setState({success:true,message:'success'})}))
    }



    render() {
        if(this.state.isDataAvaible === true) {
            return (
                <Form
                title='Edit User'
                data={this.state}
                handleOnChange={this.handleOnChange}
                handleOnSubmit={this.handleOnSubmit}>
                </Form>
                )            
        } else {
            return (
                <section>
                <Subtitle>Record not found</Subtitle>
                <Button center={true} handleOnClick={()=>{history.push('/')}}>Home</Button>
                </section>
            )
        }
}
}
 
export default Edit

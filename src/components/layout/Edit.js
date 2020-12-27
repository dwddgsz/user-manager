import React,{Component} from 'react'
import Form from '../reusable/Form';
import history from '../../history';
import Subtitle from '../reusable/Subtitle'
import styled from 'styled-components';


const RecordNotFoundWrapper = styled.div`
button {
    display:block;
        margin:15px auto 0;
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
}
`

class Edit extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://fronttest.ekookna.pl/user/${id}`)
        .then((res)=>{return res.json()})
        .then((res=>{this.setState(res.user)}))
        .then((()=>{this.setState({success:'yes'})}))
        .catch(()=>{this.setState({success:'no'})})
    }
    state = {
        success:'',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            error: '',
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (
            (this.state.first_name === '') ||
            (this.state.last_name ==='') ||
            (this.state.age ==='') ||
            (this.state.street ==='') ||
            (this.state.city ==='') ||
            (this.state.age ==='')
            ) {
                this.setState({error: 'field cannot be empty'});
                return;
            }
            const regexpNoWhitespace = /^\S*$/;
        if (
            (!this.state.first_name.match(regexpNoWhitespace)) ||
            (!this.state.last_name.match(regexpNoWhitespace)) ||
            (!this.state.postal_code.match(regexpNoWhitespace)) ||
            (!this.state.street.match(regexpNoWhitespace)) ||
            (!this.state.city.match(regexpNoWhitespace))
            ) {
                this.setState({error: 'field cannot contain white spaces'});
                return;
            }

            const regexpLettersOnly = /^[a-zA-Z]+$/;
        if (
            (!this.state.first_name.match(regexpLettersOnly)) ||
            (!this.state.last_name.match(regexpLettersOnly)) ||
            (!this.state.street.match(regexpLettersOnly)) ||
            (!this.state.city.match(regexpLettersOnly))
            ) {
                this.setState({error: 'name, street and city fields can only contain letters'});
                return;
            }
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
    .then(res=>{return res.json()})
    .then(res=>{console.log(res)})
    .then(()=>{this.setState({
        first_name:'',
        last_name:'',
        street:'',
        postal_code:'',
        city:'',
        age:'',
    })})
    .then((()=>{history.push('/')}))
    }



    render() {
        if(this.state.success === 'yes') {
            return (
                <Form title='Edit User' data={this.state} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}></Form>
                )            
        } else {
            return (
                <RecordNotFoundWrapper>
                <Subtitle>Record not found</Subtitle>
                <button onClick={()=>{history.push('/')}}>Home</button>
                </RecordNotFoundWrapper>
            )
        }
}
}
 
export default Edit

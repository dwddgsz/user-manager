import React,{Component} from 'react'
import Form from '../reusable/Form'

class Create extends Component {
    state = {
        first_name:'',
        last_name:'',
        street:'',
        postal_code:'',
        city:'',
        age:'',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
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
    
    fetch('http://fronttest.ekookna.pl/user', {
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
    }



    render() {return (
        <Form data={this.state} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}></Form>
    )}
}

export default Create

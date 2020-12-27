import React,{Component} from 'react'
import Form from '../reusable/Form';
import history from '../../history';

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
            const regexp = /^\S*$/;
            if (
                (this.state.first_name.match(regexp)) ||
                (this.state.last_name.match(regexp)) ||
                (this.state.age.match(regexp)) ||
                (this.state.street.match(regexp)) ||
                (this.state.city.match(regexp)) ||
                (this.state.age.match(regexp))
                ) {
                    this.setState({error: 'field cannot contain white spaces'});
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
                <Form data={this.state} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}></Form>
                )            
        } else {
            return (
                <p>Record not found</p>
            )
        }
}
}

export default Edit

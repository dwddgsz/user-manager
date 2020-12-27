import React from 'react'
import styled from 'styled-components';

import history from '../../history'
import Subtitle from '../reusable/Subtitle'
import Button from '../reusable/Button'

const FormWrapper = styled.section`

form {
    margin:0 auto;
    width:240px;
    .form {
        &__field-container {
        display:flex;
        flex-direction:column;
        margin-bottom:10px;
        }
        &__label {
            margin-bottom:5px;
            font-weight:500;
            font-size:1.3rem;
        }
        &__field {
            width:100%;
            padding: 5px 10px;
            border:none;
            border-radius:5px;
            outline:none;
            box-shadow: 1px 2px 2px rgba(200,200,200,.5);
            letter-spacing:1px;
        }

    &__message{
        padding: 10px 0;
        font-size:1.3rem;
        text-align:center;
        text-transform:capitalize;
        ${props=>props.success === true? 'color:#2BA848' : 'color:#DC3545'};
    }
    &__buttons-container {
        display:flex;
        width:240px;
        margin: 0 auto;
        justify-content:space-between;
    }
    &__home-button {
        display:block;
        padding: 5px 0;
        width:85px;
        border:2px solid var(--dark);
        border-radius:4px;
        color:var(--dark);
        background-color: var(--bg);
        cursor:pointer;
        transition: background-color .3s, color .3s;
        &:hover,&:focus {
            background-color:var(--dark);
            color: var(--white);
        }
    }

    }
    
}


`


class Form extends React.Component {
    
    render() {
        const handleOnChange = this.props.handleOnChange;
        const handleOnSubmit = this.props.handleOnSubmit;
        return(
            <FormWrapper success={this.props.data.success}>
            <Subtitle>{this.props.title}</Subtitle>

            <form onSubmit={handleOnSubmit}>

                <p className="form__message">{this.props.data.message}</p>
            <div className="form__field-container">
                <label className="form__label">Name</label>
                <input className="form__field" type="text" id="first_name"
                 onChange={handleOnChange} value={this.props.data.first_name}
                 ></input>
            </div>

            <div className="form__field-container">
                <label className="form__label">Last Name</label>
                <input className="form__field" type="text" id="last_name"
                onChange={handleOnChange} value={this.props.data.last_name}
                 ></input>
            </div>

            <div className="form__field-container">
                <label className="form__label">Age</label>
                <input className="form__field" type="number" min="0" max="200" id="age" 
                onChange={handleOnChange} value={this.props.data.age}
                ></input>
            </div>

            <div className="form__field-container">
                <label className="form__label">Street</label>
                <input className="form__field" type="text" id="street" 
                onChange={handleOnChange} value={this.props.data.street}
                ></input>
            </div>

            <div className="form__field-container">
                <label className="form__label">City</label>
                <input className="form__field" type="text" id="city" 
                onChange={handleOnChange} value={this.props.data.city}
                ></input>
            </div>

            <div className="form__field-container">
                <label className="form__label">Postal Code</label>
                <input className="form__field" id="postal_code" 
                onChange={handleOnChange} value={this.props.data.postal_code}
                ></input>
            </div>

            <div className="form__buttons-container">
            <Button>Submit</Button>
            <button className="form__home-button" onClick={()=>{history.push('/')}}>Home</button>
            </div>

            
            </form>
            </FormWrapper>
            )
        }
}

export default Form;


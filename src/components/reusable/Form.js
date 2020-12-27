import React from 'react'
import styled from 'styled-components';
import Subtitle from '../reusable/Subtitle'

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
    &__button {
        display:block;
        margin:0 auto;
        padding: 5px 20px;
        border:2px solid var(--dark);
        border-radius:4px;
        background-color: var(--dark);
        color:var(--white);
        cursor:pointer;
        transition: background-color .3s, border .3s, color .3s;
        &:hover,&:focus {
            background-color:var(--white);
            border: 2px solid var(--dark);
            color: var(--dark);
        }
    }
    &__error {
        padding: 7px 0 12px;
        font-size:1.2rem;
        text-align:center;
        color: red;
    }
    }
    
}


`


class Form extends React.Component {
    
    render() {
        const handleOnChange = this.props.handleOnChange;
        const handleOnSubmit = this.props.handleOnSubmit;
        return(
            <FormWrapper>
                <Subtitle>{this.props.title}</Subtitle>
            <form onSubmit={handleOnSubmit}>
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
                <input className="form__field" type="number" id="age" 
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
            <p className="form__error">{this.props.data.error}</p>
            <button className="form__button">Submit</button>
            </form>
            </FormWrapper>
            )
    }
}

export default Form;


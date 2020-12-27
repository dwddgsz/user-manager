import React, { Component } from 'react'
import styled from 'styled-components';

import Button from '../reusable/Button'



const FilterWrapper = styled.form`
margin:0 auto;
max-width:1200px;
padding: 0;
.search {

    &__by-name {
        display:block;
        width:250px;
        margin: 0 auto;
        border:none;
        border-radius:5px;
        padding: 5px 10px;
        box-shadow: 1px 2px 2px rgba(200,200,200,.5);
        background-color: var(--white);
    &:focus {
        background-color: rgba(250,250,250)
    }
    }

    &__by-age-container {
        display:flex;
        justify-content:space-between;
        width:260px;
        margin: 10px auto 0;
    }

    &__by-age {
        width:120px;
        margin: 0 auto;
        padding: 5px 10px;
        border:none;
        border-radius:5px;
        box-shadow: 1px 2px 2px rgba(200,200,200,.5);
        background-color: var(--white);
    &:focus {
        background-color: rgba(250,250,250)
    }
    }

    &__field-group {
        display:flex;
        flex-direction:column;
        width:250px;
        margin:0 auto;
    }

    &__label {
        display:block;
        text-align:center;
        font-size:1.3rem;
        margin-bottom:6px;
        text-transform:capitalize;
    }

    &__error {
        padding: 16px 0 0px;
        font-size:1.2rem;
        text-align:center;
        color: red;
    }

}

`

export class Filter extends Component {
    render() {
        return (
            <FilterWrapper onSubmit={(e)=>{e.preventDefault();this.props.handleOnSubmit()}}>
                <div className="search__field-group">
                <label className="search__label" htmlFor="searchPhrase">search phrase</label>
                <input id="searchPhrase" onChange={this.props.handleOnChange} value={this.props.searchPhrase} type="text" className="search__by-name" ></input>
                </div>

                <div className="search__by-age-container">

                <div className="search__field-group">
                <label className="search__label" htmlFor="minAge">min age</label>
                <input id="minAge" onChange={this.props.handleOnChange} min="0" max="200" value={this.props.minAge} type="number" className="search__by-age"></input>
                </div>

                <div className="search__field-group">
                <label className="search__label" htmlFor="maxAge">max Age</label>
                <input id="maxAge" onChange={this.props.handleOnChange} min="0" max="200" value={this.props.maxAge} type="number" className="search__by-age" ></input>
                </div>

                </div>
                <p className="search__error">{this.props.error}</p>
                <Button center={true}>Search</Button>
            </FilterWrapper>

        )
    }
}

export default Filter

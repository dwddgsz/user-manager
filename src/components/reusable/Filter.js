import React, { Component } from 'react'
import styled from 'styled-components';



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


    &__button {
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
}

`

export class Filter extends Component {
    render() {
        return (
            <FilterWrapper onSubmit={(e)=>{e.preventDefault();this.props.handleOnSubmit()}}>
                <input id="searchPhrase" onChange={this.props.handleOnChange} value={this.props.searchPhrase} type="text" className="search__by-name" placeholder="search by last name" ></input>
                <div className="search__by-age-container">
                <input id="minAge" onChange={this.props.handleOnChange} min="0" value={this.props.minAge} type="number" className="search__by-age" placeholder="min age"></input>
                <input id="maxAge" onChange={this.props.handleOnChange} max="200" value={this.props.maxAge} type="number" className="search__by-age" placeholder="max age" ></input>
                </div>
                <button className="search__button">Search</button>
            </FilterWrapper>

        )
    }
}

export default Filter

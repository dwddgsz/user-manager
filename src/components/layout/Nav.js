import React,{Component} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import history from '../../history'


const NavWrapper = styled.nav`
box-shadow: 0 4px 2px -2px rgba(200,200,200,.5);
background-color: var(--white);
.nav {
    &__content{
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
    padding: 10px 30px;
    }
    &__link {
        color: var(--dark);
        transition: .3s opacity;
        &:hover,&:focus {
            opacity:.7;
        }
    }
    &__create-button {
        padding: 5px 20px;
        border:2px solid var(--dark);
        border-radius:4px;
        background-color: var(--dark);
        color:var(--white);
        cursor:pointer;
        transition: background-color .3s, border .3s, color .3s;
        &:hover,&:focus {
            border: 2px solid var(--dark);
            background-color:var(--white);
            color: var(--dark);
        }
    }
}
`

class Nav extends Component {
    pushToCreate = () => {
        history.push('/create')
    }
    render() {
        return (
        <NavWrapper>
            <div className="nav__content">
                <h1 className="nav__logo">
                    <Link className="nav__link" to="/">
                        User Manager
                    </Link>
                </h1>
                <button className="nav__create-button" onClick={this.pushToCreate}>Create</button>
            </div>
        </NavWrapper>
        
    )
        }
}

export default Nav

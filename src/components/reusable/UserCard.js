import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserCardWrapper = styled.li`
    width:240px;
    margin: 0 30px 60px;
    border-radius:10px;
    overflow:hidden;
    box-shadow: 1px 2px 2px rgba(200,200,200,.5);
    background-color:var(--white);
    .card {
    &__header {
        padding: 20px 10px;
        border-bottom: 1px solid rgba(200,200,200,.5);
        font-size:1.4rem;
        font-weight:500;
        text-align:center;
    }
    &__body {
        display:flex;
        flex-direction:column;
        padding:10px 15px;
        border-bottom: 1px solid rgba(200,200,200,.5);
        li {
            display:flex;
            font-size:1.3rem;
            margin-bottom:5px;
            span {
                color: #5c5c5c;
                white-space: nowrap;
            }
            p {
                margin-left:4px;
                font-weight:500;
                white-space: nowrap;
                max-width:100%;
  	            overflow: hidden;
                text-overflow:ellipsis;
            }
        }
    }
    &__buttons {
        display:flex;
        .user__button {
            border:none;
            color: var(--dark);
            line-height:40px;
            text-align:center;
            font-size:1.5rem;
            display:block;
            width:100%;
            height:40px;
            transition: background-color .3s;
            background-color: var(--white);
            cursor:pointer;
            span {
                transition: .3s color;
            }
            &:hover,&:active,&:focus {
                background-color: var(--dark);
                span {
                    color: var(--white);
                }
            }
        }
    }
}

` 


const UserCard = () => {
    return (
        <UserCardWrapper>
        <div className="card__header">
            <h3>Random Name</h3>
        </div>
        <ul className="card__body">
            <li><span>Age:</span><p>22</p></li>
            <li><span>Street:</span>Jastrzębska<p></p></li>
            <li><span>City:</span><p>Jastrzębie</p></li>
            <li><span>Postal Code:</span><p>22-222</p></li>
        </ul>
        <div className="card__buttons">
            <Link to="/edit" className="user__button">
            <span className="fas fa-user-edit"></span>
            </Link>                  
            <button className="user__button">
            <span className="fas fa-user-times"></span>
            </button>
        
        </div>
    </UserCardWrapper>
    )
}

export default UserCard

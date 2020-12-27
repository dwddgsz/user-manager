import React from 'react'
import styled from 'styled-components';

import history from '../../history'

const UserCardWrapper = styled.li`
    width:240px;
    margin: 0 30px 60px;
    border-radius:10px;
    overflow:hidden;
    box-shadow: 1px 2px 2px rgba(200,200,200,.5);
    background-color:var(--white);
    .card {
    &__header {
        padding: 12px 10px;
        border-bottom: 1px solid rgba(200,200,200,.5);
        h3 {
            display:flex;
            flex-direction:column;
            font-size:1.4rem;
            white-space: nowrap;
            max-width:180px;
            margin: 0 auto;
            span {
                overflow: hidden;
            text-overflow:ellipsis;
            text-align:center;

                &:not(:last-child){
                    margin-bottom:5px;
                }
            }
        }
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
            white-space: nowrap;
            span {
                color: #5c5c5c;
            }
            p {
                margin-left:4px;
                font-weight:500;
                white-space: nowrap;
                max-width:100px;
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


const UserCard = ({data}) => {
    const pushToEdit = (e) =>{
        const id = e.target.closest('button').parentElement.parentElement.getAttribute('data-id');
        history.push(`/edit/${id}`)
    }
    const deleteUser = (e) => {
        const id = e.target.closest('button').parentElement.parentElement.getAttribute('data-id');
        fetch(`http://fronttest.ekookna.pl/user/${id}?_method=DELETE`, {
      method: 'POST'
    })
    .then(res=>{return res.json()})
    .then(res=>{window.location.reload(true);})
    
    }

    return (
        <UserCardWrapper data-id={data.id}>

        <div className="card__header">
            <h3>
                <span>
                {data.first_name}
                </span>
                <span>
                {data.last_name}
                </span></h3>
        </div>

        <ul className="card__body">
            <li><span>Age:</span><p>{data.age}</p></li>
            <li><span>Street:</span><p>{data.street}</p></li>
            <li><span>City:</span><p>{data.city}</p></li>
            <li><span>Postal Code:</span><p>{data.postal_code}</p></li>
        </ul>

        <div className="card__buttons">
            <button className="user__button" onClick={pushToEdit}>
            <span className="fas fa-user-edit"></span>
            </button>                  
            <button className="user__button" onClick={deleteUser}>
            <span className="fas fa-user-times"></span>
            </button>
        </div>
        
    </UserCardWrapper>
    )
}

export default UserCard

import React from 'react';
import Subtitle from '../reusable/Subtitle';
import history from '../../history'
import Button from '../reusable/Button'



const NotFound = () => {
    const pushToHome = () => {
        history.push('/')
    }
    return (
        <section>
        <Subtitle>Page Not Found</Subtitle>
        <Button center={true} handleOnClick={pushToHome}>Home</Button>
        </section>
    )
}

export default NotFound

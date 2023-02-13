import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function View(){
    let [value, control] = useState(0);
    let incrementValue = () =>{
        control(value + 1);
    }
    let dicrementValue = () => {
        control(value - 1);
    }
    let defaultValue = () => {
        control(value = 0);
    }
    return (
        <div className='body'>
            <Card>
                <Card.Header className='header'>State Changer</Card.Header>
                <Card.Title className='title'>{value}</Card.Title>
                <div className='btn-box'>
                    <Button onClick={incrementValue} disabled={value >= 5 ? true : false}>+</Button>
                    <Button variant="success" onClick={defaultValue}>0</Button>
                    <Button variant="danger" onClick={dicrementValue} disabled={value <= 0 ? true : false}>-</Button>
                </div>
            </Card>
        </div>
    )
}

export default View;
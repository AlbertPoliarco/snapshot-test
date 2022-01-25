import React from 'react';
import Card from "react-bootstrap/Card"
import Luffy from './Luffy.jpeg'
import { CardImg, CarouselItem } from 'react-bootstrap';


const GitHubCard = () => {
    return (

    <div className='card'>
        <Card style={{ width: "18rem"}}>
            <CardImg variant='top' src={Luffy} />
            <Card.Title>Luffy</Card.Title>
            <Card.Text>
                I am a anime character and I am the King of Pirates!
            </Card.Text>
        </Card>
    </div>
    )
}

export default GitHubCard;
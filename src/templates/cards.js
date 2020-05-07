import React from 'react';
import { Card } from 'antd';

import cardStyles from './cards.module.scss'

export default function Zard(props) {

    return (
        <div >
            <Card title="Card title" className= {cardStyles.card}>
                <h1>{props.title}</h1>
                <p>{props.date}</p>
            </Card>
        </div>
    )
}

import React from 'react';
import { Card } from 'antd';

import cardStyles from './cards.module.scss'

export default function Zard(props) {

    return (
        <div >
            <Card title={props.title} className= {cardStyles.card}>
                <p>{props.date}</p>
            </Card>
        </div>
    )
}

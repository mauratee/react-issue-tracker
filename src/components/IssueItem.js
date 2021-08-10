import React, { useState } from 'react'
import './IssueItem.css'


export default function IssueItem(props) {
    const date = props.date.toLocaleString('en-US', {dateStyle: 'short'})

    const [description, setDescription] = useState(props.description);

    const clickHandler = () => {
        setDescription('Updated!');
        console.log(description)
    }
    
    return (
        <div className="issue-item">
            <h2>{description}</h2>
            <div>{props.priority}</div>
            <div>{date}</div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

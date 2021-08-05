import React from 'react'
import './IssueItem.css'

export default function IssueItem(props) {
    const date = props.date.toLocaleString('en-US', {dateStyle: 'short'})
    
    return (
        <div className="issue-item">
            <h2>{props.description}</h2>
            <div>{props.priority}</div>
            <div>{date}</div>
        </div>
    )
}

import React from 'react'

function NewIssue() {
    return (
        <div>
            <form>
                <div>
                    <label>Description</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <select name="priority" id="priority">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31"/>
                </div>
                <div>
                    <button type="submit">Add Issue</button>
                </div>
            </form>
        </div>
    )
}

export default NewIssue

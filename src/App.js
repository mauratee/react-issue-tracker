import React, { useState } from "react";
import "./App.css";
import IssueItem from "./components/IssueItem";
import Card from "./components/Card";
import NewIssue from "./components/NewIssue";

const DUMMY_ISSUES = [
  {
    id: "i0",
    description: "Make priority columns",
    priority: "high",
    date: new Date(2021, 7, 5),
  },
  {
    id: "i1",
    description: "Add new issue functionality",
    priority: "high",
    date: new Date(2021, 7, 6),
  },
  {
    id: "i2",
    description: "Delete issue functionality",
    priority: "medium",
    date: new Date(2021, 7, 5),
  },
  {
    id: "i3",
    description: "Toggle priority for each issue",
    priority: "medium",
    date: new Date(2021, 7, 4),
  },
];

function App() {
  const [issues, setIssues] = useState(DUMMY_ISSUES);

  const addIssueHandler = (issue) => {
    setIssues(prevIssues => {
      return [issue, ...prevIssues]
    });
  };

  return (
    <div>
      <header>Open Issue Tracker</header>
      <Card>
        <NewIssue onAddIssue={addIssueHandler} />
      </Card>
      <Card>
        {issues.map((issue) => (
          <IssueItem
            key={issue.id}
            description={issue.description}
            priority={issue.priority}
            date={issue.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;

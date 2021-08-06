import "./App.css";
import IssueItem from "./components/IssueItem";
import Card from './components/Card'

function App() {
  const issues = [
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

  return (
    <div>
      <header>Open Issue Tracker</header>
      <Card>
        <IssueItem
          id={issues[0].id}
          description={issues[0].description}
          priority={issues[0].priority}
          date={issues[0].date}
        />
        <IssueItem 
          id={issues[1].id}
          description={issues[1].description}
          priority={issues[1].priority}
          date={issues[1].date}
        />
        <IssueItem 
          id={issues[2].id}
          description={issues[2].description}
          priority={issues[2].priority}
          date={issues[2].date}
        />
        <IssueItem 
          id={issues[3].id}
          description={issues[3].description}
          priority={issues[3].priority}
          date={issues[3].date}
        />
      </Card>
    </div>
  );
}

export default App;

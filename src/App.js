import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doc Appt',
        day: ' Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Concert',
        day: ' May 6th at 6:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Work',
        day: ' May 25th at 4pm',
        reminder: true,
    }
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task ))
}

  return (
    <div className="container">
      <Header />
      <AddTasks />
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
        )}
    </div>
  );
}

export default App;

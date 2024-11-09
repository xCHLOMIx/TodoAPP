import { useEffect, useState } from 'react';
import add from '../assets/img/add.svg'
import Task from '../components/task.jsx'
import { Link } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks/')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setTasks(data)
      })
  }, [])

  return (
    <div className="Home">
      <nav>
        <span>Tasks</span>
        <Link to={ '/create' }>
          <img src={add} alt="" />
        </Link>
      </nav>
      <div className="tasks">
        <Task tasks={tasks} />
      </div>
    </div>
  );
}

export default Home;
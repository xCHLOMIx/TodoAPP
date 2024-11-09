import { useEffect, useState } from 'react';
import add from '../assets/img/add.svg'
import Task from '../components/task.jsx'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const navigate = useNavigate()

    const task = { title, time}
    
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/api/tasks/', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(task)
        })
            .then((res) => {
                navigate("/")
            })
    }
    return (
        <div className="Create">
            <nav>
                <span>Create task</span>
                <Link to={'/'}>
                    <img src={add} alt="" id='close' />
                </Link>
            </nav>
            <div className="tasks">
                <form action="" onSubmit={ handleSubmit }>
                    <div className="input">
                        <input
                            type="text"
                            placeholder='Task title'
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input">
                        <input
                            type="datetime-local"
                            placeholder='Task schedule time:'
                            onChange={(e) => setTime(e.target.value)}
                            required    
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
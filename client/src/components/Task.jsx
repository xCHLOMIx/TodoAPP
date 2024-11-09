import add from '../assets/img/add.svg'
import edit from '../assets/img/edit.svg'
import trash from '../assets/img/delete.svg'
import { Link, useNavigate } from 'react-router-dom'

const Task = ({ tasks }) => {
    const navigate = useNavigate()
    const handleDelete = (id) =>{
        fetch('http://localhost:3000/api/tasks/' + id, {
            method : "DELETE"
        })
            .then((res) => {
                window.location.href = "/"
            })
    }
    
    return (
        <>
            {tasks.map((task) => (
                <div key={ task._id }  className="Task">
                    <div className="info">
                        <div className="title">{ task.title }</div>

                        <div className="duration"><span><strong>Duration: </strong>{ new Date(task.time).toLocaleString() }</span></div>
                    </div>
                    <div className="buttons">
                        <Link to='/'>
                            <img id='edit' src={edit} alt="" />
                        </Link>
                        <img id='delete' src={trash} alt="" onClick={ ()=> handleDelete(task._id) } />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Task;
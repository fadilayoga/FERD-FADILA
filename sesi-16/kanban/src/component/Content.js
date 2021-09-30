import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../store/action'

const Content = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const handleDispatch = (data) => {
        dispatch({
            type: "ACTION",
            data: data
        })
    }

    const handleAction = (task, idx) => {
        let data = state.task
        if (task.status === "backlog") {
            data.push({
                task: task.task,
                status: "progress"
            })
        } else if (task.status === "progress") {
            data.push({
                task: task.task,
                status: "evaluation"
            })
        } else {
            data.push({
                task: task.task,
                status: "done"
            })
        }
        data.splice(idx, 1)
        handleDispatch(data)
    }

    const handleSave = (e) => {
        e.preventDefault()
        let data = state.task
        data.push({
            task: e.target[0].value,
            status: "backlog"
        })
        handleDispatch(data)
    }

    return (
        <>
            <form className="d-flex w-50 mt-3 ms-4" onSubmit={(e) => handleSave(e)}>
                <input className="form-control me-2" type="search" placeholder="New Task" aria-label="Search" />
                <button className="btn btn-primary w-25" type="submit">Save</button>
            </form>

            <div className="row ms-2 me-2 justify-content-evenly align-items-start">
                {/* section 1 */}
                <div className="card p-2 col m-3 text-start">
                    <div className="alert alert-dark fw-bold" role="alert">Backlog</div>
                    {
                        state.task.map((task, idx) => (
                            task.status === "backlog"
                                ?
                                <div className="card mb-2" key={idx}>
                                    <div className="card-body">
                                        <p className="card-text">{task.task}</p>
                                        <button onClick={() => handleAction(task, idx)} className="btn btn-secondary">Take</button>
                                    </div>
                                </div>
                                : ''
                        ))
                    }
                </div>
                {/* section 2 */}
                <div className="card p-2 col m-3 text-start">
                    <div className="alert alert-warning fw-bold text-start" role="alert">In Progress</div>
                    {
                        state.task.map((task, idx) => (
                            task.status === "progress"
                                ?
                                <div className="card mb-2" key={idx}>
                                    <div className="card-body">
                                        <p className="card-text">{task.task}</p>
                                        <button onClick={() => handleAction(task, idx)} className="btn btn-secondary">Evaluate</button>
                                    </div>
                                </div>
                                : ''
                        ))
                    }
                </div>
                {/* section 3 */}
                <div className="card p-2 col m-3 text-start">
                    <div className="alert alert-info fw-bold text-start" role="alert">Evaluation</div>
                    {
                        state.task.map((task, idx) => (
                            task.status === "evaluation"
                                ?
                                <div className="card mb-2" key={idx}>
                                    <div className="card-body">
                                        <p className="card-text">{task.task}</p>
                                        <button onClick={() => handleAction(task, idx)} className="btn btn-secondary">DONE</button>
                                    </div>
                                </div>
                                : ''
                        ))
                    }
                </div>
                {/* section 4 */}
                <div className="card p-2 col m-3 text-start">
                    <div className="alert alert-success fw-bold text-start" role="alert">Done</div>
                    {
                        state.task.map((task, idx) => (
                            task.status === "done"
                                ?
                                <div className="card mb-2" key={idx}>
                                    <div className="card-body">
                                        <p className="card-text">{task.task}</p>
                                    </div>
                                </div>
                                : ''
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Content


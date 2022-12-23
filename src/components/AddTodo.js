import React, {useState} from 'react'

const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault()
        if (!title || !desc) {
            alert("please fill all details")
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");

        }
    }


    return (
        <div className='container'>
            <form onSubmit={submit}>
                <h3 className='my-3'>Add a Todo</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo

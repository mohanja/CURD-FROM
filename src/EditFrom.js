import React, { useState } from "react";

const EditFrom = ({ init, upData}) => {
    const [state, setState] = useState(init)

    const handelInput = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const handelSumbit = (e) => {
        e.preventDefault()
        if (!state.name || !state.email || !state.salary) return
        upData(state.id, state)

    }
    return (
        <div class="center">
            <h1>Added List</h1>
            <form onSubmit={handelSumbit} >
                <div class="inputbox">
                    <input name="name" onChange={(e) => handelInput(e)} value={state.name} type="text" required="required" />
                    <span>Name</span>
                </div>
                <div class="inputbox">
                    <input name="salary" onChange={(e) => handelInput(e)} value={state.salary} type="text" required="required" />
                    <span>Salary</span>
                </div>
                <div class="inputbox">
                    <input name="email" onChange={(e) => handelInput(e)} value={state.email} type="text" required="required" />
                    <span>Email</span>
                </div>
                <div class="inputbox">
                    <button type="sumbit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditFrom

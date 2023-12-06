import React, { useState } from "react";

const From = ({ add }) => {

    const initialValue = {
        id: null,
        name: '',
        email: '',
        salary: ''
    }

    const [newData, setNewData] = useState(initialValue)

    const handelInput = (e) => {
        const { name, value } = e.target
        setNewData({ ...newData, [name]: value })
    }

    const handelSumbit = (e) => {
        e.preventDefault()
        if (!newData.name || !newData.email || !newData.salary) return
        add(newData)
        setNewData(initialValue)
    }
    return (
        <>
            <div class="center">
                <h1>Added List</h1>
                <form onSubmit={handelSumbit} >
                    <div class="inputbox">
                        <input name="name" onChange={(e) => handelInput(e)} value={newData.name} type="text" required="required" />
                        <span>Name</span>
                    </div>
                    <div class="inputbox">
                        <input name="salary" onChange={(e) => handelInput(e)} value={newData.salary} type="text" required="required" />
                        <span>Salary</span>
                    </div>
                    <div class="inputbox">
                        <input name="email" onChange={(e) => handelInput(e)} value={newData.email} type="text" required="required" />
                        <span>Email</span>
                    </div>
                    <div class="inputbox">
                        <button type="sumbit" className="btn btn-primary">add</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default From
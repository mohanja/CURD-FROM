import React, { useState } from "react";
import Table from "./Table";
import From from "./From";
import './Add.scss'
import EditFrom from "./EditFrom";

const Creat = () => {
    const list = [
        {
            id: 1,
            name: 'mohan',
            email: "mohanja@gmail.com",
            salary: "20000"
        },
        {
            id: 2,
            name: 'ram',
            email: "mohanja@gmail.com",
            salary: "10000"
        },
        {
            id: 3,
            name: 'ajram',
            email: "mohanja@gmail.com",
            salary: "30000"
        },

    ]
    const initialValue = {
        id: null,
        name: '',
        email: '',
        salary: ''
    }

    const [data, setData] = useState(list)
    const [edit, setEdit] = useState(false)
    const [init, setInit] = useState(initialValue)

    const add = (dat) => 
    {
        dat.id = data.length + 1;
        setData([...data, dat])
    }
 
    const handelEdit = (state) =>
    {
        setEdit(true)
        setInit({ id: state.id, name: state.name, email: state.email, salary: state.salary })
    }

    const upData = (id, upDatas) => {
        setEdit(false)
        setData(data.map((val) => (val.id === id ? upDatas : val)))
    }

    const hadnelDelete = (id) => 
    {
        setData(data.filter((val) => val.id !== id))
    }
    return (
        <>
            {edit ? (<div>
                <h1>edit</h1>
                <EditFrom setEdit={setEdit} init={init} upData={upData} />
            </div>) : (
                <From add={add}/>
            )}
            <Table data={data} handelEdit={handelEdit} hadnelDelete={hadnelDelete} />

        </>
    )
}

export default Creat
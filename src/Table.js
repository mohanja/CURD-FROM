import React from "react";

const Table = ({ data, hadnelDelete, handelEdit }) => {

    return (
        <>
            <table className="table ">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((val) =>
                            <tr class="table-danger" key={val.id}>
                                <th scope="row">{val.id}</th>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.salary}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handelEdit(val)}>edit</button>
                                    <button className="btn btn-danger" onClick={() => hadnelDelete(val.id)}>delete</button>
                                </td>
                            </tr>)
                    ) : (
                        <tr>
                             <th scope="row">#</th>
                                <td>No Data</td>
                                <td>No Data</td>
                                <td>No Data</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() =>( alert("Add Data"))}>edit</button>
                                    <button className="btn btn-danger" onClick={() => (alert("Add Data"))}>delete</button>
                                </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table
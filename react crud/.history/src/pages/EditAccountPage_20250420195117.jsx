import React from 'react'
import { useOutletContext } from 'react-router-dom'

function EditAccountPage() {

    const [accounts, setAccounts] = useOutletContext();
    return (
        <div className='container'>
            <h1>
                Delete and Edit
            </h1>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {accounts.map(acc => {
                                return (
                                    <tr key={acc.id}>
                                        <th>{acc.ime}</th>
                                        <th>{acc.emai}</th>
                                        <th>{acc.phone}</th>
                                        <th>{acc.city}</th>
                                        <th>
                                            <button className='ms-[10px]'>Delete</button>
                                            <button>Edit</button>
                                        </th>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EditAccountPage
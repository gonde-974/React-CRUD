import React from 'react'
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom'

function EditAccountPage() {

    const [accounts, setAccounts] = useOutletContext();

    const deleteAccount = currentId => {
        setAccounts(prevAccounts => {
            console.log(prevAccounts);

            return prevAccounts.filter(el => el.id != currentId)
        })
    }
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
                                        <td>{acc.ime}</td>
                                        <td>{acc.emai}</td>
                                        <td>{acc.phone}</td>
                                        <td>{acc.city}</td>
                                        <td>
                                            <button onClick={() => deleteAccount(acc.id)}>Delete</button>
                                            <Link to="/editOone" state={{ id: acc.id }} className='ms-3'>Edit</Link>
                                        </td>

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
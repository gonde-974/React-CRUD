import React from 'react'
import { useOutletContext } from 'react-router-dom'

function AccountsPage() {
    const [accounts] = useOutletContext()


    return (
        <div className='container'>
            <h1>
                All Accounts
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

export default AccountsPage
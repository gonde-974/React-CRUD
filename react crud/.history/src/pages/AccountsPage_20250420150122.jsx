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
                    <table className='table'></table>
                </div>
            </div>
        </div>
    )
}

export default AccountsPage
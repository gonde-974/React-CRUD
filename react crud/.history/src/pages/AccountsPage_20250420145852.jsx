import React from 'react'
import { useOutletContext } from 'react-router-dom'

function AccountsPage() {
    const [accounts] = useOutletContext()
    return (
        <div></div>
    )
}

export default AccountsPage
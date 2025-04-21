import React, { useState } from 'react'
import MainNavbarComponent from '../components/MainNavbarComponent'
import { Outlet } from 'react-router-dom'
import fake_data from '../fake_data.json'

function MainLayout() {

    const [accounts, setAccounts] = useState(fake_data)
    console.log(accounts);

    return (
        <div>
            <MainNavbarComponent />
            <Outlet context={[accounts, setAccounts]} />
        </div>
    )
}

export default MainLayout
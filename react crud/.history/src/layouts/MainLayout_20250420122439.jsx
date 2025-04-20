import React from 'react'
import MainNavbarComponent from '../components/MainNavbarComponent'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <MainNavbarComponent />
            <Outlet />
        </div>
    )
}

export default MainLayout
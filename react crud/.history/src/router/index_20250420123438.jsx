import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AccountsPage from "../pages/AccountsPage";
import AddAcountPage from "../pages/AddAcountPage";
import EditAccountPage from "../pages/EditAccountPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/", element: <AccountsPage />

            },
            {
                path: "add",
                element: <AddAcountPage />
            },
            {
                path: "edit",
                element: <EditAccountPage />
            }
        ]
    }
])

export default router;
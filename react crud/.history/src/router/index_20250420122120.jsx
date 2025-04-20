import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/", element: <h1>Accounts Page</h1>

            },
            {
                path: "add",
                element: <h1>Add Accounts Page</h1>
            },
            {
                path: "edit",
                element: <h1>Edit page</h1>
            }
        ]
    }
])

export default router;
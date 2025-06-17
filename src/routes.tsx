import {createBrowserRouter} from "react-router-dom";
import Resources from "./pages/Resources.tsx";
import Layout from "./components/Layout.tsx";
import Events from "./pages/Events.tsx";
import Notifications from "./pages/Notifications.tsx";

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {index: true, element: <Resources/>},
        {path: "/events", element: <Events/>},
        {path: "/notifications", element: <Notifications/>}
    ],
}])

export default router;
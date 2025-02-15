import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestReview from "./routes/testreview/page";
import { ThemeProvider } from "@/contexts/theme-context";
import Analytics from "./routes/analytics/page"
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Courses from "@/routes/courses/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "analytics",
                    element: <Analytics/>,
                },
                {
                    path: "reports",
                    element: <TestReview/>,
                },
                {
                    path: "courses",
                    element: <Courses/>,
                },
                {
                    path: "new-customer",
                    element: <h1 className="title">Upcoming Courses</h1>,
                },
                {
                    path: "verified-customers",
                    element: <h1 className="title">Past Courses</h1>,
                },
                {
                    path: "products",
                    element: <h1 className="title">Products</h1>,
                },
                {
                    path: "new-product",
                    element: <h1 className="title">New Product</h1>,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;

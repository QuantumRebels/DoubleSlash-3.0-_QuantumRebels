import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestReview from "./routes/testreview/page";
import { ThemeProvider } from "@/contexts/theme-context";
import Analytics from "./routes/analytics/page"
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Courses from "@/routes/courses/page";
import Alphabets from './routes/courses/alpabets/alphabets'
import Numbers from './routes/courses/numbers/numbers'
import Maths from './routes/courses/maths/page'
import DailySigns from './routes/courses/daily/page'
import Science from './routes/courses/scinece/page'
import CreateCourse from './routes/courses/create/page'
import PastCourses from "./routes/courses/pastcourses/page";
import QuizPage from "./routes/quizes/page";
import AlphabetQuiz from './routes/quizes/alphabetsquiz'
import NumberQuiz from './routes/quizes/numbers'
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
                    element: <Courses />, 
    
                },
                {
                    path: `courses/:id`,
                    element: <Alphabets />, 
    
                },
                {
                    path: "courses/numbers",
                    element: <Numbers />, 
    
                },
                {
                    path: "courses/maths",
                    element: <Maths />, 
    
                },
                {
                    path: "courses/science",
                    element: <Science/>, 
    
                },
                {
                    path: "courses/dailysigns",
                    element: <DailySigns />, 
    
                },
                {
                    path: "create-courses",
                    element: <CreateCourse/>,
                },
                {
                    path: "past-courses",
                    element: <PastCourses/>,
                },
                {
                    path: "quizes",
                    element: <QuizPage/>,
                },
                {
                    path: "quizes/alphabets",
                    element: <AlphabetQuiz/>,
                },
                {
                    path: "quizes/numbers",
                    element: <NumberQuiz/>,
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

import { ChartColumn, BookUser ,  ShieldEllipsis ,  BookmarkPlus ,Home, BookmarkCheck , NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users , User } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: " Student Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Test Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Courses",
        links: [
            {
                label: "Courses",
                icon:  BookUser,
                path: "/courses",
            },
            {
                label: "Create Courses",
                icon: BookmarkPlus,
                path: "/create-courses",
            },
            {
                label: "Past Courses",
                icon: BookmarkCheck ,
                path: "/past-courses",
            },
        ],
    },
    {
        title: "Take Tests",
        links: [
            {
                label: "Quizes",
                icon: BookUser,
                path: "/quizes",
            },
           
            
        ],
    },
    {
        title: "Profile",
        links: [
            {
                label: "Profile",
                icon: User,
                path: "/profile",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Sun",
        questions: 15,
     
    },
    {
        name: "Mon",
        questions: 15,

    },
    {
        name: "Tues",
        questions: 10,
   
    },
    {
        name: "Wed",
        questions: 12,

    },
    {
        name: "Thurs",
        questions: 20,

    },
    {
        name: "Fri",
        questions: 10,

    },
    {
        name: "Sat",
        questions: 25,
    
    },
    
];
export const AnalyticsData = [
    {
        name: "Jan",
        score: 8.2,
     
    },
    {
        name: "Feb",
        score: 6.2,

    },
    {
        name: "March",
        score: 6.7,
   
    },
    {
        name: "April",
        score: 8.9,

    },
    {
        name: "May",
        score: 7.4,

    },
    {
        name: "June",
        score: 10,

    },
    {
        name: "July",
        score: 5.3,
    
    },
    {
        name: "Aug",
        score: 3.2,
    
    },
    {
        name: "Sept",
        score: 7,
    
    },
    {
        name: "Oct",
        score: 5,
    
    },
    {
        name: "Nov",
        score: 9,
    
    },
    {
        name: "Dec",
        score: 7,
    
    },
    
];

export const recentSalesData = [
    {
        id: 1,
        name: "Weekly Quiz Results Out",
        email: "Check out your Score and your place in the Leaderboard",
        image: ProfileImage,
     
    },
    {
        id: 2,
        name: "Module 2 of ISL Maths Uploaded",
        email: "Read the Modules and make notes",
        image: ProfileImage,
     
    },
    {
        id: 3,
        name: "Upcoming Lecture in On ISL Alphabets",
        email: "Complete all the ISL Signs before reading this module",
        image: ProfileImage,
     
    },
    {
        id: 4,
        name: "Bi-Weekly Quiz Results Out",
        email: "Check out your Score and your place in the Leaderboard",
        image: ProfileImage,
     
    },
    {
        id: 5,
        name: "Weekly Quiz Results Out",
        email: "Check out your Score and your place in the Leaderboard",
        image: ProfileImage,
     
    },
    
];

export const topProducts = [
    {
        number: 1,
        name: "ISL Signs",
        image: ProductImage,
        description : " Learn about ISL Signs" ,
        price: "Free",
        status: "Completed",
        rating: 4.5,
    },
    {
        number: 2,
        name: "ISL Alphabets",
        image: ProductImage,
        description : " Learn about ISL Alphabets" ,
        price: "Free",
        status: "Pending",
        rating: 4.7,
    },
    {
        number: 3,
        name: "ISL Numbers",
        image: ProductImage,
        description : " Learn about ISL Numbers" ,
        price:"Free",
        status: "Completed",
        rating: 4.8,
    },
    {
        number: 4,
        name:" ISL Maths and Science",
        image: ProductImage,
        description : " Learn about ISL Maths and Science" ,
        price: "Free",
        status: "Pending",
        rating: 4.4,
    },
    
];

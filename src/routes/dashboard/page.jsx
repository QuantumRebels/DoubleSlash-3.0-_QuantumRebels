import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useTheme } from "@/hooks/use-theme";

import { overviewData, recentSalesData, topProducts } from "@/constants";

import { Footer } from "@/layouts/footer";

import { CreditCard, DollarSign, Package, PencilLine,  Star, Trash, ShieldCheck, TrendingUp, Users  , BookUser} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
    const { theme } = useTheme();
    const {t} = useTranslation();
    const [completedModules, setcompletedModules] = useState([])
    const userId='2ae7e645-fd38-42e6-bdf5-cce56a124e5e'
    const [modules, setmodules] = useState([])
  
    const fecthcompltedmodules=async()=>{
      await axios.get(`${import.meta.env.VITE_DEV_URL}study/completedmoduless`)
      .then(res=>{
        // console.log(res.data)  
        setcompletedModules(res.data.data)
      })
    }
    
    const fetchmodules=async()=>{
      await axios.get(`${import.meta.env.VITE_DEV_URL}study/getmodules`)
      .then(res=>{
        console.log(res.data)  
        setmodules(res.data.data)
      })
    }
    useEffect(()=>{
      fecthcompltedmodules()
      fetchmodules()
    },[])
  
    const filteredmodules=completedModules.filter((mod)=>(mod.userId===userId)) 
    console.log(filteredmodules)
  
    const moduleIds = filteredmodules.map((mod) => mod.moduleId);
  
    const matchedModules = modules.filter((mod) => moduleIds.includes(mod.id));
    console.log(matchedModules)


    return (
        <div className="flex flex-col gap-y-4">

            <h1 className="title">{t('Dashboard')}</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">

                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <ShieldCheck size={26} />
                        </div>
                        <p className="card-title">{t('Total Modules Completed')}</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-4xl font-bold text-slate-900 transition-colors dark:text-slate-50 ml-2">{matchedModules.length}</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            75%
                        </span>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <BookUser size={26} />
                        </div>
                        <p className="card-title">{t('Total Quizzes Attempted')}</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-4xl ml-2 font-bold text-slate-900 transition-colors dark:text-slate-50">2</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            12%
                        </span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <BookUser size={26} />
                        </div>
                        <p className="card-title">{t('Total Questions Solved')}</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">50</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            15%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <CreditCard size={26} />
                        </div>
                        <p className="card-title">{t('Total Active Hours')}</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">45</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            79%
                        </span>
                    </div>
                </div>

                
                

            </div>
            <div className="mb-8 mt-4">
                <div className="card col-span-1 md:col-span-2 lg:col-span-4 w-full">
                    <div className="card-header">
                        <p className="card-title">{t('Overview of Questions Solved in a Week')}</p>
                    </div>
                    <div className="card-body p-0 w-full">
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >
                            <AreaChart
                                data={overviewData}
                                margin={{
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorTotal"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="#2563eb"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#2563eb"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <Tooltip
                                    cursor={false}
                                    formatter={(value) => `${value}`}
                                />

                                <XAxis
                                    dataKey="name"
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickMargin={6}
                                />
                                <YAxis
                                    dataKey="questions"
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickFormatter={(value) => `${value}`}
                                    tickMargin={6}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="questions"
                                    stroke="#2563eb"
                                    fillOpacity={1}
                                    fill="url(#colorTotal)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">{t('Top Courses')}</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">{t('Id')}</th>
                                    <th className="table-head">{t('Course')}</th>
                                    <th className="table-head">{t('Couse Type')}</th>
                                    <th className="table-head">{t('Status')}</th>
                                    <th className="table-head">{t('Rating')}</th>
                                    <th className="table-head">{t('Actions')}</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {modules.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{"=>"}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.moduleimg}
                                                    alt={product.title}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p>{product.title}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">{product.moduleprice}</td>
                                        <td className="table-cell">{matchedModules?(<span>{t('Completed')}</span>):(<span>{t('Pending')}</span>)}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-2">
                                                <Star
                                                    size={18}
                                                    className="fill-yellow-600 stroke-yellow-600"
                                                />
                                                {product.rating}
                                            </div>
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button className="text-red-500">
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;

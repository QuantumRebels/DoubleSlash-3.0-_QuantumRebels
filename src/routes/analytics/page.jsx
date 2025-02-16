import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "@/hooks/use-theme";
import { AnalyticsData } from "@/constants";
import ProfileImage from '../../assets/SaptaDev27.jpg'
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, ShieldCheck, TrendingUp, Users, BookUser } from "lucide-react";

const Analytics = () => {
  const { theme } = useTheme();



  return (
    <div className="flex flex-col flex-wrap w-full">
      <div className="flex flex-row justify-between">
        <div className="avatar w-[25%] flex flex-col justify-center align-middle ">
          <div className="ring-primary flex ml-12  mt-4 ring-offset-base-100 w-48 rounded-full ring ring-offset-2">
            <img className="w-48 h-48  object-fill  rounded-full" src={ProfileImage} />
          </div>
          <div className="text-center mt-6 ">
            <h2 className="text-2xl font-bold dark:text-blue-500">Saptarshi Paul</h2>
            

          </div>
        </div>
        
       
       
      </div>
      <div className="card col-span-1 md:col-span-2 lg:col-span-4   w-full mt-12">
        <div className="card-header">
          <p className="card-title text-2xl">Performance Analytics of the Entire Year</p>
        </div>
        <div className="card-body p-0">
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <AreaChart
              data={AnalyticsData}
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
                dataKey="score"
                strokeWidth={0}
                stroke={theme === "light" ? "#475569" : "#94a3b8"}
                tickFormatter={(value) => `${value}`}
                tickMargin={6}
              />

              <Area
                type="monotone"
                dataKey="score"
                stroke="#2563eb"
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>


    </div>
  );

}

export default Analytics
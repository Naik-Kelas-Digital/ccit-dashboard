// components/MonthlyAverageIncome.tsx
"use client";

import React, { useState, useEffect } from "react";

const MonthlyAverageIncome: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const maxHeight = 100; 
    return (
        <div className="p-8 bg-white rounded-lg shadow flex justify-between items-center">
            <div className="w-3/5">
                <h2 className="text-xl font-bold mb-4">Monthly Average Income</h2>
                <div className="flex justify-between mb-4">
                    <span className="text-blue-500">Income</span>
                    <span className="text-blue-100">Outcome</span>
                </div>
                <div className="flex justify-between items-end h-40">
                    {data.monthlyData.map((monthData: any, index: number) => (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className="bg-blue-500 w-4 rounded-t"
                                style={{ height: `${(monthData.income / 100) * maxHeight}px` }}
                            ></div>
                            <div
                                className="bg-teal-500 w-4 rounded-b mt-1"
                                style={{ height: `${(monthData.outcome / 100) * maxHeight}px` }}
                            ></div>
                            <span className="mt-2 text-sm">{monthData.month}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-2/5 text-center">
                <h2 className="text-xl font-bold mb-4">Earning</h2>
                <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-500"
                         style={{ transform: `rotate(${data.earningPercentage * 1.8}deg)` }}></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-teal-500 rotate-45"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-white transform rotate-90"></div>
                    <div className="flex items-center justify-center w-full h-full text-2xl font-bold">
                        {data.earningPercentage}%
                    </div>
                </div>
                <p className="mt-4 font-bold">Total: ${data.totalEarnings.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default MonthlyAverageIncome;

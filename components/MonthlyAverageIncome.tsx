import React from "react";

const MonthlyAverageIncome: React.FC = () => {
    return (
        <div className="p-8 bg-white rounded-lg shadow flex justify-between items-center">
            <div className="w-3/5">
                <h2 className="text-xl font-bold mb-4">Monthly Average Income</h2>
                <div className="flex justify-between mb-4">
                    <span className="text-blue-500">Income</span>
                    <span className="text-blue-100">Outcome</span>
                </div>
                <div className="flex justify-between items-end h-40">
                    {/* Placeholder for bar chart */}
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-500 h-24 w-4 rounded-t"></div>
                        <div className="bg-teal-500 h-16 w-4 rounded-b mt-1"></div>
                        <span className="mt-2 text-sm">Jan</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-500 h-28 w-4 rounded-t"></div>
                        <div className="bg-teal-500 h-12 w-4 rounded-b mt-1"></div>
                        <span className="mt-2 text-sm">Feb</span>
                    </div>
                    {/* Tambahkan elemen lainnya dengan cara yang sama */}
                </div>
            </div>
            <div className="w-2/5 text-center">
                <h2 className="text-xl font-bold mb-4">Earning</h2>
                <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-500"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-teal-500 rotate-45"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-white transform rotate-90"></div>
                    <div className="flex items-center justify-center w-full h-full text-2xl font-bold">74%</div>
                </div>
                <p className="mt-4 font-bold">Total: $12,488.99</p>
            </div>
        </div>
    );
};

export default MonthlyAverageIncome;
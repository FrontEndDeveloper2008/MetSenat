import React from "react";
import {
    Tooltip,
    Legend,
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";
import { SecondaryHeader } from "../../components/secondaryHeader";

const data = [
    {
        name: "yanvar",
        countSponsors: 100,
        countStudents: 1000,
    },
    {
        name: "fevral",
        countSponsors: 100,
        countStudents: 2000,
    },
    {
        name: "mart",
        countSponsors: 1000,
        countStudents: 3000,
    },
    {
        name: "aprel",
        countSponsors: 3000,
        countStudents: 2000,
    },
    {
        name: "may",
        countSponsors: 2500,
        countStudents: 1200,
    },
    {
        name: "iyun",
        countSponsors: 1450,
        countStudents: 2750,
    },
    {
        name: "iyul",
        countSponsors: 2000,
        countStudents: 2500,
    },
    {
        name: "avgust",
        countSponsors: 1000,
        countStudents: 1000,
    },
    {
        name: "sentabr",
        countSponsors: 2200,
        countStudents: 1000,
    },
    {
        name: "oktabr",
        countSponsors: 1000,
        countStudents: 500,
    },
    {
        name: "noyabr",
        countSponsors: 1400,
        countStudents: 2100,
    },
    {
        name: "dekabr",
        countSponsors: 2700,
        countStudents: 1000,
    },
];
export const Dashboard = () => {
    return (
        <>
            <SecondaryHeader tab="dashboard" />
            <div className="bg-gray-200 flex justify-center min-h-[84vh]">
                <div className="w-full max-w-screen-xl p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[1, 2, 3].map((_, index) => (
                            <div
                                key={index}
                                className="p-4 sm:p-6 space-y-4 sm:space-y-0 flex-shrink-0 rounded-lg border bg-white border-gray-300"
                            >
                                1,232,1000 som
                            </div>
                        ))}
                    </div>

                    <LineChart
                        className="mx-auto mt-8 bg-white"
                        width={1220}
                        height={500}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 3000]} ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]} />

                        <Tooltip />
                        <Legend />

                        <Line
                            type="monotone"
                            dataKey="countSponsors"
                            stroke="#4C6FFF"
                            strokeWidth={3}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="countStudents"
                            stroke="#FF92AE"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </div>
            </div>
        </>
    );
};
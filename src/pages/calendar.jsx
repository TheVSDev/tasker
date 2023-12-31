// Imports
import dayjs from "dayjs";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import styles from "@/web/styles/Home.module.css"
import { generateDate, months } from "@/web/components/Calendar/calendar";
import cn from "@/web/components/Calendar/cn";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import HeadPage from "@/web/components/HeadPage";
import Sidebar from "@/web/components/Sidebar";

// CalendarPage function
export default function CalendarPage() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <div className="bg-white rounded-md p-5 mt-28 flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto h-[500px] items-center sm:flex-row flex-col">
          <div className="w-96 h-96 ">
            <div className="flex justify-between items-center">
              <h1 className="select-none font-semibold">
                {months[today.month()]}, {today.year()}
              </h1>
              <div className="flex gap-10 items-center ">
                <GrFormPrevious
                  className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                  onClick={() => {
                    setToday(today.month(today.month() - 1));
                  }}
                />
                <h1
                  className=" cursor-pointer hover:scale-105 transition-all"
                  onClick={() => {
                    setToday(currentDate);
                  }}
                >
                  Today
                </h1>
                <GrFormNext
                  className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                  onClick={() => {
                    setToday(today.month(today.month() + 1));
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-7 ">
              {days.map((day, index) => {
                return (
                  <h1
                    key={index}
                    className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                  >
                    {day}
                  </h1>
                );
              })}
            </div>

            <div className=" grid grid-cols-7 ">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  return (
                    <div
                      key={index}
                      className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                    >
                      <h1
                        className={cn(
                          currentMonth ? "" : "text-gray-400",
                          today ? "bg-[#28c989] text-white" : "",
                          selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                            ? "bg-[#6a8bb8] text-white"
                            : "",
                          "h-10 w-10 rounded-full grid place-content-center hover:bg-[#6a8bb8] hover:text-white transition-all cursor-pointer select-none"
                        )}
                        onClick={() => {
                          setSelectDate(date);
                        }}
                      >
                        {date.date()}
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="h-96 w-96 sm:px-5">
            <h1 className="font-semibold">
              {selectDate.toDate().toDateString()}
            </h1>
          </div>
          <button className={styles.btnAdd}>+</button>
        </div>
      </Main>
      <Footer />
    </>
  );
}

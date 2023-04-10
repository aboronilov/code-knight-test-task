import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

type Props = {};

const Clock = (props: Props) => {
  const initialState = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  };
  const [time, setTime] = useState(initialState);
  const [pm, setPm] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const fetchTime = async () => {
        let { data } = await axios.get(
          "https://worldtimeapi.org/api/timezone/Europe/Moscow"
        );

        let dateTime = new Date(data.datetime);
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();

        if (data.hour >= 12) {
          setPm(true);
          hours = hours - 12;
        } else {
          setPm(false);
        }

        setTime({
          hours: hours ? hours : 12,
          minutes,
          seconds,
        });
      };
      fetchTime();
    }, 1000);
  }, []);

  const DynamicClockCircle = dynamic(() => import("./ClockCircle"), {
    ssr: false,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-10 font-semibold text-3xl text-slate-700">
        Dynamic clock
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col sm:flex-row">
          <DynamicClockCircle
            color="text-[#11CAFD]"
            percentage={time.hours}
            hour
          />
          <DynamicClockCircle
            color="text-[#3F8EF7]"
            percentage={time.minutes}
          />
          <DynamicClockCircle
            color="text-[#5B6EF7]"
            percentage={time.seconds}
          />
        </div>
        <div className="">
          <div className={`font-bold ${pm ? "opacity-10" : ""}`}>AM</div>
          <div className={`font-bold ${pm ? "" : "opacity-10"}`}>PM</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;

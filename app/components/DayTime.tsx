import React,{useState,useEffect} from 'react'

export default function DayTime() {
      const [currentDate, setCurrentDate] = useState(new Date());

      useEffect(() => {
        // Update the current date every second
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);

        return () => {
          // Clean up the interval when the component unmounts
          clearInterval(intervalId);
        };
      }, []);

      // Define the days of the week and months
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const day = daysOfWeek[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const date = currentDate.getDate();
      const year = currentDate.getFullYear();
  return (
    <div>
      <div className="flex justify-end items-center gap-[1px] mt-2 ">
        <h5 className='text-white text-sm'>{day}</h5>
        <h6 className="text-[10px] text-white">{`${month} ${date} ${year}`}</h6>
      </div>
    </div>
  );
}

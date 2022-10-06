import React from 'react';
import "./Schedule.css";
import "../home/Data";
import ScheduleItem from "./ScheduleItem";
import ScheduleDate from "./ScheduleDate";
// import ScheduleTakeover from "./ScheduleTakeover";

const Schedule = () => {
    return (
        <div className="schedule-container" id="schedule">
            <h1 className="schedule-title">SCHEDULE</h1>
            {/* <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 06.10"
                />
                    <ScheduleItem
                        showTime="18:00"
                        showName= "Herbal Tea w/ George D"
                    />
                    <ScheduleItem
                        showTime="19:00"
                        showName="Izzy Iz"
                    />
                    <ScheduleItem
                        showTime="20:00"
                        showName="DJ Simcard b2b Harry Amstel"
                    />
                    <ScheduleItem
                        showTime="21:00"
                        showName= "GINA"
                    />
            </table> */}
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 06.10"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName= "Herbal Tea"
                        />
                        <ScheduleItem
                            showTime="19:00"
                            showName="Izzy Iz"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="Harry Amstel & DJ Simcard"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName= "GINA"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 08.10"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Yuqq"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="Felicia Buena"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="hats"  
                />
                <ScheduleItem
                    showTime="21:00"
                    showName="Alone In The Attic"
                />
            </table>
        </div>
    )
}

export default Schedule;
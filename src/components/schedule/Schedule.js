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
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 21st April"
                />
                <ScheduleItem
                    showTime="18:00 - 20:00"
                    showName="MIRE"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Relax and Bake FM"  
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 22nd April"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="DJ Project Manager"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName="Wobbegong"
                    />
                    <ScheduleItem
                        showTime="21:00 - 22:00"
                        showName= "Guessef"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 22nd April"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Sav"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Charlie B"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Halfs"  
                />
            </table>
        </div>
    )
}

export default Schedule;
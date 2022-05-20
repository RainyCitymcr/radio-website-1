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
                    showDate="Thursday 19th May"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="MIRE"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Relax and Bake FM"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Trash Bandicoot"    
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 20th May"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="DJ Project Manager"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName="Combi Completa"
                    />
                    <ScheduleItem
                        showTime="21:00 - 22:00"
                        showName= "Dan Traynor"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 14th May"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Charlie B presents: Tram Man"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Harry Amstel b2b DJ Simcard"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Flushed Aay w/ Dom Thompson"  
                // />
                // <ScheduleItem
                //     showTime="21:00 - 22:00"
                //     showName="Miss Bad B"  
                />
            </table>
        </div>
    )
}

export default Schedule;
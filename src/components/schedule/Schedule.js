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
                    showDate="Thursday 16th June"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Flytipper"
                />
                <ScheduleItem
                    showTime="18:00 - 20:00"
                    showName="MIRE"
                // />
                // <ScheduleItem
                //     showTime="20:00 - 21:00"
                //     showName="Trash Bandicoot"    
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 17th June"
                    />
                    <ScheduleItem
                        showTime="18:00"
                        showName= "Miss Bad B"
                    />
                    <ScheduleItem
                        showTime="19:00"
                        showName="DJ Project Manager"
                    />
                    <ScheduleItem
                        showTime="20:00"
                        showName="CHARMS"
                    />
                    <ScheduleItem
                        showTime="21:00"
                        showName= "This Guy"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 18th June"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="Charlie B"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="Bambi & Thumper"
                // />
                // <ScheduleItem
                //     showTime="21:00"
                //     showName="Flushed Away w/ Dom Thompson"  
                // />
                // <ScheduleItem
                //     showTime="21:00"
                //     showName="Miss Bad B"  
                />
            </table>
        </div>
    )
}

export default Schedule;
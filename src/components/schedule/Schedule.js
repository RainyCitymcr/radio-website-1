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
                    showDate="Thursday 12th May"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Line:156"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Earl Gre"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Ship Sket w/ Tee"    
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="bicho raro"    
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 13th May"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="High Voltage"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName="Alfaz"
                    />
                    <ScheduleItem
                        showTime="21:00 - 22:00"
                        showName= "Belladonna Bitch Fist"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 14th May"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Felicia Buena"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Liil Bits"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Lady Marmaduke & Lintd"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Miss Bad B"  
                />
            </table>
        </div>
    )
}

export default Schedule;
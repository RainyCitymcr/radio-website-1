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
                    showDate="Wednesday 16.11"
                />
                    <ScheduleItem
                        showTime="18:00"
                        showName= "Into the Mists - Joy Ingle"
                    />
                    <ScheduleItem
                        showTime="19:00"
                        showName="P45 Show w/ Ekkinz"
                    />
                    <ScheduleItem
                        showTime="20:00"
                        showName="Jerome Presents...Madness"
                    />
                    <ScheduleItem
                        showTime="21:00"
                        showName= "Lindrum b2b aDeAd"
                    />
            </table> */}
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 09.02"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName="pot luck w/ aisling"
                        />
                        <ScheduleItem
                            showTime="19:00"
                            showName="Earl Grey"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="YANG"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName= "Last Minute Film Club w/ Slime Presents"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 10.02"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Teaching Assistant"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="MC LOVE PRESENTS: DEAF LOOP"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="cabby"  
                />
                <ScheduleItem
                    showTime="21:00"
                    showName="alfaz"
                />
            </table>
        </div>
    )
}

export default Schedule;
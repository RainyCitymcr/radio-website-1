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
                    showDate="Thursday 08.12"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName="Poison Ivy"
                        />
                        <ScheduleItem
                            showTime="19:00"
                            showName="Earl Grey"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="FLames Disperse"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName= "Aiku"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 09.12"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Marshall Lawrence"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="MC LOVE"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="alfaz"  
                />
                <ScheduleItem
                    showTime="21:00"
                    showName="Charlie B"
                />
            </table>
        </div>
    )
}

export default Schedule;
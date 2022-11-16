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
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 17.11"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName="Mire"
                        />
                        {/* <ScheduleItem
                            showTime="19:00"
                            showName="Izzy Iz"
                        /> */}
                        <ScheduleItem
                            showTime="20:00"
                            showName="Relax and Bake FM"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName= "Liil Bits presents Apricity feat. Jake Martin"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 17.11"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="lloydfears w/ Ship Sket"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="DJ Project Manager"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="MBB"  
                />
                <ScheduleItem
                    showTime="21:00"
                    showName="Elsa / Unearth"
                />
            </table>
        </div>
    )
}

export default Schedule;
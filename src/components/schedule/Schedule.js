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
                    showDate="Wednesday 15th March"
                />
                    <ScheduleItem
                        showTime="18:00"
                        showName= "Rapatop Radio Tour w/ DJ Luh (Hollow Points Radio)"
                    />
                    <ScheduleItem
                        showTime="19:00"
                        showName="P45 SHOW w/ SOZA"
                    />
                    <ScheduleItem
                        showTime="20:00"
                        showName="Lindrum"
                    />
                    {/* <ScheduleItem
                        showTime="21:00"
                        showName= "Lindrum b2b aDeAd"
                    /> */}
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 16th March"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName="MIRE"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="Last Minute Film Club with Alex"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName="Tazz"
                        // />
                        // <ScheduleItem
                        //     showTime="21:00"
                        //     showName="cabby & SFM: belated bonfire b2b"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 17th March"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="CELIUS"
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
                    showName="Unearth St. Patrick's Day Special / with ex.sess and Elsa"
                />
            </table>
        </div>
    )
}

export default Schedule;
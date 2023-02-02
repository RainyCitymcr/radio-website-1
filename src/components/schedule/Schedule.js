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
                    showDate="Thursday 02.03"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName="GINA"
                        />
                        <ScheduleItem
                            showTime="19:00"
                            showName="Izzy Iz"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="herbal tea w/ george d"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName= "Gueisen"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 03.03"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Home listening w/ Natalia"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="Yuqq"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="High Voltage w/ Xariella"  
                />
                <ScheduleItem
                    showTime="21:00"
                    showName="Alone in the Attic"
                />
            </table>
        </div>
    )
}

export default Schedule;
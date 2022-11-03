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
                    showDate="Wednesday 19.10"
                />
                    <ScheduleItem
                        showTime="18:00"
                        showName= "Into the Mists - Joy Ingle"
                    />
                    <ScheduleItem
                        showTime="19:00"
                        showName="menzurrr"
                    />
                    <ScheduleItem
                        showTime="20:00"
                        showName="Jerome Presents..."
                    />
                    <ScheduleItem
                        showTime="21:00"
                        showName= "Lindrum"
                    />
            </table> */}
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 03.11"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName="The Fat Britney"
                        />
                        <ScheduleItem
                            showTime="19:00"
                            showName="Izzy Iz"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="Teaching Assistant"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName= "Herbal Tea w/ George d"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 04.11"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Yuqq"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="Access Memory"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="Static Interlude"  
                />
                <ScheduleItem
                    showTime="21:00"
                    showName="Rose A 4eva"
                />
            </table>
        </div>
    )
}

export default Schedule;
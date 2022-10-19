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
                    showDate="Thursday 20.10"
                    />
                        <ScheduleItem
                            showTime="18:00"
                            showName="Mire"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="RELAX AND BAKE FM"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName="Gills"
                        // />
                        // <ScheduleItem
                        //     showTime="21:00"
                        //     showName= "GINA"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 21.10"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Jess Rose"
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
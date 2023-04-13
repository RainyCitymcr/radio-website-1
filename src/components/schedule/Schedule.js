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
                        showTime="17:00"
                        showName= "Paul East pres. Disconnection"
                    />
                    <ScheduleItem
                        showTime="18:00"
                        showName= "Internet Culture by @takenbymarshall"
                    />
                    <ScheduleItem
                        showTime="19:00"
                        showName="wilfred "
                    />
                    <ScheduleItem
                        showTime="20:00"
                        showName="Felicia Buena"
                    />
                    <ScheduleItem
                        showTime="21:00"
                        showName= "Last Minute Film Club with Queenie"
                    />
            </table>
            {/* <table className="schedule-table">
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
            </table> */}
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 17th March"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Jase Jeffery"
                />
                <ScheduleItem
                    showTime="19:00"
                    showName="More Gain"
                />
                <ScheduleItem
                    showTime="20:00"
                    showName="Dan Traynor "  
                />
                <ScheduleItem
                    showTime="21:00"
                    showName="cabby w/ VIRAL.019"
                />
            </table>
        </div>
    )
}

export default Schedule;
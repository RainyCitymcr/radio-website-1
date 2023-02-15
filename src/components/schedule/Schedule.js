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
                    showDate="Wednesday 15.02"
                    />
                        <ScheduleItem
                            showTime="17:00"
                            showName="ADOMASLP"
                        />
                        <ScheduleItem
                            showTime="18:00"
                            showName="Disconnection with Paul East"
                        />
                        <ScheduleItem
                            showTime="19:00"
                            showName="Soood / Blue PT. 2: Manic"
                        />
                        <ScheduleItem
                            showTime="20:00"
                            showName="Jader Toya - Truck Cantine"
                        />
                        <ScheduleItem
                            showTime="21:00"
                            showName= "Lindrum"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 16.02"
                />
                <ScheduleItem
                    showTime="18:00"
                    showName="Osler"
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
                    showName="UNEARTH / ELSA"
                />
            </table>
        </div>
    )
}

export default Schedule;

import { useState } from "react";
import './DayNight.css';

const DayNight = () => {

    const [daynight, setDayNight] = useState("Day");

    const fnChangeDayNight = () => {
        if (daynight == "Day") {
            setDayNight("Night");
            document.getElementsByTagName('button')[0].innerHTML = 'Change to ' + daynight;
            document.getElementsByTagName('h1')[0].innerHTML = daynight;
            document.getElementsByClassName('clsDivDayNight')[0].style.backgroundColor = '#000';
            document.getElementsByTagName('h1')[0].style.color = '#fff';

        } if (daynight == "Night") {
            setDayNight("Day");
            document.getElementsByTagName('button')[0].innerHTML = 'Change to ' + daynight;
            document.getElementsByTagName('h1')[0].innerHTML = daynight;
            document.getElementsByClassName('clsDivDayNight')[0].style.backgroundColor = '#fff';
            document.getElementsByTagName('h1')[0].style.color = '#000';
        }
    }

    return (
        <div className="clsDivDayNight">
            <h1>{daynight}</h1>
            <button onClick={fnChangeDayNight}>Change to Night</button>
        </div>
    )

}

export default DayNight;
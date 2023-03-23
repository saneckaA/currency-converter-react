import { useCurrentDate } from "../Clock/useCurrentDate"
import { Hour, Date } from "./styled";

const MediaClock = () => {
    const date = useCurrentDate();

    return (
        <div>
             <Hour>
                {date.toLocaleTimeString(undefined, {
                     hour: "2-digit",
                     minute: "2-digit",
                     second: "2-digit",
                })}
            </Hour>
            <Date>
                {date.toLocaleDateString(undefined, {

                    day: "numeric",
                    month: "long",
                    year: "numeric",
                   
                })}
            </Date>
           
        </div>
    )
};

export default MediaClock;
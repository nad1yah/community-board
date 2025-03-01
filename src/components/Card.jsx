import React from "react";

const Calendar = (props) => {
    return (
        <div className="Card">
            <img src={props.image}></img>
            <div className="bottom-text">
                <h2>{props.title}</h2>
                <h3>{props.category}</h3>
                <button>View Menu</button>
            </div>
        </div>
    )
}
export default Calendar;
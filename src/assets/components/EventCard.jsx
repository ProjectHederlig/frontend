import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="event-card-horizontal">
      <div className="event-image">        
      </div>
      <div className="event-main">
        <h1 className="event-title">{event.titel}</h1>
        <p className="event-description">{event.description}</p>
      </div>
      <div className="event-details">
        <p>{event.location}</p>
        <p>
          {new Date(event.startDate).toLocaleDateString("sv-SE")} –{" "}
          {new Date(event.endDate).toLocaleDateString("sv-SE")}
        </p>
      </div>

      <div className="event-price-tag">
       {event.price}
      </div>
    </div>
  );
};
export default EventCard;

// src/components/EventList.js
import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="flex justify-around flex-wrap">
      {events.map((event) => (
        <div key={event.id} className="max-w-xs mx-2 my-4">
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            {event.imageURL && (
              <figure>
                <img
                  src={event.imageURL}
                  alt={event.title}
                  className="object-cover w-full h-40 rounded-t-md"
                />
              </figure>
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-500 mb-2">{event.location}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;


import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

const App = () => {
  
  const initialEvents = JSON.parse(localStorage.getItem('events')) || [];
  const [events, setEvents] = useState(initialEvents);

  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/events.json');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    
    if (initialEvents.length === 0) {
      fetchEvents();
    }
  }, [initialEvents]);

  
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    
    const newEvent = { ...event, id: Date.now() };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1655841439659-0afc60676b70?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Empowering Your Events</h1>
            <p className="mb-5">Discover and share meaningful experiences. Create and join events in your community.</p>
            
          </div>
        </div>
      </div>
  
      {/* Event Section */}
      <div className="App">
        <EventForm onAddEvent={addEvent} />
        <div className="max-w-2xl mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4 p-2">Event List</h2>
          <EventList events={events} />
        </div>
      </div>
    </div>
  );
  
};

export default App;

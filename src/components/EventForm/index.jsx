// src/components/EventForm.js
import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    imageURL: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.title || !formData.date || !formData.location || !formData.description) {
      setError('Please fill out all required fields.');
      return;
    }

    
    setError('');

    
    onAddEvent(formData);

    
    setFormData({
      title: '',
      date: '',
      location: '',
      description: '',
      imageURL: '',
    });
  };

  const handleClear = () => {
    
    setFormData({
      title: '',
      date: '',
      location: '',
      description: '',
      imageURL: '',
    });
    setError('');
  };

  return (
    <div className="max-w-md mx-auto mb-8 p-2">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block ">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block ">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block ">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block ">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="imageURL" className="block ">
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-between">
          <button type="button" onClick={handleClear} className=" bg-gray-600 px-4 py-2 rounded-md">
            Clear form
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;

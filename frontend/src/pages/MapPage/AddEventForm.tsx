import React, { useState } from 'react';

interface EventData {
    title: string;
    description: string;
    date: string;
    location: google.maps.LatLngLiteral;
  }
  

interface AddEventFormProps {
    location: google.maps.LatLngLiteral;
    onSave: (event: EventData) => void;
    onCancel: () => void;
  }
  

const AddEventForm: React.FC<AddEventFormProps> = ({ location, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, description, date, location });
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        left: '50px',
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        zIndex: 999,
        width: '300px',
      }}
    >
      <h3>Add Event</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={{ backgroundColor: '#4ade80', padding: '8px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            Save
          </button>
          <button type="button" onClick={onCancel} style={{ backgroundColor: '#f87171', padding: '8px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;

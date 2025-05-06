import React from 'react';

interface TravelModeSelectorProps {
  travelMode: google.maps.TravelMode;
  setTravelMode: (mode: google.maps.TravelMode) => void;
}

const TravelModeSelector: React.FC<TravelModeSelectorProps> = ({ travelMode, setTravelMode }) => {
  return (
    <div style={{ position: 'absolute', top: 80, right: 10, background: '#fff', padding: 10, borderRadius: 8 }}>
    <select value={travelMode} onChange={e => setTravelMode(e.target.value as google.maps.TravelMode)}>
      <option value="DRIVING">Driving</option>
      <option value="WALKING">Walking</option>
      <option value="BICYCLING">Bicycling</option>
      <option value="TRANSIT">Transit</option>
    </select>
  </div>
  );
};

export default TravelModeSelector;

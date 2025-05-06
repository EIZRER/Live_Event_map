// LayersControl.tsx
import { useState } from 'react';

interface Props {
  map: google.maps.Map | null;
}

const LayersControl = ({ map }: Props) => {
  const [showTraffic, setShowTraffic] = useState(false);

  const toggleTrafficLayer = () => {
    if (map) {
      const trafficLayer = new google.maps.TrafficLayer();
      if (!showTraffic) {
        trafficLayer.setMap(map);
      } else {
        trafficLayer.setMap(null);
      }
      setShowTraffic(!showTraffic);
    }
  };

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      zIndex: 10,
      backgroundColor: 'white',
      padding: '8px',
      borderRadius: '8px',
      boxShadow: '0px 2px 10px rgba(0,0,0,0.3)',
    }}>
      <button onClick={toggleTrafficLayer}>
        {showTraffic ? 'Hide Traffic' : 'Show Traffic'}
      </button>
    </div>
  );
};

export default LayersControl;

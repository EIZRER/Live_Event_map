import { Marker } from '@react-google-maps/api';

interface Photo {
  getUrl: (options: { maxWidth: number; maxHeight: number }) => string;
}

interface Place {
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  name: string;
  vicinity?: string;
  icon?: string;
  rating?: number;
  user_ratings_total?: number;
  opening_hours?: { open_now: boolean };
  photos?: Photo[];
}

interface PlaceMarkerProps {
  place: Place;
  map: google.maps.Map | null;
  index: number;
  onClick: (place: {
    lat: number;
    lng: number;
    name: string;
    vicinity?: string;
    icon?: string;
    rating?: number;
    user_ratings_total?: number;
    opening_hours?: { open_now: boolean };
    photo?: string;
  }) => void;
}

const PlaceMarker: React.FC<PlaceMarkerProps> = ({ place, map, index, onClick }) => {
  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();

  return (
    <Marker
      position={{ lat, lng }}
      icon={{
        url: place.icon || 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new google.maps.Size(30, 30),
      }}
      onClick={() => {
        if (map) {
          map.panTo({ lat, lng });
          map.setZoom(16);
        }
        onClick({
          lat,
          lng,
          name: place.name,
          vicinity: place.vicinity,
          icon: place.icon,
          rating: place.rating,
          user_ratings_total: place.user_ratings_total,
          opening_hours: place.opening_hours,
          photo: place.photos?.[0]?.getUrl?.({ maxWidth: 250, maxHeight: 100 }),
        });
      }}
    />
  );
};

export default PlaceMarker;

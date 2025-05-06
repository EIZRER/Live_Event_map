// src/MapPage/type.ts

export interface Event {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

// Type for the gmp-placeselect custom event
export interface PlaceSelectEvent extends CustomEvent {
  detail: {
    place: google.maps.places.PlaceResult;
  };
}

// Declare the google-maps-places-autocomplete web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'google-maps-places-autocomplete': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          placeholder?: string;
          className?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
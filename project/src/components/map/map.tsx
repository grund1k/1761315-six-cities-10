import {Icon, Marker} from 'leaflet';
import { useRef, useEffect } from 'react';
import {City, Offers} from '../../types/offer';
import useMap from './../../hooks/useMap/useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  elementClass: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const Map = ({city, offers, elementClass} : MapProps) : JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, offers]);

  return(
    <section className={`${elementClass} map`} ref={mapRef}>
    </section>
  );
};

export default Map;

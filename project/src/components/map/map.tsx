import leaflet, {Icon, Marker} from 'leaflet';
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
  const { latitude, longitude, zoom } = city.location;

  useEffect(() => {
    if (map) {

      map.setView({ lat: latitude, lng: longitude }, zoom, { animate: true, duration: 1 });

      const markers = offers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(defaultCustomIcon);

        return marker;
      });

      const layerGroup = leaflet.layerGroup(markers);

      map.addLayer(layerGroup);

      return () => {
        map.removeLayer(layerGroup);
      };
    }
  }, [latitude, longitude, map, offers, zoom]);

  return(
    <section className={`${elementClass} map`} ref={mapRef}>
    </section>
  );
};

export default Map;

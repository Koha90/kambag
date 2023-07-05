import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  return (
    <YMaps query={{apikey: "c6e246e3-5f36-4885-b479-dd669278def2"}} > 
      <Map
        defaultState={{ center: [57.971078, 56.256788], zoom: 15 }}
        className="map" 
      >
        <Placemark geometry={[57.971078, 56.256788]} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;

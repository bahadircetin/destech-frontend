import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
const mapPage = () => {
    const defaultState = {
        center: [39.934633, 32.855079],
        zoom: 7,
    };

    return (
            <YMaps
                query={{
                    lang: "tr_TR"
                }}
            >
            <Map
                width="100vw"
                height="100%"
                defaultState={defaultState}
            >
                <Placemark geometry={[36.521808, 36.380795]} />
            </Map>
        </YMaps>
    );
};

export default mapPage;

/// <reference types="googlemaps" />
import * as React from 'react';
interface StandaloneSearchBoxState {
    searchBox: google.maps.places.SearchBox | null;
}
export interface StandaloneSearchBoxProps {
    /** The area towards which to bias query predictions. Predictions are biased towards, but not restricted to, queries targeting these bounds. */
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
    options?: google.maps.places.SearchBoxOptions;
    /** This event is fired when the user selects a query, getPlaces should be used to get new places. */
    onPlacesChanged?: () => void;
    /** This callback is called when the searchBox instance has loaded. It is called with the searchBox instance. */
    onLoad?: (searchBox: google.maps.places.SearchBox) => void;
    /** This callback is called when the component unmounts. It is called with the searchBox instance. */
    onUnmount?: (searchBox: google.maps.places.SearchBox) => void;
}
declare class StandaloneSearchBox extends React.PureComponent<StandaloneSearchBoxProps, StandaloneSearchBoxState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: React.RefObject<HTMLDivElement>;
    state: StandaloneSearchBoxState;
    setSearchBoxCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: StandaloneSearchBoxProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default StandaloneSearchBox;

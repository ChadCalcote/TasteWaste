/// <reference types="googlemaps" />
import * as React from 'react';
interface DirectionsRendererState {
    directionsRenderer: google.maps.DirectionsRenderer | null;
}
export interface DirectionsRendererProps {
    options?: google.maps.DirectionsRendererOptions;
    /** The directions to display on the map and/or in a <div> panel, retrieved as a DirectionsResult object from DirectionsService. */
    directions?: google.maps.DirectionsResult;
    /** The <div> in which to display the directions steps. */
    panel?: Element;
    /** The index of the route within the DirectionsResult object. The default value is 0. */
    routeIndex?: number;
    /** This event is fired when the rendered directions change, either when a new DirectionsResult is set or when the user finishes dragging a change to the directions path. */
    onDirectionsChanged?: () => void;
    /** This callback is called when the directionsRenderer instance has loaded. It is called with the directionsRenderer instance. */
    onLoad?: (directionsRenderer: google.maps.DirectionsRenderer) => void;
    /** This callback is called when the component unmounts. It is called with the directionsRenderer instance. */
    onUnmount?: (directionsRenderer: google.maps.DirectionsRenderer) => void;
}
export declare class DirectionsRenderer extends React.PureComponent<DirectionsRendererProps, DirectionsRendererState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: DirectionsRendererState;
    setDirectionsRendererCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DirectionsRendererProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default DirectionsRenderer;

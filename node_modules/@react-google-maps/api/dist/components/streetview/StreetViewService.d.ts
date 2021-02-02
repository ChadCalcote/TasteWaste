/// <reference types="googlemaps" />
import * as React from 'react';
export interface StreetViewServiceProps {
    /** This callback is called when the streetViewService instance has loaded. It is called with the streetViewService instance. */
    onLoad?: (streetViewService: google.maps.StreetViewService | null) => void;
    /** This callback is called when the component unmounts. It is called with the streetViewService instance. */
    onUnmount?: (streetViewService: google.maps.StreetViewService | null) => void;
}
interface StreetViewServiceState {
    streetViewService: google.maps.StreetViewService | null;
}
export declare class StreetViewService extends React.PureComponent<StreetViewServiceProps, StreetViewServiceState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    state: {
        streetViewService: null;
    };
    setStreetViewServiceCallback: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default StreetViewService;

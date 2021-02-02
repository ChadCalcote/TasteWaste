/// <reference types="googlemaps" />
import * as React from 'react';
interface BicyclingLayerState {
    bicyclingLayer: google.maps.BicyclingLayer | null;
}
export interface BicyclingLayerProps {
    /** This callback is called when the bicyclingLayer instance has loaded. It is called with the bicyclingLayer instance. */
    onLoad?: (bicyclingLayer: google.maps.BicyclingLayer) => void;
    /** This callback is called when the component unmounts. It is called with the bicyclingLayer instance. */
    onUnmount?: (bicyclingLayer: google.maps.BicyclingLayer) => void;
}
export declare class BicyclingLayer extends React.PureComponent<BicyclingLayerProps, BicyclingLayerState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    state: {
        bicyclingLayer: null;
    };
    setBicyclingLayerCallback: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default BicyclingLayer;

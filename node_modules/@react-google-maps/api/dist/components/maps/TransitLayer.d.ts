/// <reference types="googlemaps" />
import * as React from 'react';
interface TransitLayerState {
    transitLayer: google.maps.TransitLayer | null;
}
export interface TransitLayerProps {
    /** This callback is called when the transitLayer instance has loaded. It is called with the transitLayer instance. */
    onLoad?: (transitLayer: google.maps.TransitLayer) => void;
    /** This callback is called when the component unmounts. It is called with the transitLayer instance. */
    onUnmount?: (transitLayer: google.maps.TransitLayer) => void;
}
export declare class TransitLayer extends React.PureComponent<TransitLayerProps, TransitLayerState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    state: {
        transitLayer: null;
    };
    setTransitLayerCallback: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default TransitLayer;

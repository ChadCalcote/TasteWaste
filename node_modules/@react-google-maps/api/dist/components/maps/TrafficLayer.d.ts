/// <reference types="googlemaps" />
import { PureComponent } from 'react';
interface TrafficLayerState {
    trafficLayer: google.maps.TrafficLayer | null;
}
export interface TrafficLayerProps {
    options?: google.maps.TrafficLayerOptions;
    /** This callback is called when the trafficLayer instance has loaded. It is called with the trafficLayer instance. */
    onLoad?: (trafficLayer: google.maps.TrafficLayer) => void;
    /** This callback is called when the component unmounts. It is called with the trafficLayer instance. */
    onUnmount?: (trafficLayer: google.maps.TrafficLayer) => void;
}
export declare class TrafficLayer extends PureComponent<TrafficLayerProps, TrafficLayerState> {
    static contextType: import("react").Context<google.maps.Map<Element> | null>;
    state: {
        trafficLayer: null;
    };
    setTrafficLayerCallback: () => void;
    registeredEvents: google.maps.MapsEventListener[];
    componentDidMount(): void;
    componentDidUpdate(prevProps: TrafficLayerProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default TrafficLayer;

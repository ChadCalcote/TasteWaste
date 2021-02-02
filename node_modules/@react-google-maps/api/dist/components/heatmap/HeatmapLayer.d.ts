/// <reference types="googlemaps" />
import * as React from 'react';
interface HeatmapLayerState {
    heatmapLayer: google.maps.visualization.HeatmapLayer | null;
}
export interface HeatmapLayerProps {
    /** The data points to display. Required. */
    data: google.maps.MVCArray<google.maps.LatLng | google.maps.visualization.WeightedLocation> | google.maps.LatLng[] | google.maps.visualization.WeightedLocation[];
    options?: google.maps.visualization.HeatmapLayerOptions;
    /** This callback is called when the heatmapLayer instance has loaded. It is called with the heatmapLayer instance. */
    onLoad?: (heatmapLayer: google.maps.visualization.HeatmapLayer) => void;
    /** This callback is called when the component unmounts. It is called with the heatmapLayer instance. */
    onUnmount?: (heatmapLayer: google.maps.visualization.HeatmapLayer) => void;
}
export declare class HeatmapLayer extends React.PureComponent<HeatmapLayerProps, HeatmapLayerState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: HeatmapLayerState;
    setHeatmapLayerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: HeatmapLayerProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default HeatmapLayer;

/// <reference types="googlemaps" />
import * as React from 'react';
interface DrawingManagerState {
    drawingManager: google.maps.drawing.DrawingManager | null;
}
export interface DrawingManagerProps {
    options?: google.maps.drawing.DrawingManagerOptions;
    /** Changes the DrawingManager's drawing mode, which defines the type of overlay to be added on the map. Accepted values are 'marker', 'polygon', 'polyline', 'rectangle', 'circle', or null. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. */
    drawingMode?: google.maps.drawing.OverlayType | null;
    /** This event is fired when the user has finished drawing a circle. */
    onCircleComplete?: (circle: google.maps.Circle) => void;
    /** This event is fired when the user has finished drawing a marker. */
    onMarkerComplete?: (marker: google.maps.Marker) => void;
    /** This event is fired when the user has finished drawing an overlay of any type. */
    onOverlayComplete?: (e: google.maps.drawing.OverlayCompleteEvent) => void;
    /** This event is fired when the user has finished drawing a polygon. */
    onPolygonComplete?: (polygon: google.maps.Polygon) => void;
    /** This event is fired when the user has finished drawing a polyline. */
    onPolylineComplete?: (polyline: google.maps.Polyline) => void;
    /** This event is fired when the user has finished drawing a rectangle. */
    onRectangleComplete?: (rectangle: google.maps.Rectangle) => void;
    /** This callback is called when the drawingManager instance has loaded. It is called with the drawingManager instance. */
    onLoad?: (drawingManager: google.maps.drawing.DrawingManager) => void;
    /** This callback is called when the component unmounts. It is called with the drawingManager instance. */
    onUnmount?: (drawingManager: google.maps.drawing.DrawingManager) => void;
}
export declare class DrawingManager extends React.PureComponent<DrawingManagerProps, DrawingManagerState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: DrawingManagerState;
    constructor(props: DrawingManagerProps);
    setDrawingManagerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DrawingManagerProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default DrawingManager;

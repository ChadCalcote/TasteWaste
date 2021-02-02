/// <reference types="googlemaps" />
import * as React from 'react';
interface InfoWindowState {
    infoWindow: google.maps.InfoWindow | null;
}
export interface InfoWindowProps {
    /** Can be any MVCObject that exposes a LatLng position property and optionally a Point anchorPoint property for calculating the pixelOffset. The anchorPoint is the offset from the anchor's position to the tip of the InfoWindow. */
    anchor?: google.maps.MVCObject;
    options?: google.maps.InfoWindowOptions;
    /** The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead. */
    position?: google.maps.LatLng | google.maps.LatLngLiteral;
    /** All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers. */
    zIndex?: number;
    /** This event is fired when the close button was clicked. */
    onCloseClick?: () => void;
    /** This event is fired when the <div> containing the InfoWindow's content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically. */
    onDomReady?: () => void;
    /** This event is fired when the content property changes. */
    onContentChanged?: () => void;
    /** This event is fired when the position property changes. */
    onPositionChanged?: () => void;
    /** This event is fired when the InfoWindow's zIndex changes. */
    onZindexChanged?: () => void;
    /** This callback is called when the infoWindow instance has loaded. It is called with the infoWindow instance. */
    onLoad?: (infoWindow: google.maps.InfoWindow) => void;
    /** This callback is called when the component unmounts. It is called with the infoWindow instance. */
    onUnmount?: (infoWindow: google.maps.InfoWindow) => void;
}
export declare class InfoWindow extends React.PureComponent<InfoWindowProps, InfoWindowState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: HTMLElement | null;
    state: InfoWindowState;
    open: (infoWindow: google.maps.InfoWindow, anchor?: google.maps.MVCObject | undefined) => void;
    setInfoWindowCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: InfoWindowProps): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal | React.ReactNode;
}
export default InfoWindow;

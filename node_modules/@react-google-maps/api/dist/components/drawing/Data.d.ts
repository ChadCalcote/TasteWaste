/// <reference types="googlemaps" />
import * as React from 'react';
interface DataState {
    data: google.maps.Data | null;
}
export interface DataProps {
    options?: google.maps.Data.DataOptions;
    /**  This event is fired when a feature is added to the collection. */
    onAddFeature?: (e: google.maps.Data.AddFeatureEvent) => void;
    /**  This event is fired for a click on the geometry. */
    onClick?: (e: google.maps.Data.MouseEvent) => void;
    /**  This event is fired for a double click on the geometry. */
    onDblClick?: (e: google.maps.Data.MouseEvent) => void;
    /**  This event is fired for a mousedown on the geometry. */
    onMouseDown?: (e: google.maps.Data.MouseEvent) => void;
    /**  This event is fired when the mouse leaves the area of the geometry. */
    onMouseOut?: (e: google.maps.Data.MouseEvent) => void;
    /**  This event is fired when the mouse enters the area of the geometry. */
    onMouseOver?: (e: google.maps.Data.MouseEvent) => void;
    /**  This event is fired for a mouseup on the geometry. */
    onMouseUp?: (e: google.maps.Data.MouseEvent) => void;
    /**  This event is fired when a feature is removed from the collection. */
    onRemoveFeature?: (e: google.maps.Data.RemoveFeatureEvent) => void;
    /**  This event is fired when a feature's property is removed. */
    onRemoveProperty?: (e: google.maps.Data.RemovePropertyEvent) => void;
    /**  This event is fired for a rightclick on the geometry. */
    onRightClick?: (e: google.maps.Data.MouseEvent) => void;
    /**  This event is fired when a feature's geometry is set. */
    onSetGeometry?: (e: google.maps.Data.SetGeometryEvent) => void;
    /**  This event is fired when a feature's property is set. */
    onSetProperty?: (e: google.maps.Data.SetPropertyEvent) => void;
    /**  This callback is called when the data instance has loaded. It is called with the data instance. */
    onLoad?: (data: google.maps.Data) => void;
    /**  This callback is called when the component unmounts. It is called with the data instance.  */
    onUnmount?: (data: google.maps.Data) => void;
}
export declare class Data extends React.PureComponent<DataProps, DataState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: DataState;
    setDataCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DataProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default Data;

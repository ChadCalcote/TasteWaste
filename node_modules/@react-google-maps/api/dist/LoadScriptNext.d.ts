import * as React from 'react';
import { UseLoadScriptOptions } from './useLoadScript';
export interface LoadScriptNextProps extends UseLoadScriptOptions {
    loadingElement?: React.ReactElement;
    onLoad?: () => void;
    onError?: (error: Error) => void;
    onUnmount?: () => void;
    children: React.ReactElement;
}
declare function LoadScriptNext({ loadingElement, onLoad, onError, onUnmount, children, ...hookOptions }: LoadScriptNextProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof LoadScriptNext>;
export default _default;

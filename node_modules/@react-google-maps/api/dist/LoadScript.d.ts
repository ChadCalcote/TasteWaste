import * as React from 'react';
import { LoadScriptUrlOptions } from './utils/make-load-script-url';
interface LoadScriptState {
    loaded: boolean;
}
export interface LoadScriptProps extends LoadScriptUrlOptions {
    id: string;
    nonce?: string;
    loadingElement?: React.ReactNode;
    onLoad?: () => void;
    onError?: (error: Error) => void;
    onUnmount?: () => void;
    preventGoogleFontsLoading?: boolean;
}
export declare function DefaultLoadingElement(): JSX.Element;
export declare const defaultLoadScriptProps: {
    id: string;
    version: string;
};
declare class LoadScript extends React.PureComponent<LoadScriptProps, LoadScriptState> {
    static defaultProps: {
        id: string;
        version: string;
    };
    check: React.RefObject<HTMLDivElement>;
    state: {
        loaded: boolean;
    };
    cleanupCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: LoadScriptProps): void;
    componentWillUnmount(): void;
    isCleaningUp: () => Promise<void>;
    cleanup: () => void;
    injectScript: () => void;
    render(): React.ReactNode;
}
export default LoadScript;

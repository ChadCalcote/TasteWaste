import * as React from 'react';
interface DocsApiKeyInputState {
    key: string;
    loadScript: boolean;
}
declare class DocsApiKeyInput extends React.Component<{}, DocsApiKeyInputState> {
    constructor(props: {});
    onInputChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    render(): React.ReactNode;
}
export default DocsApiKeyInput;

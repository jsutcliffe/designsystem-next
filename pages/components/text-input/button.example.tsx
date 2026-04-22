import TextInput from '@scottish-government/designsystem-react/src/components/TextInput/TextInput';

import ExampleLayout from '../../../app/example-layout';

export const Content = <TextInput
    buttonIcon="Search"
    buttonText="Search"
    hasButton
    id="text-input-button"
    label="Search"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

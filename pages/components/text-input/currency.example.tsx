import TextInput from '@scottish-government/designsystem-react/src/components/TextInput/TextInput';

import ExampleLayout from '../../../app/example-layout';

export const Content = <TextInput
    isCurrency
    id="text-input-currency"
    label="Price per month"
    width="fluid-one-third"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

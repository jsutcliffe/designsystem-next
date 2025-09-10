// @ts-expect-error no types from DS library
import TextInput from '@scottish-government/designsystem-react/dist/components/TextInput/TextInput';

import ExampleLayout from '../../../app/example-layout';

export const Content = <TextInput
    currency
    id="text-input-currency"
    label="Price per month"
    width="fluid-one-third"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

// @ts-expect-error no types from DS library
import TextInput from '@scottish-government/designsystem-react/dist/components/TextInput/TextInput';

import ExampleLayout from '../../../app/example-layout';

export const Content = <TextInput
    id="text-input-character-count"
    label="First name"
    maxlength="20"
    value="Joe Bloggs"
    width="fixed-20"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

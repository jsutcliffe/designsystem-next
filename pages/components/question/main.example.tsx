import Question from '@scottish-government/designsystem-react/src/components/Question/Question';
import TextInput from '@scottish-government/designsystem-react/src/components/TextInput/TextInput';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Question tagName="div">
    <TextInput
        id="text-input-question"
        label="First name"
    />
</Question>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

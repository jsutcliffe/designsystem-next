// @ts-expect-error no types from DS library
import Question from '@scottish-government/designsystem-react/dist/components/Question/Question';
// @ts-expect-error no types from DS library
import TextInput from '@scottish-government/designsystem-react/dist/components/TextInput/TextInput';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Question
    hasError
>
    <TextInput
        error="true"
        errorMessage="This is a required field"
        id="text-input-question-error"
        label="First name"
    />
</Question>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

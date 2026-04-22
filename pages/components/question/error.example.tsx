import Question from '@scottish-government/designsystem-react/src/components/Question/Question';
import TextInput from '@scottish-government/designsystem-react/src/components/TextInput/TextInput';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Question tagName="div"
    hasError
>
    <TextInput
        hasError={true}
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

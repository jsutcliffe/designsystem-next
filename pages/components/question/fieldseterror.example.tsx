// @ts-expect-error no types from DS library
import Question from '@scottish-government/designsystem-react/dist/components/Question/Question';
// @ts-expect-error no types from DS library
import Checkbox from '@scottish-government/designsystem-react/dist/components/Checkbox/Checkbox';
// @ts-expect-error no types from DS library
import CheckboxGroup from '@scottish-government/designsystem-react/dist/components/Checkbox/CheckboxGroup';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Question
    hasError="true"
    errorMessage="You must select at least one option"
    hintText="Select all that apply."
    legend="Do you receive any of these benefits"
    tagName="fieldset"
>
    <CheckboxGroup>
        <Checkbox
            id="universal-credit"
            label="Universal Credit"
            checked
        />
        <Checkbox
            id="pension-credit"
            label="Pension Credit"
        />
        <Checkbox
            id="jsa"
            label="Income-based Job Seeker's Allowance"
        />
        <Checkbox
            id="none"
            label="No, I do not receive any of these benefits"
            exclusive
        />
    </CheckboxGroup>
</Question>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

// @ts-expect-error no types from DS library
import RadioButton from '@scottish-government/designsystem-react/dist/components/RadioButton/RadioButton';
// @ts-expect-error no types from DS library
import RadioGroup from '@scottish-government/designsystem-react/dist/components/RadioButton/RadioGroup';

import ExampleLayout from '../../../app/example-layout';

export const Content = <RadioGroup name="paymentType">
    <RadioButton
        label="Advance"
        id="advance-radio"
        hintText="This means you're paid for the period coming up, e.g. the month ahead"
    />
    <RadioButton
        label="Arrears"
        id="arrears-radio"
        hintText="This means you're paid for the time that's just passed, e.g. for the last month"
    />
</RadioGroup>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

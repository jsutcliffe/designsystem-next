// @ts-expect-error no types from DS library
import DatePicker from '@scottish-government/designsystem-react/dist/components/DatePicker/DatePicker';

import ExampleLayout from '../../../app/example-layout';

export const Content = <DatePicker
    id="date-picker"
    label="Date of birth"
    value="12/08/2024"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

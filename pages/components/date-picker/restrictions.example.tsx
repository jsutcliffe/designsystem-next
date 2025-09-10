// @ts-expect-error no types from DS library
import DatePicker from '@scottish-government/designsystem-react/dist/components/DatePicker/DatePicker';

import ExampleLayout from '../../../app/example-layout';

export const Content = <DatePicker
    disabledDates="06/07/2024 07/07/2024 13/07/2024 14/07/2024 20/07/2024 21/07/2024 27/07/2024 28/07/2024"
    hintText="Use dd/mm/yyyy format. For example, 31/01/2023."
    id="date-picker-restrictions"
    label="Date of birth"
    maxDate="26/07/2024"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

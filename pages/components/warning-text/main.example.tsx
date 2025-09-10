// @ts-expect-error no types from DS library
import WarningText from '@scottish-government/designsystem-react/dist/components/WarningText/WarningText';

import ExampleLayout from '../../../app/example-layout';

export const Content = <WarningText>
    Call 999 if you or someone else is in immediate danger, or if the crime is in progress.
</WarningText>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

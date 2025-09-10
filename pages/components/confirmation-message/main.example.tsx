// @ts-expect-error no types from DS library
import ConfirmationMessage from '@scottish-government/designsystem-react/dist/components/ConfirmationMessage/ConfirmationMessage';

import ExampleLayout from '../../../app/example-layout';

export const Content = <ConfirmationMessage title="Landlord added successfully">
    <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
</ConfirmationMessage>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

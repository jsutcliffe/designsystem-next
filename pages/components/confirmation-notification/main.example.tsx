import ConfirmationNotification from '@scottish-government/designsystem-react/src/components/ConfirmationNotification/ConfirmationNotification';

import ExampleLayout from '../../../app/example-layout';

export const Content = <ConfirmationNotification ariaLive="polite" headingLevel="h2" title="Landlord removed successfully">
    <p>You have removed the landlord <strong>John Smith</strong> to the application.</p>
</ConfirmationNotification>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

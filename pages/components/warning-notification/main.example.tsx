import WarningNotification from '@scottish-government/designsystem-react/src/components/WarningNotification/WarningNotification';

import ExampleLayout from '../../../app/example-layout';

export const Content = <WarningNotification ariaLive="polite" headingLevel="h2" title="Partial name match">
    <p>Please confirm that the name on the account is correct.</p>
</WarningNotification>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

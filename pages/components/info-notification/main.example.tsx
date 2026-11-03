import InfoNotification from '@scottish-government/designsystem-react/src/components/InfoNotification/InfoNotification';

import ExampleLayout from '../../../app/example-layout';

export const Content = <InfoNotification ariaLive="polite" headingLevel="h2" title="Welcome to the mygov.scot app">
    <p>This is a beta version. Not all features will be available.</p>
</InfoNotification>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

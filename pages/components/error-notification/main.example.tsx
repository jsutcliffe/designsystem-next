import ErrorNotification from '@scottish-government/designsystem-react/src/components/ErrorNotification/ErrorNotification';

import ExampleLayout from '../../../app/example-layout';

export const Content = <ErrorNotification ariaLive="polite" headingLevel="h2" title="Something went wrong">
    <p>That link does not seem to be working. Please try again.</p>
</ErrorNotification>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

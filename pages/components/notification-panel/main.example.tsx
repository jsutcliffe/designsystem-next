// @ts-expect-error no types from DS library
import NotificationPanel from '@scottish-government/designsystem-react/dist/components/NotificationPanel/NotificationPanel';

import ExampleLayout from '../../../app/example-layout';

export const Content = <NotificationPanel title="Thank you">
    <p>Your Saltire Scholarship Application form has been successfully submitted.</p>
</NotificationPanel>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

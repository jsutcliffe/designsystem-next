import NotificationBanner from '@scottish-government/designsystem-react/src/components/NotificationBanner/NotificationBanner';

import ExampleLayout from '../../../app/example-layout';

export const Content = <NotificationBanner icon="PriorityHigh" hasColourIcon hasInverseIcon isDismissable>
    <p>We need to tell you about <a href="#notification">something</a></p>
</NotificationBanner>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

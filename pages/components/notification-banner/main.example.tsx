// @ts-expect-error no types from DS library
import NotificationBanner from '@scottish-government/designsystem-react/dist/components/NotificationBanner/NotificationBanner';

import ExampleLayout from '../../../app/example-layout';

export const Content = <NotificationBanner>
    <p>We need to tell you about <a href="#notification">something</a></p>
</NotificationBanner>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

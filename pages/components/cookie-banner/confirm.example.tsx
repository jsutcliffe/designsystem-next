// @ts-expect-error no types from DS library
import NotificationBanner from '@scottish-government/designsystem-react/dist/components/NotificationBanner/NotificationBanner';

import ExampleLayout from '../../../app/example-layout';

export const Content = <NotificationBanner id="cookie-confirm" isDismissable className="ds_notification--cookie-success">
    <p>Your cookie preferences have been saved. You can <a href="/cookies/">change your cookie settings</a> at any time.</p>
</NotificationBanner>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

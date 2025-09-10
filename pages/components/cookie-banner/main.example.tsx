// @ts-expect-error no types from DS library
import Button from '@scottish-government/designsystem-react/dist/components/Button/Button';
// @ts-expect-error no types from DS library
import CookieBanner from '@scottish-government/designsystem-react/dist/components/CookieBanner/CookieBanner';

import ExampleLayout from '../../../app/example-layout';

export const Content = <CookieBanner>
    <p>We use <a href="/cookies/">cookies</a> to collect anonymous data to help us improve your site browsing
        experience.</p>
    <p>Click &lsquo;Accept all cookies&rsquo; to agree to all cookies that collect anonymous data.
        To only allow the cookies that make the site work, click &lsquo;Use essential cookies only.&rsquo; Visit &lsquo;Set cookie preferences&rsquo; to control specific cookies.</p>
    <CookieBanner.Buttons>
        <Button className="js-accept-all-cookies" small buttonStyle="secondary">Accept all cookies</Button>
        <Button className="js-accept-essential-cookies" small buttonStyle="secondary">Use essential cookies only</Button>
        <a href="/cookies/">Set cookie preferences</a>
    </CookieBanner.Buttons>
</CookieBanner>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

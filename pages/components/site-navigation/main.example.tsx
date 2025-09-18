// @ts-expect-error no types from DS library
import SiteNavigation from '@scottish-government/designsystem-react/dist/components/SiteNavigation/SiteNavigation';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SiteNavigation>
    <SiteNavigation.Item href="#about">About</SiteNavigation.Item>
    <SiteNavigation.Item href="#get-started">Get started</SiteNavigation.Item>
    <SiteNavigation.Item href="#styles">Styles</SiteNavigation.Item>
    <SiteNavigation.Item href="#components" isCurrent>Components</SiteNavigation.Item>
    <SiteNavigation.Item href="#patterns">Patterns</SiteNavigation.Item>
    <SiteNavigation.Item href="#guidance">Guidance</SiteNavigation.Item>
</SiteNavigation>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

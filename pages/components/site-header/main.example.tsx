import Image from 'next/image';

// @ts-expect-error no types from DS library
import PhaseBanner from '@scottish-government/designsystem-react/dist/components/PhaseBanner/PhaseBanner';
// @ts-expect-error no types from DS library
import SiteNavigation from '@scottish-government/designsystem-react/dist/components/SiteNavigation/SiteNavigation';
// @ts-expect-error no types from DS library
import SiteSearch from '@scottish-government/designsystem-react/dist/components/SiteSearch/SiteSearch';
// @ts-expect-error no types from DS library
import SiteHeader from '@scottish-government/designsystem-react/dist/components/SiteHeader/SiteHeader';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SiteHeader>
    <SiteHeader.Brand homeUrl="/" siteTitle="Design System React">
        <Image src="/scottish-government.svg" alt="gov.scot" loading="lazy" width="300" height="58" />
    </SiteHeader.Brand>
    <SiteHeader.Navigation>
        <SiteNavigation>
            <SiteNavigation.Item href="#about">About</SiteNavigation.Item>
            <SiteNavigation.Item href="#get-started">Get started</SiteNavigation.Item>
            <SiteNavigation.Item href="#styles">Styles</SiteNavigation.Item>
            <SiteNavigation.Item href="#components" current>Components</SiteNavigation.Item>
            <SiteNavigation.Item href="#patterns">Patterns</SiteNavigation.Item>
            <SiteNavigation.Item href="#guidance">Guidance</SiteNavigation.Item>
        </SiteNavigation>
    </SiteHeader.Navigation>
    <SiteHeader.Search>
        <SiteSearch id="site-header-search"/>
    </SiteHeader.Search>
    <SiteHeader.Phase>
        <PhaseBanner phaseName="Beta">
            This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
        </PhaseBanner>
    </SiteHeader.Phase>
</SiteHeader>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

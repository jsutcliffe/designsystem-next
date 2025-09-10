// @ts-expect-error no types from DS library
import SiteFooter from '@scottish-government/designsystem-react/dist/components/SiteFooter/SiteFooter';

import Image from 'next/image';
import ExampleLayout from '../../../app/example-layout';

export const Content = <SiteFooter>
    <SiteFooter.Links>
        <SiteFooter.Link href="#">Privacy</SiteFooter.Link>
        <SiteFooter.Link href="#">Cookies</SiteFooter.Link>
        <SiteFooter.Link href="#">Accessibility</SiteFooter.Link>
    </SiteFooter.Links>
    <SiteFooter.License>
        <Image width="41" height="17" src="/ogl.svg" alt="Open Government License" />
        <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except for graphic assets and where otherwise stated</p>
        <p>&copy; Crown Copyright</p>
    </SiteFooter.License>
    <SiteFooter.Org title="The Scottish Government" href="https://www.gov.scot/">
        <Image src="/scottish-government--min.svg" alt="gov.scot" loading="lazy" width="300" height="55" />
    </SiteFooter.Org>
</SiteFooter>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

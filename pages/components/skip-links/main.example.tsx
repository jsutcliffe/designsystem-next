// @ts-expect-error no types from DS library
import SkipLinks from '@scottish-government/designsystem-react/dist/components/SkipLinks/SkipLinks';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SkipLinks>
    <SkipLinks.Link fragmentId="main-content">Skip to main content</SkipLinks.Link>
</SkipLinks>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

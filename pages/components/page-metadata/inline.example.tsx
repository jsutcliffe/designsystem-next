// @ts-expect-error no types from DS library
import Metadata from '@scottish-government/designsystem-react/dist/components/PageMetadata/PageMetadata';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Metadata inline>
    <Metadata.Item name="Content type">Publication</Metadata.Item>
    <Metadata.Item name="Last updated">21/04/2020</Metadata.Item>
</Metadata>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

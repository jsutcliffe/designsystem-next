// @ts-expect-error no types from DS library
import Metadata from '@scottish-government/designsystem-react/dist/components/PageMetadata/PageMetadata';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Metadata>
    <Metadata.Item name="Last updated">21/04/2020</Metadata.Item>
    <Metadata.Item name="Directorate">
        <a href="#one">Equality, Inclusion and Human Rights Directorate</a>
    </Metadata.Item>
    <Metadata.Item name="Part of">
        <a href="#two">Equality and rights</a>,{' '}
        <a href="#three">Law and order</a>
    </Metadata.Item>
</Metadata>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

// @ts-expect-error no types from DS library
import PageHeader from '@scottish-government/designsystem-react/dist/components/PageHeader/PageHeader';
// @ts-expect-error no types from DS library
import Metadata from '@scottish-government/designsystem-react/dist/components/PageMetadata/PageMetadata';

import ExampleLayout from '../../../app/example-layout';

export const Content = <PageHeader
    label="Publication - FOI/EIR release"
    title="Constitutional Futures Division documents mentioning the Treaty on the Prohibition of Nuclear Weapons: FOI Release"
>
    <Metadata>
        <Metadata.Item name="Last updated">15 August 2024</Metadata.Item>
        <Metadata.Item name="Directorate">
            <a href="#one">Constitution Directorate</a>
        </Metadata.Item>
        <Metadata.Item name="Part of">
            <a href="#two">Constitution and democracy</a>,{' '}
            <a href="#three">Public sector</a>
        </Metadata.Item>
        <Metadata.Item name="FOI reference">
            FOI/202400423236
        </Metadata.Item>
        <Metadata.Item name="Date received">
            18 July 2024
        </Metadata.Item>
        <Metadata.Item name="Date responded">
            15 August 2024
        </Metadata.Item>
    </Metadata>
</PageHeader>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

import PageHeader from '@scottish-government/designsystem-react/src/components/PageHeader/PageHeader';
import ExampleLayout from '../../../app/example-layout';

export const Content = <PageHeader
    label="Guide"
    title="Apply for or renew a disabled parking permit"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

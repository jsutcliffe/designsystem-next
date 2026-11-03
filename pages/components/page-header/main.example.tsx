import PageHeader from '@scottish-government/designsystem-react/src/components/PageHeader/PageHeader';
import ExampleLayout from '../../../app/example-layout';

export const Content = <PageHeader
    label="Guide"
    heading=<>Apply for or renew<br /> a disabled parking permit</>
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

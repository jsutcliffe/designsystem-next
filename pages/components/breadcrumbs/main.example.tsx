import Breadcrumbs from '@scottish-government/designsystem-react/src/components/Breadcrumbs/Breadcrumbs';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Breadcrumbs>
    <Breadcrumbs.Item href="#home">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="#category">Category</Breadcrumbs.Item>
    <Breadcrumbs.Item>Page</Breadcrumbs.Item>
</Breadcrumbs>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

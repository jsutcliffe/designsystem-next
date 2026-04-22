import HideThisPage from '@scottish-government/designsystem-react/src/components/HideThisPage/HideThisPage';

import ExampleLayout from '../../../app/example-layout';

export const Content = <HideThisPage />;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

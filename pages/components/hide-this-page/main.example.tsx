// @ts-expect-error no types from DS library
import HideThisPage from '@scottish-government/designsystem-react/dist/components/HideThisPage/HideThisPage';

import ExampleLayout from '../../../app/example-layout';

export const Content = <HideThisPage />;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

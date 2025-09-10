// @ts-expect-error no types from DS library
import BackToTop from '@scottish-government/designsystem-react/dist/components/BackToTop/BackToTop';

import ExampleLayout from '../../../app/example-layout';

export const Content = <BackToTop/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

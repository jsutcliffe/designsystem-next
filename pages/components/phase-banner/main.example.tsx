import PhaseBanner from '@scottish-government/designsystem-react/src/components/PhaseBanner/PhaseBanner';

import ExampleLayout from '../../../app/example-layout';

export const Content = <PhaseBanner phaseName="Beta">
    This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
</PhaseBanner>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

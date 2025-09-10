// @ts-expect-error no types from DS library
import SequentialNavigation from '@scottish-government/designsystem-react/dist/components/SequentialNavigation/SequentialNavigation';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SequentialNavigation>
    <SequentialNavigation.Previous href="#previous">
        Apply for or renew a Blue Badge
    </SequentialNavigation.Previous>
    <SequentialNavigation.Next href="#next">
        Eligibility: who can have one?
    </SequentialNavigation.Next>
</SequentialNavigation>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

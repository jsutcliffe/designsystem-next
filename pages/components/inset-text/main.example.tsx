// @ts-expect-error no types from DS library
import InsetText from '@scottish-government/designsystem-react/dist/components/InsetText/InsetText';

import ExampleLayout from '../../../app/example-layout';

export const Content = <InsetText>
    You may be able to <a href="#inset">apply for free school meals</a> at the same time as you apply for the clothing grant.
</InsetText>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

// @ts-expect-error no types from DS library
import AspectBox from '@scottish-government/designsystem-react/dist/components/AspectBox/AspectBox';

import ExampleLayout from '../../../app/example-layout';

export const Content = <AspectBox>
    <img src="/highland-cow.jpg" alt="" />
</AspectBox>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

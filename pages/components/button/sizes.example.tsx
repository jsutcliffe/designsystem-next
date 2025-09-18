// @ts-expect-error no types from DS library
import Button from '@scottish-government/designsystem-react/dist/components/Button/Button';

import ExampleLayout from '../../../app/example-layout';

export const Content = <>
    <Button>Fluid-width button</Button><br />
    <Button width="fixed">Fixed-width button</Button><br />
    <Button width="max">Max-width button</Button><br />
    <Button isSmall>Small button</Button>
</>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

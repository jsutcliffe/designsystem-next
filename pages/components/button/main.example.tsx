// @ts-expect-error no types from DS library
import Button from '@scottish-government/designsystem-react/dist/components/Button/Button';

import ExampleLayout from '../../../app/example-layout';

export const Content = <>
    <Button>Primary button</Button><br />
    <Button buttonStyle="secondary">Secondary button</Button><br />
    <Button disabled>Disabled button</Button>
</>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

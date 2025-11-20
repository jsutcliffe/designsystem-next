import Button from '@scottish-government/designsystem-react/dist/components/Button/Button';
import ButtonGroup from '@scottish-government/designsystem-react/dist/components/ButtonGroup/ButtonGroup';

import ExampleLayout from '../../../app/example-layout';

export const Content = <ButtonGroup>
    <Button>Primary button</Button>
    <Button buttonStyle="secondary">Secondary button</Button>
</ButtonGroup>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

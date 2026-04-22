import Button from '@scottish-government/designsystem-react/src/components/Button/Button';

import ExampleLayout from '../../../app/example-layout';

export const Content = <>
    <Button href="#bananas">Link styled as button</Button><br />
    <Button hasLinkStyle>Button styled as link</Button>
</>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

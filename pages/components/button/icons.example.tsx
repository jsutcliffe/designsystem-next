import Button from '@scottish-government/designsystem-react/src/components/Button/Button';

import ExampleLayout from '../../../app/example-layout';

export const Content = <>
    <Button icon="ChevronRight">
        Button with icon
    </Button><br />
    <Button isIconLeft icon="ChevronLeft">
        Button with left icon
    </Button><br />
    <Button isIconOnly icon="Search">
        Search
    </Button>
</>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

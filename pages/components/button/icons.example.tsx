// @ts-expect-error no types from DS library
import Button from '@scottish-government/designsystem-react/dist/components/Button/Button';

import ExampleLayout from '../../../app/example-layout';

export const Content = <>
    <Button icon="ChevronRight">
        Button with icon
    </Button><br />
    <Button iconLeft icon="ChevronLeft">
        Button with left icon
    </Button><br />
    <Button iconOnly icon="Search">
        Search
    </Button>
</>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

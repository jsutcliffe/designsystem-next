// @ts-expect-error no types from DS library
import Select from '@scottish-government/designsystem-react/dist/components/Select/Select';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Select
    defaultValue="button"
    id="select-component"
    label="Choose a component"
    placeholder="Choose a component"
>
    <option value="accordion">Accordion</option>
    <option value="breadcrumbs">Breadcrumbs</option>
    <option value="button">Button</option>
</Select>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

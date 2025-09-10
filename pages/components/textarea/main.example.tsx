// @ts-expect-error no types from DS library
import Textarea from '@scottish-government/designsystem-react/dist/components/Textarea/Textarea';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Textarea
    id="textarea"
    label="Description"
    rows="2"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

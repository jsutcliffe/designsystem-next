// @ts-expect-error no types from DS library
import Textarea from '@scottish-government/designsystem-react/dist/components/Textarea/Textarea';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Textarea
    defaultValue="Mygov.scot gives people and businesses information about and access to public services in Scotland. We work closely with public sector organisations to make public services easy to find and understand."
    id="textarea-character-count"
    label="Description"
    maxlength="250"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

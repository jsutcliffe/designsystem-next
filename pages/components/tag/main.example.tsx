// @ts-expect-error no types from DS library
import Tag from '@scottish-government/designsystem-react/dist/components/Tag/Tag';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Tag>Beta</Tag>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

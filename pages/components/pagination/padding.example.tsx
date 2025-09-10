// @ts-expect-error no types from DS library
import Pagination from '@scottish-government/designsystem-react/dist/components/Pagination/Pagination';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Pagination page="10" padding="3" totalPages="21" />;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

import Pagination from '@scottish-government/designsystem-react/src/components/Pagination/Pagination';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Pagination pattern='/search?page=$1' ariaLabel="foo" page={10} padding={3} totalPages={21} />;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

import SearchSort from '@scottish-government/designsystem-react/dist/components/SearchSort/SearchSort';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SearchSort>
  <SearchSort.Option value="relevance">
    Most relevant
  </SearchSort.Option>
  <SearchSort.Option value="date">
    Updated (newest)
  </SearchSort.Option>
  <SearchSort.Option value="adate">
    Updated (oldest)
  </SearchSort.Option>
</SearchSort>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

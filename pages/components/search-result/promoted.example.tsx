import SearchResult from '@scottish-government/designsystem-react/dist/components/SearchResult/SearchResult';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SearchResult
  href="#foo"
  isPromoted
  title="Application incomplete"
>
  <SearchResult.Content>
    Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
  </SearchResult.Content>
</SearchResult>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

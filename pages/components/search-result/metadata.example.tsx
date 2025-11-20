import SearchResult from '@scottish-government/designsystem-react/dist/components/SearchResult/SearchResult';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SearchResult
  href="#foo"
  title="Application incomplete"
>
  <SearchResult.Content>
    Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
  </SearchResult.Content>
  <SearchResult.Meta>
    <SearchResult.MetaItem name="Publication type">
      Statistics
    </SearchResult.MetaItem>
    <SearchResult.MetaItem name="Date">
      18 June 2024
    </SearchResult.MetaItem>
  </SearchResult.Meta>
</SearchResult>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

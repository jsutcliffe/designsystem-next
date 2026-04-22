import SearchResult from '@scottish-government/designsystem-react/src/components/SearchResult/SearchResult';
import Metadata from '@scottish-government/designsystem-react/src/components/PageMetadata/PageMetadata';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SearchResult
  href="#foo"
  title="Application incomplete"
>
  <SearchResult.Content>
    Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
  </SearchResult.Content>
  <SearchResult.Metadata>
    <Metadata.Item name="Publication type">
      Statistics
    </Metadata.Item>
    <Metadata.Item name="Date">
      18 June 2024
    </Metadata.Item>
  </SearchResult.Metadata>
</SearchResult>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

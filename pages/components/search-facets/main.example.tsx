import Facets from '@scottish-government/designsystem-react/dist/components/SearchFacets/SearchFacets';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Facets title="Application incomplete">
  <Facets.Group title="Content type">
    <Facets.Item title="Advice and guidance" />
    <Facets.Item title="Factsheet" />
    <Facets.Item title="Statistics" />
  </Facets.Group>
  <Facets.Group title="Topic">
    <Facets.Item title="Children and families" />
    <Facets.Item title="Education" />
  </Facets.Group>
  <Facets.Group
    joinContent="and"
    title="Updated between"
  >
    <Facets.Item
      accessibleName="Updated after 20/11/2023"
      title="20/11/2023"
    />
    <Facets.Item
      accessibleName="Updated before 02/04/2024"
      title="02/04/2024"
    />
  </Facets.Group>
</Facets>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

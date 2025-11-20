import Filters from '@scottish-government/designsystem-react/dist/components/SearchFilters/SearchFilters';
import Checkbox from '@scottish-government/designsystem-react/dist/components/Checkbox/Checkbox';
import DatePicker from '@scottish-government/designsystem-react/dist/components/DatePicker/DatePicker';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Filters>
  <Filters.Panel
    heading="Content type"
    isScrollable
    legend="Select which publication types you would like to see"
  >
    <Filters.CheckboxGroup>
      <Checkbox
        id="advice-and-guidance"
        label="Advice and guidance"
        value="advice-and-guidance"
      />
      <Checkbox
        id="agreement"
        label="Agreement"
        value="agreement"
      />
      <Checkbox
        id="consultation-analysis"
        label="Consultation analysis"
        value="consultation-analysis"
      />
      <Checkbox
        id="consultation-paper"
        label="Consultation paper"
        value="consultation-paper"
      />
      <Checkbox
        id="corporate-report"
        label="Corporate report"
        value="corporate-report"
      />
      <Checkbox
        id="correspondence"
        label="Correspondence"
        value="correspondence"
      />
      <Checkbox
        id="foi-eir-release"
        label="FOI/EIR release"
        value="foi-eir-release"
      />
      <Checkbox
        id="factsheet"
        label="Factsheet"
        value="factsheet"
      />
      <Checkbox
        id="form"
        label="Form"
        value="form"
      />
    </Filters.CheckboxGroup>
  </Filters.Panel>
  <Filters.Panel
    heading="Filter by date"
    legend="Filter by date"
  >
    <DatePicker
      hintText="For example, 21/01/2022"
      id="date-from"
      label="Updated after"
    />
    <DatePicker
      hintText="For example, 21/01/2022"
      id="date-to"
      label="Updated before"
    />
  </Filters.Panel>
</Filters>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

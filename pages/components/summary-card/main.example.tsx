// @ts-expect-error no types from DS library
import SummaryCard from '@scottish-government/designsystem-react/dist/components/SummaryCard/SummaryCard';
// @ts-expect-error no types from DS library
import SummaryList from '@scottish-government/designsystem-react/dist/components/SummaryList/SummaryList';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SummaryCard title="Joe Bloggs">
    <SummaryCard.Action href="#foo">Change</SummaryCard.Action>
    <SummaryCard.Action onclick={() => console.log('delete clicked')}>Delete</SummaryCard.Action>
    <SummaryList>
        <SummaryList.Item title="Phone number">
            <SummaryList.Value>0123 456 7890</SummaryList.Value>
        </SummaryList.Item>

        <SummaryList.Item title="Address">
            <SummaryList.Value>
                Victoria Quay<br />Edinburgh<br />EH6 6QQ
            </SummaryList.Value>
        </SummaryList.Item>
    </SummaryList>
</SummaryCard>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

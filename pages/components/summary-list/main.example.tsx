// @ts-expect-error no types from DS library
import SummaryList from '@scottish-government/designsystem-react/dist/components/SummaryList/SummaryList';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SummaryList>
    <SummaryList.Item title="Name">
        <SummaryList.Value>Jane Smith</SummaryList.Value>
        <SummaryList.Action href="#foo">Change</SummaryList.Action>
        <SummaryList.Action onclick={() => console.log('delete clicked')}>Delete</SummaryList.Action>
    </SummaryList.Item>

    <SummaryList.Item title="Date of birth">
        <SummaryList.Value>13 April 2001</SummaryList.Value>
        <SummaryList.Action href="#bar">Change</SummaryList.Action>
    </SummaryList.Item>

    <SummaryList.Item title="Address">
        <SummaryList.Value>
            Scottish Government<br />St Andrew&apos;s House<br />Regent Road<br />Edinburgh<br />EH1 3DG
        </SummaryList.Value>
        <SummaryList.Action href="#baz">Change</SummaryList.Action>
    </SummaryList.Item>

    <SummaryList.Item title="Contact details">
        <SummaryList.Value name="Email">email@gov.scot</SummaryList.Value>
        <SummaryList.Value name="Telephone">0123 456 7890</SummaryList.Value>
        <SummaryList.Action href="foo">Change</SummaryList.Action>
        <SummaryList.Action onclick={() => console.log('delete clicked')}>Delete</SummaryList.Action>
    </SummaryList.Item>
</SummaryList>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

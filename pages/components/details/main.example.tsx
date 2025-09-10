// @ts-expect-error no types from DS library
import Details from '@scottish-government/designsystem-react/dist/components/Details/Details';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Details summary="I can't sign in">
    <p>Contact the design system team if you cannot sign in.</p>

    <p>Email <a href="mailto:designsystem@gov.scot">designsystem@gov.scot</a>.</p>
    <p>Or phone 0000 123 4567<br/>
        Monday to Friday, 9am to 5pm</p>
</Details>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

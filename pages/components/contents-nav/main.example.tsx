// @ts-expect-error no types from DS library
import ContentsNav from '@scottish-government/designsystem-react/dist/components/ContentsNav/ContentsNav';

import ExampleLayout from '../../../app/example-layout';

export const Content = <ContentsNav ariaLabel="Pages in this guide">
    <ContentsNav.Item isCurrent>Apply for Blue Badge</ContentsNav.Item>
    <ContentsNav.Item href="#2">Eligibility</ContentsNav.Item>
    <ContentsNav.Item href="#3">Using your Blue Badge</ContentsNav.Item>
    <ContentsNav.Item href="#4">Report a lost, stolen or misuesd Blue Badge</ContentsNav.Item>
    <ContentsNav.Item href="#5">Changing or handing back a Blue Badge</ContentsNav.Item>
</ContentsNav>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

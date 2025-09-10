// @ts-expect-error no types from DS library
import Accordion from '@scottish-government/designsystem-react/dist/components/Accordion/Accordion';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Accordion headingLevel="h1" id="accordion-example">
    <Accordion.Item id="accordion-1" title="Healthcare for veterans">
        <p>Veterans are entitled to the same healthcare as any citizen. And there
            are health care options and support available specifically for veterans.</p>
        <p>If you have a health condition that&apos;s related to your service, you&apos;re
            entitled to priority treatment based on clinical need.</p>
    </Accordion.Item>
    <Accordion.Item open id="accordion-2" title="Employability for veterans">
        <p>If you&apos;re looking for a job, there are several organisations that can help
            you <a href="#accordion-link">find a job or develop new skills</a>.</p>
    </Accordion.Item>
    <Accordion.Item id="accordion-3" title="Housing for veterans">
        <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
            there&apos;s support specifically for veterans.</p>
    </Accordion.Item>
</Accordion>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

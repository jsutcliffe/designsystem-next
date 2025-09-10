// @ts-expect-error no types from DS library
import ErrorSummary from '@scottish-government/designsystem-react/dist/components/ErrorSummary/ErrorSummary';

import ExampleLayout from '../../../app/example-layout';

export const Content = <ErrorSummary>
    <ErrorSummary.Item fragmentId="did-resolve">Did this resolve your issue?</ErrorSummary.Item>
    <ErrorSummary.Item fragmentId="what-topics">What topics are you interested in?</ErrorSummary.Item>
    <ErrorSummary.Item fragmentId="more-detail">Please provide more detail</ErrorSummary.Item>
</ErrorSummary>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

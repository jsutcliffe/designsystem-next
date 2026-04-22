import FeatureHeader from '@scottish-government/designsystem-react/src/components/FeatureHeader/FeatureHeader';
import ExampleLayout from '../../../app/example-layout';

export const Content = <FeatureHeader backgroundColor="secondary" hasCoverImage>
    <FeatureHeader.Primary title="Design System React">
        <p>This is the Scottish Government Design System as a React UI component library.</p>
    </FeatureHeader.Primary>
    <FeatureHeader.Secondary>
        <img src="/highland-cow.jpg" alt="" />
    </FeatureHeader.Secondary>
</FeatureHeader>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

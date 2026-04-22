import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Feature header"/>

        <div className="ds_layout__content">
            <Example path="./feature-header/main.example"/>

            <Configuration componentName="Feature header">
                <p><code>FeatureHeader</code> components use the following props:</p>
                <dl>
                    <dt><code>backgroundColor</code> (optional)</dt>
                    <dd>The background colour to use. Permitted values are <code>secondary</code>, <code>tertiary</code> and <code>brand</code>.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>hasCoverImage</code> (optional)</dt>
                    <dd>Makes the header image, if used, fill the available space. Boolean.</dd>
                    <dt><code>hasNoImagePadding</code> (optional)</dt>
                    <dd>Removes vertical padding from the header image. Boolean.</dd>
                    <dt><code>isFullWidth</code> (optional)</dt>
                    <dd>Spreads the feature header across the full page with. This inserts a <code>ds_wrapper</code> element inside the parent element. Boolean.</dd>
                    <dt><code>isWideText</code> (optional)</dt>
                    <dd>Uses two thirds of the header area for text when there's an image, instead of the default half and half split. Boolean.</dd>
                    <dt><code>isTopAlignImage</code> (optional)</dt>
                    <dd>Makes the image and text align to the top of the header container. Boolean.</dd>
                    <dt><code>tagName</code> (optional)</dt>
                    <dd>Tag name to use for the feature header container. Default is <code>div</code>.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Feature header primary (text)">
                <p><code>FeatureHeader.Primary</code> components use the following prop:</p>
                <dl>
                    <dt><code>title</code></dt>
                    <dd>The text content of the H1 in the feature header.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

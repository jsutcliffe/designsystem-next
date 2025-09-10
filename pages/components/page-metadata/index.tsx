import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Page metadata"/>

        <div className="ds_layout__content">
            <Example path="./page-metadata/main.example"/>

            <Example title="Inline metadata" path="./page-metadata/inline.example"/>

            <Configuration componentName="Page metadata">
                <p><code>Metadata</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>inline</code> (optional)</dt>
                    <dd>Makes the page metadata use the truncated &lsquo;inline&rsquo; display. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Medatata item">
                <p><code>Metadata</code> components can have any number of <code>Metadata.Item</code> children. Metadata item components can use the following props:</p>
                <dl>
                    <dt><code>name</code></dt>
                    <dd>The name or key of the metadata item. Boolean.</dd>
                </dl>
                <p>The value of the metadata item is provided by its children.</p>
            </Configuration>
        </div>
    </Layout>);
}

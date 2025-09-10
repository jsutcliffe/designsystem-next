import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Page header"/>

        <div className="ds_layout__content">
            <Example path="./page-header/main.example" />

            <Example title="Page header with metadata" path="./page-header/metadata.example" />

            <Configuration componentName="Page header">
                <p><code>PageHeader</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>label</code> (optional)</dt>
                    <dd>Text to use for a label shown above the H1 element. No label is displayed if there is no <code>label</code> prop provided.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the page header&apos;s H1 element.</dd>
                </dl>
                <p>Page header components can show metadata below the <code>H1</code> element. Do this by including a <a href="#section-page-metadata">page metadata</a> component as a child.</p>
            </Configuration>
        </div>
    </Layout>);
}

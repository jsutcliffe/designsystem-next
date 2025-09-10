import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Error summary"/>

        <div className="ds_layout__content">
            <Example path="./error-summary/main.example"/>

            <Configuration componentName="Error summary">
                <p><code>ErrorSummary</code> components can have use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>The title of the error summary. Default is &lsquo;There is a problem&rsquo;.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Error summary items">
                <p><code>ErrorSummary.Item</code> components can use the following props:</p>
                <dl>
                    <dt><code>fragmentId</code> (optional)</dt>
                    <dd>ID of the question or field to link to.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

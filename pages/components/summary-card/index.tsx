import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Summary card"/>

        <div className="ds_layout__content">
            <Example path="./summary-card/main.example"/>

            <Configuration componentName="Summary card">
                <p><code>SummaryCard</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingLevel</code> (optional)</dt>
                    <dd>Heading level to use for the summary card title. Default is <code>H3</code>.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title of the summary card.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Summary card actions">
                <p><code>SummaryCard.Action</code> components can have the following prop:</p>
                <dl>
                    <dt><code>href</code> (optional)</dt>
                    <dd>The destination URL. The action will be a button element if this is omitted.</dd>
                    <dt><code>onclick</code> (optional)</dt>
                    <dd>Function to fire in response to a click event.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

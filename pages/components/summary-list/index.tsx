import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Summary list"/>

        <div className="ds_layout__content">
            <Example path="./summary-list/main.example"/>

            <Configuration componentName="Summary list">
                <p><code>SummaryList</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>isBorderless</code> (optional)</dt>
                    <dd>Use the borderless display variant. Boolean.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Summary list items">
                <p><code>SummaryList.Item</code> components can have the following prop:</p>
                <dl>
                    <dt><code>actions</code> (optional)</dt>
                    <dd>Array of summary item actions data.</dd>
                    <dt><code>title</code></dt>
                    <dd>Title of the summary list item.</dd>
                    <dt><code>value</code> (optional)</dt>
                    <dd>Value of the summary item. Can be either a string or an array.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Summary list actions">
                <p><code>SummaryList.Action</code> components can have the following prop:</p>
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

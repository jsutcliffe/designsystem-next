import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Pagination"/>

        <div className="ds_layout__content">
            <Example path="./pagination/main.example"/>

            <Example title="Pagination at a middle page" path="./pagination/middle.example"/>

            <Example title="Pagination with larger padding" path="./pagination/padding.example"/>

            <Configuration componentName="Pagination">
                <p><code>Pagination</code> components can use the following props:</p>
                <dl>
                    <dt><code>ariaLabel</code> (optional)</dt>
                    <dd>Text to use for an <code>aria-label</code> attribute on the <code>nav</code> element. Default is &lsquo;Pages&rsquo;.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output. Used on all links in the pagination.</dd>
                    <dt><code>onClick</code> (optional)</dt>
                    <dd>Function to fire in response to a click event on pagination links.</dd>
                    <dt><code>padding</code> (optional)</dt>
                    <dd>Number of other pages to show on either side of the current page. Default is 1.</dd>
                    <dt><code>page</code></dt>
                    <dd>Current page number.</dd>
                    <dt><code>pattern</code> (optional)</dt>
                    <dd>A regex-ish pattern to use for the pagination links. The string <code>$1</code> will be replaced with the page number.<br />Default is <code>/search?page=$1</code>.</dd>
                    <dt><code>totalPages</code></dt>
                    <dd>Total number of pages.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

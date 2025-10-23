import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Search facets"/>

        <div className="ds_layout__content">
            <Example path="./search-facets/main.example"/>

            <Configuration componentName="Search facets">
                <p><code>Facets</code> components provide a wrapper and boilerplate around <code>Facets.Group</code> children.</p>
            </Configuration>

            <Configuration componentName="Search facets group">
                <p><code>Facets.Group</code> components can use the following props:</p>
                <dl>
                    <dt><code>joinContent</code> (optional)</dt>
                    <dd>Content to display between the facet items when there are multiple items in the group.</dd>
                    <dt><code>title</code></dt>
                    <dd>Title of the facet group.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Search facets item">
                <p><code>Facets.Item</code> components can use the following props:</p>
                <dl>
                    <dt><code>accessibleName</code> (optional)</dt>
                    <dd>Accessible name for the facet button. If not provided, the title will be used. This content becomes part of the facet button&lsquo;s <code>aria-label</code> attribute.</dd>
                    <dt><code>onClick</code> (optional)</dt>
                    <dd>Function to fire in response to a click event.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text content of the facet button</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

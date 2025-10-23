import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Search filters"/>

        <div className="ds_layout__content">
            <Example path="./search-filters/main.example"/>

            <Configuration componentName="Search filters">
                <p><code>Filters</code> components can use the following prop:</p>
                <dl>
                    <dt><code>searchResultsContainerId</code> (optional)</dt>
                    <dd>ID attribute of the search results container, used as in the href attribute of the search filters&lsquo; internal SkipLinks component. Default is <code>search-results</code>.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Search filter panel">
                <p><code>Filters.Panel</code> components are an implementation of the <code>Accordion.Item</code> component. They can use the following props:</p>
                <dl>
                    <dt><code>activeFilterCount</code> (optional)</dt>
                    <dd>Number of active filter fields in this panel.</dd>
                    <dt><code>isScrollable</code> (optional)</dt>
                    <dd>Adds internal scrollbars around the filter fields. Boolean.</dd>
                    <dt><code>legend</code></dt>
                    <dd>Content for the (visually hidden) legend element.</dd>
                    <dt><code>heading</code></dt>
                    <dd>Heading of the filter panel.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

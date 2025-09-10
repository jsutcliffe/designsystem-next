import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Site search"/>

        <div className="ds_layout__content">
            <Example height="400" path="./site-search/main.example"/>

            <Configuration componentName="Site search">
                <p><code>SiteSearch</code> components can use the following props:</p>
                <dl>
                    <dt><code>action</code> (optional)</dt>
                    <dd>The value of the search form&apos;s <code>action</code> atttribute. Default is <code>/search</code>.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>id</code></dt>
                    <dd>The value of the search input field&apos;s <code>id</code> attribute. Default is <code>site-search</code></dd>
                    <dt><code>method</code> (optional)</dt>
                    <dd>The form method to use. Default is <code>GET</code>.</dd>
                    <dt><code>name</code> (optional)</dt>
                    <dd>The value of the search field&apos;s <code>name</code> attribute. Default is <code>q</code>.</dd>
                    <dt><code>placeholder</code> (optional)</dt>
                    <dd>The value of the search field&apos;s <code>placeholder</code> attribute. Default is <code>Search</code>.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Autocomplete">
                <p>Autocomplete can be configured on a site search component by adding the following props:</p>
                <dl>
                    <dt><code>autocompleteEndpoint</code></dt>
                    <dd>The endpoint used by the autocomplete.</dd>
                    <dt><code>autocompleteSuggestionMappingFunction</code> (optional)</dt>
                    <dd>A JavaScript function that maps the results from the endpoint into the format that the Design System Autocomplete component expects.</dd>
                    <dt><code>minLength</code> (optional)</dt>
                    <dd>The number of characters that need to be entered before requests are sent to the endpoint. Default is <code>3</code>.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

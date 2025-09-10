import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Site header"/>

        <div className="ds_layout__content">
            <Example path="./site-header/main.example"/>

            <Configuration componentName="Site header">
                <p><code>SiteHeader</code> uses basic subcomponents as slots for its content.</p>
                <ul>
                    <li><code>SiteHeader.Navigation</code> expects a <code>SiteNavigation</code> component or equivalent</li>
                    <li><code>SiteHeader.Phase</code> expects a <code>PhaseBanner</code> component or equivalent</li>
                    <li><code>SiteHeader.Search</code> expects a <code>SiteSearch</code> component or equivalent</li>
                    <li><code>SiteHeader.Brand</code> is a special case, described separately below</li>
                </ul>
            </Configuration>

            <Configuration componentName="Site header brand">
                <p><code>SiteHeader.Brand</code> should have an image child for use as the site logo. <code>SiteHeader.Brand</code> components can use the following props:</p>
                <dl>
                    <dt><code>homeUrl</code></dt>
                    <dd>The URL of the home page. Default is <code>/</code>.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                    <dt><code>siteTitle</code> (optional)</dt>
                    <dd>Text to use in the site title.</dd>
                </dl>
            </Configuration>

        </div>
    </Layout>);
}

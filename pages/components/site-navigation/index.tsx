import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Site navigation"/>

        <div className="ds_layout__content">
            <Example path="./site-navigation/main.example"/>

            <Configuration componentName="Site navigation">
                <p><code>SiteNavigation</code> components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Site navigation items">
                <p><code>SiteNavigation.Item</code> components array can use the following props:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>isCurrent</code> (optional)</dt>
                    <dd>Whether this is the current page. Boolean. Default is false.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

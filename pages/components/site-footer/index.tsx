import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Site footer"/>

        <div className="ds_layout__content">
            <Example path="./site-footer/main.example"/>

            <Configuration componentName="Site footer">
                <p><code>SiteFooter</code> components can have <code>SiteFooter.Links</code>, <code>SiteFooter.Licensing</code> and <code>SiteFooter.Org</code> children. Site footer components can use the following property:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Site footer links">
                <p><code>SiteFooter.Links</code> components can have <code>SiteFooter.Link</code> children.</p>
                <p><code>SiteFooter.Link</code> components can have the following props:</p>
                <dl>
                    <dt><code>href</code> (optional)</dt>
                    <dd>The destination URL.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Site footer licensing">
                <p>This is a basic container for copyright information, including any logo you might want to use.</p>
            </Configuration>

            <Configuration componentName="Site footer org">
                <p>This is a basic container for an org logo. If you want the org logo to be wraped in a link, use the following propserties:</p>
                <dl>
                    <dt><code>href</code> (optional)</dt>
                    <dd>The destination URL.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>Title attribute of the link.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

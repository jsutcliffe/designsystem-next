import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Side navigation"/>

        <div className="ds_layout__content">
            <Example path="./side-navigation/main.example"/>

            <Configuration componentName="Side navigation">
                <p><code>SideNavigation</code> components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Side navigation list">
                <p><code>SideNavigation.List</code> components can use the following prop:</p>
                <dl>
                    <dt><code>isRoot</code> (optional)</dt>
                    <dd>Indicates that this is the root list in a nested structure. Required for mobile navigation.</dd>
                </dl>
                <p><code>SideNavigation.List</code> components can be children of <code>SideNavigation.Item</code> components to create a nested navigation structure.</p>
            </Configuration>

            <Configuration componentName="Side navigation item">
                <p><code>SideNavigation.Item</code> components can use the following props:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>isCurrent</code> (optional)</dt>
                    <dd>Whether this is the current page. The current page uses a <code>span</code> element and is not a link. Boolean.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

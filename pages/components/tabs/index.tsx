import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Tabs"/>

        <div className="ds_layout__content">
            <Example path="./tabs/main.example"/>

            <Configuration componentName="Tabs">
                <p><code>Tab</code> components can use the following props:</p>
                <dl>
                    <dt><code>baseId</code></dt>
                    <dd>A string that IDs for subcomponents are derived from.</dd>
                    <dt><code>bordered</code> (optional)</dt>
                    <dd>Whether to give each tab a border. Boolean. Default is <code>true</code>.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingLevel</code> (optional)</dt>
                    <dd>Heading level to use for the tab container&apos;s title. Default is <code>H2</code>.</dd>
                    <dt><code>manual</code> (optional)</dt>
                    <dd>Whether to require manual tab activation. Boolean. Default is <code>false</code>.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>The title of the tab list. Default is &lsquo;Contents&rsquo;.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Tab items">
                <p><code>Tabs.Item</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>id</code></dt>
                    <dd>The ID of the tab&apos;s content, required for correct linking of tab and content.</dd>
                    <dt><code>tabLabel</code></dt>
                    <dd>The label text of the item&apos;s tab.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

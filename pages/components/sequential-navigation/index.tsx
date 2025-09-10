import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Sequential navigation"/>

        <div className="ds_layout__content">
            <Example path="./sequential-navigation/main.example"/>

            <Configuration componentName="Sequential navigation">
                <p><code>SequentialNavigation</code> components use the following props:</p>
                <dl>
                    <dt><code>ariaLabel</code> (optional)</dt>
                    <dd>Text to use for an <code>aria-label</code> attribute on the <code>nav</code> element. Default is &lsquo;Article navigation&rsquo;.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Sequential navigation links">
                <p><code>SequentialNavigation.Next</code> and <code>SequentialNavigation.Previous</code> components use the following props:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>URL of the page being linked to.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                    <dt><code>textLabel</code> (optional)</dt>
                    <dd>String to use for the label that precedes the link text. Defaults to &lsquo;Previous&rsquo; and &lsquo;Next&rsquo;</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Hide this page"/>

        <div className="ds_layout__content">
            <Example nodisplay path="./hide-this-page/main.example"/>

            <Configuration componentName="Hide this page">
                <p><code>HideThisPage</code> components can have use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>escapeUrl</code> (optional)</dt>
                    <dd>The URL to take the user to. Defaults to <code>https://www.bbc.co.uk/weather</code>.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

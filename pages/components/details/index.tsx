import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Details"/>

        <div className="ds_layout__content">
            <Example path="./details/main.example"/>

            <Configuration componentName="Details">
                <p><code>Details</code> components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>summary</code></dt>
                    <dd>Text to use for the details component&apos;s &lsquo;summary&rsquo; element.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

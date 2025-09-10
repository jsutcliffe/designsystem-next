import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Inset text"/>

        <div className="ds_layout__content">
            <Example path="./inset-text/main.example"/>

            <Configuration componentName="Inset text">
                <p><code>InsetText</code> components can have use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

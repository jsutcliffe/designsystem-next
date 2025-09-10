import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Table"/>

        <div className="ds_layout__content">
            <Example path="./table/main.example"/>

            <Configuration componentName="Table">
                <p>The <code>Table</code> component is a basic wrapper around standard table elements that adds the Design System&apos;s <code>ds_table</code> CSS class and a prop for specifying table behaviour on small screens.</p>
                <p><code>Table</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>smallscreen</code> (optional)</dt>
                    <dd>The behaviour to use on small screens. Permitted values are <code>boxes</code> and <code>scrolling</code>.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

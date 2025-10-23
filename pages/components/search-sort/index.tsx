import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Search sort"/>

        <div className="ds_layout__content">
            <Example path="./search-sort/main.example"/>

            <Configuration componentName="Search sort">
                <p><code>SearchSort</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>id</code> (optional)</dt>
                    <dd>Value to use for the sort dropdown&apos;s <code>id</code> attribute. Default is &lsquo;sort-by&rsquo;.</dd>
                    <dt><code>label</code> (optional)</dt>
                    <dd>Text to use for the sort dropdown&apos;s associated label. Default is &lsquo;Sort by&rsquo;.</dd>
                    <dt><code>onApply</code> (optional)</dt>
                    <dd>Callback function to be called when the Apply sort button is clicked.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

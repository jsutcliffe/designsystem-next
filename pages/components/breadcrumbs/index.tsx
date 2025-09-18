import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Breadcrumbs"/>

        <div className="ds_layout__content">
            <Example path="./breadcrumbs/main.example"/>

            <Configuration componentName="Breadcrumb item">
                <p><code>Breadcrumbs.Item</code> components can use the following props:</p>
                <dl>
                    <dt><code>isHidden</code> (optional)</dt>
                    <dd>Applies a <code>visually-hidden</code> CSS class, for if you want to hide the last breadcrumb.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

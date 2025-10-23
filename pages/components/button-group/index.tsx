import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Button group"/>

        <div className="ds_layout__content">
            <Example path="./button-group/main.example" />

            <Configuration componentName="Button">
                <p><code>ButtonGroup</code> components can use the following propss</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>isInline</code> (optional)</dt>
                    <dd>Forces buttons to display inline (side by side) on small screens. Boolean.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

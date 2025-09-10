import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Back to top"/>

        <div className="ds_layout__content">
            <Example nodisplay path="./back-to-top/main.example"/>

            <Configuration componentName="Back to top">
                <p><code>BackToTop</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>href</code> (optional)</dt>
                    <dd>Fragment identifier for the target element. Default is <code>#page-top</code>.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

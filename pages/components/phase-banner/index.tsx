import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Phase banner"/>

        <div className="ds_layout__content">
            <Example path="./phase-banner/main.example"/>

            <Configuration componentName="Phase banner">
                <p>Phase banner components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>phaseName</code></dt>
                    <dd>The text for the phase banner&apos;s tag component.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

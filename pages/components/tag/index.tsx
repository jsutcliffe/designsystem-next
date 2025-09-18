import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Tag"/>

        <div className="ds_layout__content">
            <Example path="./tag/main.example" />

            <Example path="./tag/colour.example" />

            <Configuration componentName="Tag">
                <p><code>Tag</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>colour</code> (optional)</dt>
                    <dd>The tag colour to use. Supported values are:
                        <ul>
                            <li><code>grey</code></li>
                            <li><code>green</code></li>
                            <li><code>teal</code></li>
                            <li><strong><code>blue</code> (default)</strong></li>
                            <li><code>purple</code></li>
                            <li><code>pink</code></li>
                            <li><code>red</code></li>
                            <li><code>orange</code></li>
                            <li><code>yellow</code></li>
                        </ul>
                    </dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Aspect box"/>

        <div className="ds_layout__content">
            <Example path="./aspect-box/main.example" />
            <Example path="./aspect-box/square.example"/>

            <Configuration componentName="Aspect box">
                <p><code>AspectBox</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>ratio</code> (optional)</dt>
                    <dd>Aspect ratio to use. Supported values are:
                        <ul>
                            <li><code>1:1</code> (square)</li>
                            <li><code>4:3</code> (standard fullscreen)</li>
                            <li><strong><code>16:9</code> (standard widescreen) (default)</strong></li>
                            <li><code>21:9</code> (anamorphic widescreen)</li>
                        </ul>
                    </dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

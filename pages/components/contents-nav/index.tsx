

import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Contents navigation"/>

        <div className="ds_layout__content">
            <Example path="./contents-nav/main.example"/>

            <Configuration componentName="Contents navigation">
                <p><code>ContentsNav</code> components can use the following props:</p>
                <dl>
                    <dt><code>ariaLabel</code> (optional)</dt>
                    <dd>Text to use for the content nav&apos;s <code>aria-label</code> property, which is required for accessibility. Default is &lsquo;Pages in this section&rsquo;.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>The title for the contents nav. Default is &lsquo;Contents&rsquo;.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Contents nav items">
                <p><code>ContentsNav.Item</code> components nav items array can use the following propserties:</p>
                <dl>
                    <dt><code>href</code> (optional)</dt>
                    <dd>URL of the contents nav item</dd>
                    <dt><code>isCurrent</code> (optional)</dt>
                    <dd>Whether the nav item is for the current page. Boolean.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

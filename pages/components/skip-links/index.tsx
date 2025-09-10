import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Skip links"/>

        <div className="ds_layout__content">
            <Example nodisplay path="./skip-links/main.example"/>

            <Configuration componentName="Skip links">
                <p>If a <code>SkipLinks</code> has no children, it will insert a default <code>SkipLinks.Link</code> component, whose text and target element can be customised through the <code>mainContentId</code> and <code>mainLinkText</code> props.</p>
                <p><code>SkipLinks</code> components can use the following props:</p>
                <dl>
                    <dt><code>isStatic</code> (optional)</dt>
                    <dd>Use the &lsquo;static&rsquo; display variant, which makes the skip links use screen real estate when focused instead of being absolutely positioned.</dd>
                    <dt><code>mainContentId</code> (optional)</dt>
                    <dd>The <code>id</code> attribute of the &lsquo;main content&rsquo; element to link to. Default is <code>main-content</code>.</dd>
                    <dt><code>mainLinkText</code> (optional)</dt>
                    <dd>The text to use for the &lsquo;main content&rsquo; link. Default is &lsquo;Skip to main content&rsquo;.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Skip link items">
                <p><code>SkipLinks.Link</code> components use the following prop:</p>
                <dl>
                    <dt><code>fragmentId</code></dt>
                    <dd>ID of the destination element.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

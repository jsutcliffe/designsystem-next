import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Button"/>

        <div className="ds_layout__content">
            <Example path="./button/main.example" />

            <Example title="Button sizes "path="./button/sizes.example" />

            <Example title="Buttons with icons" path="./button/icons.example" />

            <Example title="Link buttons and button links" path="./button/link.example" />

            <Configuration componentName="Button">
                <p><code>Button</code> components can use the following props:</p>
                <dl>
                    <dt><code>buttonStyle</code> (optional)</dt>
                    <dd>The button style to use. Options are:
                        <ul>
                            <li><strong><code>primary</code> (default)</strong></li>
                            <li><code>secondary</code></li>
                        </ul>
                    </dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>hasLinkStyle</code> (optional)</dt>
                    <dd>Whether to make the button look like a link. Boolean.</dd>
                    <dt><code>href</code> (optional)</dt>
                    <dd><code>href</code> attribute to use on the button. If a href is specified, the button will use the HTML <code>a</code> element.</dd>
                    <dt><code>icon</code> (optional)</dt>
                    <dd>Name of the icon to use.</dd>
                    <dt><code>isIconLeft</code> (optional)</dt>
                    <dd>Whether a button&apos;s icon is aligned to the left (default is aligned to the right). Boolean.</dd>
                    <dt><code>isIconOnly</code> (optional)</dt>
                    <dd>Whether this is an &lsquo;icon only&rsquo; button. This will make the button&apos;s text (its child) be visually hidden but available to screen readers. Boolean, default is <code>false</code>.</dd>
                    <dt><code>isSmall</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; variant of a button. Boolean.</dd>
                    <dt><code>type</code> (optional)</dt>
                    <dd>The value for the <code>type</code> attribute of the button. Default is <code>button</code> but sometimes <code>submit</code> might be more appropriate.</dd>
                    <dt><code>width</code> (optional)</dt>
                    <dd>The button width to use. Options are:
                        <ul>
                            <li><strong><code>fluid</code> (default)</strong></li>
                            <li><code>fixed</code> </li>
                            <li><code>max</code> </li>
                        </ul>
                    </dd>
                </dl>
                </Configuration>
        </div>
    </Layout>);
}

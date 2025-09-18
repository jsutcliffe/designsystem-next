import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Radio button"/>

        <div className="ds_layout__content">
            <Example path="./radio/main.example"/>

            <Example title="Radio buttons with hint text" path="./radio/hint.example"/>

            <Configuration componentName="Radio group">
                <p>Use a <code>RadioGroup</code> component to group radio buttons. Radio groups can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>isInline</code> (optional)</dt>
                    <dd>Whether to display the radio buttons in the group inline instead of stacked. Boolean.</dd>
                    <dt><code>isSmall</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; radio button variant. Boolean.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value for the <code>name</code> attribute on radio buttons in the group.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Radio buttons">
                <p><code>RadioButton</code> components can use the following props:</p>
                <dl>
                    <dt><code>checked</code> (optional)</dt>
                    <dd>Whether the radio should be selected on load.</dd>
                    <dt><code>hintText</code> (optional)</dt>
                    <dd>Text to use for a radio button&apos;s hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the radio button&apos;s <code>id</code> attribute.</dd>
                    <dt><code>isSmall</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; radio button variant. Boolean. Alternatively you can set this on an ancestor <code>RadioGroup</code> component.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the radio button&apos;s associated label.</dd>
                    <dt><code>name</code> (optional)</dt>
                    <dd>Value to use for the radio button&apos;s <code>name</code> attribute. Alternatively you can set this on an ancestor <code>RadioGroup</code> component.</dd>
                    <dt><code>onBlur</code> (optional)</dt>
                    <dd>Function to fire in response to a blur event.</dd>
                    <dt><code>onChange</code> (optional)</dt>
                    <dd>Function to fire in response to a change event.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

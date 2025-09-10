import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Checkbox"/>

        <div className="ds_layout__content">
            <Example path="./checkbox/main.example"/>

            <Configuration componentName="Checkbox group">
                <p>Use a <code>CheckboxGroup</code> component to group checkboxes. <code>CheckboxGroup</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>small</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; radio button variant. Boolean.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Checkbox items">
                <p><code>Checkbox</code> components have the following properties:</p>
                <dl>
                    <dt><code>checked</code> (optional)</dt>
                    <dd>Whether the checkbox should be checked on load.</dd>
                    <dt><code>hintText</code> (optional)</dt>
                    <dd>Text to use for a checkbox&apos;s hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the checkbox&apos;s <code>id</code> attribute.</dd>
                    <dt><code>exclusive</code> (optional)</dt>
                    <dd>Whether this checkbox is an an exclusive checkbox (a &lsquo;none&rsquo; option). Boolean.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the checkbox&apos;s associated label.</dd>
                    <dt><code>name</code> (optional)</dt>
                    <dd>Value to use for the checkbox&apos;s <code>name</code> attribute. Will fall back to using the <code>id</code> prop if not provided.</dd>
                    <dt><code>onBlur</code> (optional)</dt>
                    <dd>Function to fire in response to a blur event.</dd>
                    <dt><code>onChange</code> (optional)</dt>
                    <dd>Function to fire in response to a change event.</dd>
                    <dt><code>small</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; checkbox variant. Boolean. Alternatively you can set this on an ancestor <code>CheckboxGroup</code> component.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

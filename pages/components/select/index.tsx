import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Select (dropdown)"/>

        <div className="ds_layout__content">
            <Example path="./select/main.example"/>

            <Configuration componentName="Select">
                <p><code>Select</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>defaultValue</code> (optional)</dt>
                    <dd>The ID of the option that you want selected on page load.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hasError</code> (optional)</dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>hintText</code> (optional)</dt>
                    <dd>Text to use for a select&apos;s hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the select&apos;s <code>id</code> attribute.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the select&apos;s associated label.</dd>
                    <dt><code>name</code> (optional)</dt>
                    <dd>Value to use for the select&apos;s <code>name</code> attribute. Will fall back to using the <code>id</code> prop if not provided.</dd>
                    <dt><code>onBlur</code> (optional)</dt>
                    <dd>Function to fire in response to a blur event.</dd>
                    <dt><code>onChange</code> (optional)</dt>
                    <dd>Function to fire in response to a change event.</dd>
                    <dt><code>placeholder</code> (optional)</dt>
                    <dd>Text to use for an optional unselected first option.</dd>
                    <dt><code>width</code> (optional)</dt>
                    <dd>The width to use for the <code>select</code> element. The options are the same as for <code>TextInput</code>.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

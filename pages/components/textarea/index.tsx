import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Textarea"/>

        <div className="ds_layout__content">
            <Example path="./textarea/main.example"/>

            <Example title="Textarea with character count" path="./textarea/count.example"/>

            <Configuration componentName="Textarea">
                <p><code>Textarea</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hasError</code> (optional)</dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>hintText</code> (optional)</dt>
                    <dd>Text to use for a textarea&apos;s hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the <code>id</code> attribute of the <code>textarea</code> element.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the textarea&apos;s associated label.</dd>
                    <dt><code>name</code> (optional)</dt>
                    <dd>Value to use for the <code>name</code> attribute of the <code>textarea</code> element.</dd>
                    <dt><code>onBlur</code> (optional)</dt>
                    <dd>Function to fire in response to a blur event.</dd>
                    <dt><code>onChange</code> (optional)</dt>
                    <dd>Function to fire in response to a change event.</dd>
                    <dt><code>placeholder</code> (optional)</dt>
                    <dd>Value to use for the <code>placeholder</code> attribute of the <code>textarea</code> element.</dd>
                    <dt><code>rows</code> (optional)</dt>
                    <dd>Value to use for the <code>rows</code> attribute of the <code>textarea</code> element. Default is <code>4</code>.</dd>
                    <dt><code>value</code> (optional)</dt>
                    <dd>The default value of the <code>textarea</code> element.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Character count">
                <p>Use these additional props for a textarea with a character count:</p>
                <dl>
                    <dt><code>countThreshold</code> (optional)</dt>
                    <dd>Percentage threshold to show the character count at.</dd>
                    <dt><code>maxlength</code></dt>
                    <dd>Maximum number of characters permitted.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

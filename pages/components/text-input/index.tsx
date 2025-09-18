import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Text input"/>

        <div className="ds_layout__content">
            <Example path="./text-input/main.example"/>

            <Example title="Text input with hint text" path="./text-input/hint.example"/>

            <Example title="Text input with associated button" path="./text-input/button.example"/>

            <Example title="Text input with character count" path="./text-input/count.example"/>

            <Example title="Text input with currency" path="./text-input/currency.example"/>

            <Configuration componentName="Text input">
                <p><code>TextInput</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hasError</code> (optional)</dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>hintText</code> (optional)</dt>
                    <dd>Text to use for a text input&apos;s hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the <code>id</code> attribute of the <code>input</code> element.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the text input&apos;s associated label.</dd>
                    <dt><code>name</code> (optional)</dt>
                    <dd>Value to use for the <code>name</code> attribute of the <code>input</code> element.</dd>
                    <dt><code>onBlur</code> (optional)</dt>
                    <dd>Function to fire in response to a blur event.</dd>
                    <dt><code>onChange</code> (optional)</dt>
                    <dd>Function to fire in response to a change event.</dd>
                    <dt><code>placeholder</code> (optional)</dt>
                    <dd>Value to use for the <code>placeholder</code> attribute of the <code>input</code> element.</dd>
                    <dt><code>type</code></dt>
                    <dd>Value to use for the <code>type</code> attribute of the <code>input</code> element. Default is <code>text</code>.</dd>
                    <dt><code>value</code> (optional)</dt>
                    <dd>The default value of the <code>input</code> element.</dd>
                    <dt><code>width</code> (optional)</dt>
                    <dd><p>The width to use for the <code>input</code> element. If no width is specified the text input is full-width. Supported values are:</p>
                        <ul>
                            <li><code>fixed-20</code> - 20 characters wide</li>
                            <li><code>fixed-10</code> - 10 characters wide</li>
                            <li><code>fixed-5</code> - 5 characters wide</li>
                            <li><code>fixed-4</code> - 4 characters wide</li>
                            <li><code>fixed-3</code> - 3 characters wide</li>
                            <li><code>fixed-2</code> - 2 characters wide</li>
                            <li><code>fluid-three-quarters</code> - three quarters of the width of the parent container</li>
                            <li><code>fluid-two-thirds</code> - two thirds of the width of the parent container</li>
                            <li><code>fluid-half</code> - half of the width of the parent container</li>
                            <li><code>fluid-one-third</code> - one third of the width of the parent container</li>
                            <li><code>fluid-one-quarter</code> - one quarter of the width of the parent container</li>
                        </ul>
                    </dd>
                </dl>
            </Configuration>

            <Configuration componentName="Text input with button">
                <p>Use these additional props for a text input with an associated button:</p>
                <dl>
                    <dt><code>buttonIcon</code></dt>
                    <dd>Name of the icon to use.</dd>
                    <dt><code>buttonText</code></dt>
                    <dd>Text content for the button (for screen readers).</dd>
                    <dt><code>hasButton</code></dt>
                    <dd>Whether the component has an associated button. Boolean.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Character count">
                <p>Use these additional props for a text input with a character count:</p>
                <dl>
                    <dt><code>countThreshold</code> (optional)</dt>
                    <dd>Percentage threshold to show the character count at.</dd>
                    <dt><code>maxlength</code></dt>
                    <dd>Maximum number of characters permitted.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Currency input">
                <p>Use these additional props for a currency text input:</p>
                <dl>
                    <dt><code>currencySymbol</code> (optional)</dt>
                    <dd>Currency symbol to use. Default is <code>£</code>.</dd>
                    <dt><code>isCurrency</code></dt>
                    <dd>Whether the component is a currency field. Boolean.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

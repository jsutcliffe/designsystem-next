import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Date picker"/>

        <div className="ds_layout__content">
            <Example path="./date-picker/main.example"/>

            <Example title="Date picker with date restrictions" path="./date-picker/restrictions.example"/>

            <Example title="Date picker with separate fields" path="./date-picker/separate.example"/>

            <Configuration componentName="Date picker">
                <p><code>DatePicker</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>disabledDates</code> (optional)</dt>
                    <dd>Space-separated list of dates to disable in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hasError</code> (optional)</dt>
                    <dd>Whether the date picker is in an error state. Boolean.</dd>
                    <dt><code>hintText</code> (optional)</dt>
                    <dd>Text to use for a date picker hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the <code>id</code> attribute of the date picker&apos;s <code>input</code> element. If the date picker is using multiple inputs, each field starts with the ID. For example, <code>myId-day</code>, <code>myId-month</code>, <code>myId-year</code>.</dd>
                    <dt><code>isMultiple</code> (optional)</dt>
                    <dd>Whether to display the day, month and year as separate fields. Boolean.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the date picker&apos;s associated label.</dd>
                    <dt><code>maxDate</code> (optional)</dt>
                    <dd>Latest selectable date in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                    <dt><code>minDate</code> (optional)</dt>
                    <dd>Earliest selectable date in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                    <dt><code>name</code> (optional)</dt>
                    <dd>Value to use for the <code>name</code> attribute of the date picker. The behaviour of this on date pickers with multiple input fields is the same as the behaviour of the <code>id</code> prop.</dd>
                    <dt><code>onBlur</code> (optional)</dt>
                    <dd>Function to fire in response to a blur event.</dd>
                    <dt><code>onChange</code> (optional)</dt>
                    <dd>Function to fire in response to a change event.</dd>
                    <dt><code>value</code> (optional)</dt>
                    <dd>The default value of the date picker.</dd>
                    <dt><code>width</code> (optional)</dt>
                    <dd>The width of the input element. See <a href="section-text-input">TextInput</a> for the available options. Default is <code>fixed-10</code>.</dd>
                </dl>

            </Configuration>
        </div>
    </Layout>);
}

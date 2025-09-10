import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Question"/>

        <div className="ds_layout__content">
            <Example title="Basic question" path="./question/main.example"/>

            <Example title="Question with error" path="./question/error.example"/>

            <Example title="Fieldset question" path="./question/fieldset.example"/>

            <Example title="Fieldset question with error" path="./question/fieldseterror.example"/>

            <Configuration componentName="Question">
                <p><code>Question</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text for a question&apos;s <code>ErrorMessage</code> component. For use when the question uses a fieldset.</dd>
                    <dt><code>hasError</code> (optional)</dt>
                    <dd>Whether the question is in an error state. Boolean.</dd>
                    <dt><code>hintText</code> (optional)</dt>
                    <dd>Text for a question&apos;s <code>HintText</code> component. For use when the question uses a fieldset.</dd>
                    <dt><code>legend</code> (optional)</dt>
                    <dd>Text for a question&apos;s <code>legend</code> element. Use when the question has a <code>tagName</code> of &lsquo;fieldset&rsquo;.</dd>
                    <dt><code>tagName</code> (optional)</dt>
                    <dd>HTML tag name to use for the question. Default is <code>div</code>, but <code>fieldset</code> will sometimes be more appropriate.</dd>
                </dl>

                <p>Questions are meaningless without one or more form fields, which should be provided as children.</p>
            </Configuration>
        </div>
    </Layout>);
}

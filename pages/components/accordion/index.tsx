import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Accordion" />

        <div className="ds_layout__content">

            <Example path="./accordion/main.example"/>

            <Configuration componentName="Accordion">
                <p><code>Accordion</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingLevel</code></dt>
                    <dd>Heading level to use for the accordion items&apos; titles. Default is <code>H3</code>.</dd>
                    <dt><code>hideOpenAll</code> (optional)</dt>
                    <dd>Do not show the &lsquo;open all&rsquo; button. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Accordion item">
                <p><code>AccordionItem</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingLevel</code> (optional)</dt>
                    <dd>Heading level to use for the accordion item&apos;s title. It is better to let the parent set this for all of its accordion items.</dd>
                    <dt><code>id</code></dt>
                    <dd>ID to use for the accordion item if you want to override the automatically generated default for any reason.</dd>
                    <dt><code>open</code> (optional)</dt>
                    <dd>Makes the accordion item display in an open state on page load.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

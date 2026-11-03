import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Notification message"/>

        <div className="ds_layout__content">
            <Example path="./confirmation-notification/main.example"/>

            <Configuration componentName="Confirmation notification">
                <p><code>ConfirmationNotification</code> components can use the following props:</p>
                <dl>
                    <dt><code>ariaLive</code> (optional)</dt>
                    <dd>Value for an <code>aria-live</code> attribute on the confirmation message, for cases where it&apos;s added to the page dynamically. Default is <code>polite</code>.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingLevel</code> (optional)</dt>
                    <dd>The heading level for the confirmation message&apos;s title. The default is <code>H3</code>. Changing the heading level does not alter the confirmation message&apos;s appearance.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

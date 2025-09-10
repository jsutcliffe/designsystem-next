import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Notification panel"/>

        <div className="ds_layout__content">
            <Example path="./notification-panel/main.example"/>

            <Configuration componentName="Notification panel">
                <p><code>NotificationPanel</code> components can use the following props:</p>
                <dl>
                    <dt><code>ariaLive</code> (optional)</dt>
                    <dd>Value for an <code>aria-live</code> attribute on the notification panel, for cases where it&apos;s added to the page dynamically. Default is <code>polite</code>.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingLevel</code> (optional)</dt>
                    <dd>The heading level for the notification panel&apos;s message&apos;s title. The default is H1. Changing the heading level does not alter the notification panel&apos;s appearance.</dd>
                    <dt><code>title</code></dt>
                    <dd>Title of the notification panel.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

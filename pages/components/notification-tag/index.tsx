import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Notification tag"/>

        <div className="ds_layout__content">
            <Example path="./notification-tag/dot.example"/>
            <Example path="./notification-tag/number.example"/>
            <Example path="./notification-tag/many.example"/>

            <Configuration componentName="Notification tag">
                <p><code>NotificationTag</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>description</code> (optional)</dt>
                    <dd>Hidden text added to the notification tag for additional context.</dd>
                    <dt><code>isHidden</code> (optional)</dt>
                    <dd>Applies <code>aria-hidden="true"</code>, for if you want to hide the notification tag from screen readers. Boolean.</dd>
                    <dt><code>label</code> (optional)</dt>
                    <dd>The (very short) text shown in the notification bubble. If omitted or empty, the bubble shows as a simple dot.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

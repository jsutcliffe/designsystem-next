import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Notification banner"/>

        <div className="ds_layout__content">
            <Example path="./notification-banner/main.example"/>

            <Example title="Notification banner with icon and close" path="./notification-banner/icon.example"/>

            <Configuration componentName="Notification banner">
                <p><code>NotificationBanner</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>hasColourIcon</code> (optional)</dt>
                    <dd>Makes the icon display in the alternative colour scheme (yellow). Boolean.</dd>
                    <dt><code>hasInverseIcon</code> (optional)</dt>
                    <dd>Makes the icon be inverted against a circle background. Boolean.</dd>
                    <dt><code>icon</code> (optional)</dt>
                    <dd>Shows the &lsquo;high priority&rsquo; icon on the notification banner. Boolean.</dd>
                    <dt><code>isDismissable</code> (optional)</dt>
                    <dd>Shows the &lsquo;close&rsquo; button on the notification banner. Boolean.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>A hidden title for the notification banner, useful for screen reader users. Default is &lsquo;Information&rsquo;.</dd>
                </dl>

                <p>Both <code>hasColourIcon</code> and <code>hasInverseIcon</code> can be used together. This combines the effects of both modifiers.</p>
            </Configuration>
        </div>
    </Layout>);
}

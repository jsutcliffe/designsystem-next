import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Cookie banner"/>

        <div className="ds_layout__content">
            <Example path="./cookie-banner/main.example"/>

            <Configuration componentName="Cookie banner">
                <p><code>CookieBanner</code> components can use the following props:</p>

                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>The title for the banner, hidden from visual users but present for screen readers. Default is &lsquo;Information&rsquo;.</dd>
                </dl>

                <p>Cookie banner buttons and links should be placed in a <code>CookieBanner.Buttons</code> subcomponent.</p>
            </Configuration>

            <h3>Cookie confirmation banner</h3>

            <p>Use a <code>NotificationBanner</code> for the confirmation message, with an additional CSS class for the &lsquo;success&rsquo; colourway.</p>

            <Example path="./cookie-banner/confirm.example"/>
        </div>
    </Layout>);
}

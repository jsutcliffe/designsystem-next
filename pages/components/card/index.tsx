import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';
import Link from 'next/link';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Card"/>

        <div className="ds_layout__content">
            <Example path="./card/main.example"/>

            <Configuration componentName="Card">
                <p><code>Card</code> components use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>hasSecondaryBackground</code> (optional)</dt>
                    <dd>Sets the card to have a secondary background colour.</dd>
                    <dt><code>headingLevel</code> (optional)</dt>
                    <dd>Heading level to use for the card&lsquo;s title. Default is <code>H2</code>.</dd>
                    <dt><code>href</code> (optional)</dt>
                    <dd><code>href</code> attribute for navigation card.</dd>
                    <dt><code>isAdaptive</code> (optional)</dt>
                    <dd>Makes the card display a horizontal layout when the card itself is wider than mobile size. Boolean.</dd>
                    <dt><code>isHorizontal</code> (optional)</dt>
                    <dd>Makes the card display a horizontal layout at all times. Boolean.</dd>
                    <dt><code>isHorizontalSmall</code> (optional)</dt>
                    <dd>Makes the card display a horizontal layout when the viewport is at mobile size. Boolean.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                    <dt><code>tagName</code> (optional)</dt>
                    <dd>HTML tag name to use for the card. Default is <code>div</code>.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Card media">
                <Example path="./card/media.example" />

                <p><code>Card.Media</code> components use the following props:</p>
                <dl>
                    <dt><code>isCover</code> (optional)</dt>
                    <dd>Makes the image fill the available space. Boolean.</dd>
                    <dt><code>mediaWidth</code> (optional)</dt>
                    <dd>Permitted values are <code>narrow</code> and <code>wide</code>.</dd>
                    <dt><code>ratio</code> (optional)</dt>
                    <dd>Aspect ratio to use. Supported values are:
                        <ul>
                            <li><code>1:1</code> (square)</li>
                            <li><code>4:3</code> (standard fullscreen)</li>
                            <li><strong><code>16:9</code> (standard widescreen) (default)</strong></li>
                            <li><code>21:9</code> (anamorphic widescreen)</li>
                        </ul>
                    </dd>
                </dl>
            </Configuration>

            <Configuration componentName="Card content header">
                <p><code>Card</code> components use the following props:</p>
                <dl>
                    <dt><code>title</code></dt>
                    <dd>Title of the card.</dd>
                    <dt><code>description</code> (optional)</dt>
                    <dd>Hidden text added to the title for additional context.</dd>
                </dl>
            </Configuration>


            <Configuration componentName="Card status tag">
                <Example path="./card/status-tag.example" />

                <p><code>Card.StatusTag</code> components implement <Link href="./tag">Tag</Link>. They use the following props:</p>
                <dl>
                    <dt><code>colour</code> (optional)</dt>
                    <dd>The tag colour to use.</dd>
                    <dt><code>isHidden</code> (optional)</dt>
                    <dd>Applies <code>aria-hidden="true"</code>, for if you want to hide the tag from screen readers. Boolean.</dd>
                </dl>
            </Configuration>


            <Configuration componentName="Card metadata">
                <Example path="./card/metadata.example" />

                <p><code>Card.Metadata</code> components behave the same way as <Link href="./page-metadata">PageMetadata</Link> components, with <code>isInline</code> active.</p>
            </Configuration>
        </div>
    </Layout>);
}

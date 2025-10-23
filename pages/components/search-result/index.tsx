import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';
import Link from 'next/link';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Search result"/>

        <div className="ds_layout__content">
            <Example path="./search-result/main.example"/>
            <Example path="./search-result/metadata.example"/>
            <Example path="./search-result/context.example"/>
            <Example path="./search-result/media.example"/>
            <Example path="./search-result/promoted.example"/>

            <Configuration componentName="Search result">
                <p><code>SearchResult</code> components can use the following props:</p>
                <dl>
                    <dt><code>href</code> (optional)</dt>
                    <dd>URL of the search result.</dd>
                    <dt><code>isPromoted</code> (optional)</dt>
                    <dd>Use the &lsquo;promoted&rsquo; display style. Boolean.</dd>
                    <dt><code>linkComponent</code> (optional)</dt>
                    <dd>Function that returns an element, to customise the output.</dd>
                    <dt><code>promotedTitle</code> (optional)</dt>
                    <dd>Title of the promoted box. Default is &lsquo;Recommended&rsquo;</dd>
                    <dt><code>title</code></dt>
                    <dd>Title of the search result.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Search result context">
                <p><code>SearchResult.Context</code> components can use the following prop:</p>
                <dl>
                    <dt><code>title</code> (optional)</dt>
                    <dd>Title of the context list. Default is &lsquo;Part of&rsquo;.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Search result meta">
                <p><code>SearchResult.Meta</code> components behave the same way as <Link href="./page-metadata">PageMetadata</Link> components, with <code>isInline</code> active.</p>
            </Configuration>

            <Configuration componentName="Search result media">
                <p><code>SearchResult.Media</code> components wrap an image child in an <Link href="./aspect-box">AspectBox</Link> component with a square aspect ratio.</p>
            </Configuration>
        </div>
    </Layout>);
}

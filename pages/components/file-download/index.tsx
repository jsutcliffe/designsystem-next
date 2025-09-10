import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="File download"/>

        <div className="ds_layout__content">
            <Example path="./file-download/main.example"/>

            <Configuration componentName="File download">
                <p><code>FileDownload</code> components use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>cover</code> (optional)</dt>
                    <dd>URL of a custom cover image.</dd>
                    <dt><code>highlighted</code> (optional)</dt>
                    <dd>Add a highlight to the file download. Boolean. Default is <code>false</code>.</dd>
                    <dt><code>icon</code> (optional)</dt>
                    <dd>Canned icon to use.</dd>
                    <dt><code>fileSize</code> (optional)</dt>
                    <dd>Description of the file size.</dd>
                    <dt><code>fileType</code> (optional)</dt>
                    <dd>A description of the file type.</dd>
                    <dt><code>fileUrl</code></dt>
                    <dd>The URL of the file to download.</dd>
                    <dt><code>title</code></dt>
                    <dd>The document title, used in the link text.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

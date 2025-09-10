import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="Task list"/>

        <div className="ds_layout__content">
            <Example path="./task-list/main.example"/>

            <Example title="Task list with grouped tasks" path="./task-list/groups.example"/>

            <Configuration componentName="Task list">
                <p><code>TaskList</code> components can have either <code>TaskList.Item</code> or <code>TaskList.Group</code> children. Task list components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingId</code> (optional)</dt>
                    <dd>ID of the task list&apos;s heading element.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title of the task list.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Task list item">
                <p><code>TaskList.Item</code> item components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>href</code> (optional)</dt>
                    <dd>The URL of the page to link to.</dd>
                    <dt><code>id</code> (optional)</dt>
                    <dd>The value of the task&apos;s <code>id</code> attribute.</dd>
                    <dt><code>isComplete</code> (optional)</dt>
                    <dd>Whether the task is complete. Boolean.</dd>
                    <dt><code>statusText</code> (optional)</dt>
                    <dd>The text to use for the task&apos;s status tag.</dd>
                    <dt><code>tagColour</code> (optional)</dt>
                    <dd>The colour to use for the task&apos;s status tag. Default is <code>grey</code>.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title of the task list.</dd>
                </dl>

                <p>Tasks can have additional content, provided as children of the task component.</p>
            </Configuration>

            <Configuration componentName="Task group">
                <p><code>TaskList.Group</code> components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>intro</code> (optional)</dt>
                    <dd>Text to put into an introduction paragraph above the group&apos;s tasks.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title of the task group.</dd>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

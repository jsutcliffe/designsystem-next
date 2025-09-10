// @ts-expect-error no types from DS library
import TaskList from '@scottish-government/designsystem-react/dist/components/TaskList/TaskList';

import ExampleLayout from '../../../app/example-layout';

export const Content = <TaskList
    title="Application incomplete"
>
    <TaskList.Item
        href="#conditions"
        id="task-conditions"
        isComplete
        statusText="Completed"
        title="Conditions"
    >
        Tell us about your conditions, symptoms and any sensory issues you have.
    </TaskList.Item>
    <TaskList.Item
        href="#in-progress"
        id="task-medications"
        statusText="In progress"
        title="Medications"
    >
        Tell us about any medication you need.
    </TaskList.Item>
    <TaskList.Item
        id="task-contacts"
        statusText="Cannot start yet"
        title="Contacts and supporting information"
    >
        Share any supporting documents and provide details of people we can talk to about you.
    </TaskList.Item>
</TaskList>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

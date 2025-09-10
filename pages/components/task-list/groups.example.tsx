// @ts-expect-error no types from DS library
import TaskList from '@scottish-government/designsystem-react/dist/components/TaskList/TaskList';

import ExampleLayout from '../../../app/example-layout';

export const Content = <TaskList
    title="Application incomplete"
>
    <TaskList.Group
        title="Provide your health details"
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
            isComplete
            statusText="Completed"
            title="Medications"
        >
            Tell us about any medication you need.
        </TaskList.Item>
        <TaskList.Item
            href="#contacts"
            id="task-contacts"
            isComplete
            statusText="Completed"
            title="Contacts and supporting information"
        >
            Share any supporting documents and provide details of people we can talk to about you.
        </TaskList.Item>
    </TaskList.Group>

    <TaskList.Group
        title="Tell us about your daily living and mobility circumstances"
        intro="This information will be used to check what additional benefits you may be able to apply for."
    >
        <TaskList.Item
            href="#preparing-food"
            id="task-preparing-food"
            statusText="In progress"
            tagColour="grey"
            title="Preparing food"
        >
            Questions about your ability to prepare a simple meal safely and any help you need to do this.
        </TaskList.Item>
        <TaskList.Item
            href="#taking-nutrition"
            id="task-taking-nutrition"
            statusText="Not started"
            tagColour="grey"
            title="Taking nutrition"
        >
            Questions about your ability to eat and drink and any help you need to do this.
        </TaskList.Item>
        <TaskList.Item
            href="#managing-therapy"
            id="task-managing-therapy"
            statusText="Not started"
            tagColour="grey"
            title="Managing therapy or monitoring a health condition"
        >
            Questions about any help you need to monitor changes in your health condition, take medication or do therapy at home.
        </TaskList.Item>
    </TaskList.Group>
</TaskList>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

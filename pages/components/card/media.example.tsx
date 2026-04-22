import Card from '@scottish-government/designsystem-react/src/components/Card/Card';
import NotificationTag from '@scottish-government/designsystem-react/src/components/NotificationTag/NotificationTag';
import Metadata from '@scottish-government/designsystem-react/src/components/PageMetadata/PageMetadata';
import ExampleLayout from '../../../app/example-layout';

export const Content = <Card
  headingLevel="h2"
  href="#foo"
  tagName="div"
>
  <Card.Media>
    <img
      alt=""
      src="/highland-cow.jpg"
    />
  </Card.Media>
  <Card.Content>
    <Card.ContentHeader
      description="Unread notifications, New release"
      title="About the Design System"
    >
    </Card.ContentHeader>
    <Card.ContentMain>
      <p>
        The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.
      </p>
    </Card.ContentMain>
  </Card.Content>
</Card>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

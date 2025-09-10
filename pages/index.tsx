import Layout from '../app/page-layout';
// @ts-expect-error no types from DS library
import WarningText from '@scottish-government/designsystem-react/dist/components/WarningText/WarningText';
import PageHeaderAndTitle from '../app/components/PageHeaderAndTitle';

export default function Home() {
  return (
    <Layout>
      <PageHeaderAndTitle title="Design System React"></PageHeaderAndTitle>

      <div className="ds_layout__content">
        <p>This is the Scottish Government Design System as a React UI component library.</p>

        <WarningText>
          This project is in an alpha state and could potentially receive large breaking changes
          with little warning while it is being developed.
        </WarningText>

        <h2>Feedback, help or support</h2>
        <p>If you need any help or want to give any feedback you can e-mail the Design System team
          at: <a href="mailto:designsystem@gov.scot">designsystem@gov.scot</a>.</p>
        <p>You can also get help on GitHub. Start or contribute to a <a href="https://github.com/scottish-government-design-system/designsystem-react/discussions">GitHub discussion</a>,
          or <a href="https://github.com/scottish-government-design-system/designsystem-react/issues">report an issue</a>.</p>

        <h2>Installation</h2>
        <p>We recommend installing the package using npm. The npm package includes the SG Design System as a dependency.</p>
        <p><code>npm install @scottish-government/designsystem-react</code></p>
      </div>
    </Layout>
  );
}

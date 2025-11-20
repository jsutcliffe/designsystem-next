import Head from 'next/head';
import metadata from '../metadata';
import Metadata from '@scottish-government/designsystem-react/dist/components/PageMetadata/PageMetadata';
import PageHeader from '@scottish-government/designsystem-react/dist/components/PageHeader/PageHeader';

export type PageHeaderAndTitleProps = {
    children?: React.ReactNode,
    prefix?: string,
    title?: string,
}

const PageHeaderAndTitle = ({
    children,
    prefix = 'SGDS React',
    title
}: PageHeaderAndTitleProps) => {
    const titleText = prefix + (title && `: ${title}`)
    return (
        <>
            <Head>
                <title>{titleText}</title>
            </Head>
            <div className="ds_layout__header">
                <PageHeader title={title} titleId="main-content">
                    <Metadata>
                        <Metadata.Item name="Last updated">{metadata.lastUpdated}</Metadata.Item>
                        <Metadata.Item name="Package version"><a href={metadata.package.url}>{metadata.package.version}</a></Metadata.Item>
                    </Metadata>
                    {children}
                </PageHeader>
            </div>
        </>
    )
}

export default PageHeaderAndTitle;

// @ts-expect-error no types from DS library
import FileDownload from '@scottish-government/designsystem-react/dist/components/FileDownload/FileDownload'

import ExampleLayout from '../../../app/example-layout';

export const Content = <FileDownload
    title="Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive"
    fileSize="333 kB"
    fileType="8 page PDF"
    fileUrl="#"
    icon="Pdf"/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

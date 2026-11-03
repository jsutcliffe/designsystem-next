import FileUpload from '@scottish-government/designsystem-react/src/components/FileUpload/FileUpload'

import ExampleLayout from '../../../app/example-layout';

export const Content = <FileUpload
    id="file-upload"
    label="Upload a file"
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

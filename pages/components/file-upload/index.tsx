import Configuration from '../../../app/components/Configuration';
import Example from '../../../app/components/Example';
import Layout from '../../../app/page-layout';
import PageHeaderAndTitle from '../../../app/components/PageHeaderAndTitle';

const DocItem = ({
    children,
    isOptional,
    propName,
    ...props
}: {
    children?: React.ReactNode
    isOptional?: boolean
    propName: string
}) => {
    return (<>
        <dt {...props}><code>{propName}</code> {isOptional && `(optional)`}</dt>
        <dd>{children}</dd>
    </>)
};

export default function Page() {
    return (<Layout>
        <PageHeaderAndTitle title="File upload"/>

        <div className="ds_layout__content">
            <Example path="./file-upload/main.example"/>

            <Configuration componentName="File upload">
                <p><code>FileUpload</code> components use the following props:</p>
                <dl>
                    <DocItem propName="accept" isOptional>
                        Value of the <code>accept</code> attribute on the <code>input</code> element
                    </DocItem>
                    <DocItem propName="capture" isOptional>
                        Value of the <code>capture</code> attribute on the <code>input</code> element
                    </DocItem>
                    <DocItem propName="className" isOptional>
                        A CSS class name to pass to the component.
                    </DocItem>
                    <DocItem propName="errorMessage" isOptional>
                        Text to use for an error message.
                    </DocItem>
                    <DocItem propName="hasError" isOptional>
                        Whether the field is in an error state. Boolean.
                    </DocItem>
                    <DocItem propName="hintText" isOptional>
                        Text to use for a text input&apos;s hint text.
                    </DocItem>
                    <DocItem propName="id">
                        Value to use for the <code>id</code> attribute of the <code>input</code> element.
                    </DocItem>
                    <DocItem propName="isMultiple" isOptional>
                        Whether the fie upload should accept multiple files. Boolean.
                    </DocItem>
                    <DocItem propName="label">
                        Text to use for the file input&apos;s associated label.
                    </DocItem>
                    <DocItem propName="name" isOptional>
                        Value to use for the <code>name</code> attribute of the <code>input</code> element.
                    </DocItem>
                    <DocItem propName="onBlur" isOptional>
                        Function to fire in response to a blur event.
                    </DocItem>
                    <DocItem propName="onChange" isOptional>
                        Function to fire in response to a blur event.
                    </DocItem>
                    <DocItem propName="text" isOptional>
                        Overrides for the default text in the component.
                    </DocItem>
                </dl>
            </Configuration>
        </div>
    </Layout>);
}

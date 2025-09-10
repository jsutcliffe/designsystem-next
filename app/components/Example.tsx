'use client';

import React, {useEffect, useRef, useState} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
// @ts-expect-error no types from DS library
import Details from '@scottish-government/designsystem-react/dist/components/Details/Details';
// @ts-expect-error no types from DS library
import Prism from 'prismjs';

type ExampleProps = {
    height?: string,
    nodisplay?: boolean,
    path: string,
    title?: string
}

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Example = function ({
    height = '0',
    nodisplay,
    path,
    title
}: ExampleProps) {
    const ref = useRef(null);

    const [codeSample, setCodeSample] = useState(<></>);

    if (path) {
        import(`../../pages/components/${path.replace('./', '')}`).then((p) => setCodeSample(p.Content))
    }

    type ReactNodeWithDisplayName = React.ReactNode & { type: { displayName: string, name: string } }

    function highlightCode(code: React.ReactElement) {
        return Prism.highlight(
            reactElementToJSXString(code, {
                displayName: (p: React.ReactNode) => {
                    const q = p as ReactNodeWithDisplayName;
                    let displayName = '';
                    if (typeof q.type === 'function') {
                        displayName = q.type.displayName || q.type.name;
                    } else if (typeof q.type === 'string') {
                        displayName = q.type;
                    }

                    return displayName;
                }
            }),
            Prism.languages.xml,
            'xml'
        );
    }

    useEffect(() => {
        if (ref.current) {
            // const iFrame = ref.current as HTMLIFrameElement;

            // const iFrameDoc = iFrame.contentDocument;
            // console.log(iFrameDoc)

            // if (!height) {
            //     waitForElement('.ds_accordion', iFrame.contentDocument).then((p) => {
            //         console.log('p',p)
            //         // resizeIFrameToFitContent(iFrame);
            //     //     setCodeSample(iFrame.contentWindow.document.querySelector('div').innerHTML);
            //     })
            //     // iFrame.onload = () => {
            //     //     resizeIFrameToFitContent(iFrame);
            //     //     setCodeSample(iFrame.contentWindow.document.querySelector('div').innerHTML);
            //     // }

            //     window.addEventListener('resize', () => resizeIFrameToFitContent(iFrame))
            // } else {
            //     window.setTimeout(() => {
            //         iFrame.contentWindow.document.querySelector('#example-inner').style.height = height + 'px';
            //     }, 1000);
            // }

            const iFrame = ref.current as HTMLIFrameElement;
            let intervalId: number;

            function resizeIFrameToFitContent(iFrame: HTMLIFrameElement) {
                intervalId = window.setInterval(() => {
                    // @ts-expect-error foo
                    if (parseInt(iFrame?.contentWindow?.document?.body?.scrollHeight) > 8) { // eslint-disable-next-line no-use-before-define
                        // @ts-expect-error foo
                        iFrame.height = (iFrame?.contentWindow?.document?.body?.scrollHeight).toString(); // eslint-disable-next-line no-use-before-define
                        // setCodeSample(iFrame.contentWindow.document.querySelector('#example-inner').innerHTML);
                        clearInterval(intervalId);
                    }
                }, 10);
             }

            resizeIFrameToFitContent(iFrame);
        }
    }, [ref, height]);

    return (
        <div>
            {title && (<h2>{title}</h2>)}
            <div className="dsjsx_example  overflow--large--2  overflow--xlarge--2">
                {!nodisplay && <iframe height={height} style={{border: 0, display: 'block'}} width="100%" ref={ref} src={path}></iframe>}
                {nodisplay && <p className="ds_no-margin">This component uses absolute or sticky positioning and is not displayed in this box.</p>}
            </div>

            <Details
                summary="JSX for this example"
            >
                <pre>
                    <code
                        dangerouslySetInnerHTML={{ __html: highlightCode(codeSample) }}
                    />
                </pre>
            </Details>
        </div>
    );
};

export default Example;

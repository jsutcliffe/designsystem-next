import { StrictMode } from 'react';
import "@scottish-government/design-system/dist/css/design-system.css";
import "./app.css";
import "./highlight.css";

import SkipLinks from '@scottish-government/designsystem-react/dist/components/skip-links/skip-links';
import SiteHeader from '@scottish-government/designsystem-react/dist/components/site-header/site-header';

export const metadata = {
    title: "SG Design System React",
    description: "A React implementation of the Scottish Government Design System",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="js-enabled">
            <head>
                <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700,400italic&display=swap' rel='stylesheet' type='text/css' />
            </head>
            <body>
                <StrictMode>
                    <SkipLinks/>
                    <span id="page-top"></span>
                    <div className="ds_page">
                        <div className="ds_page__top">
                            <SiteHeader
                                logo={{
                                    alt: 'The Scottish Government',
                                    src: './scottish-government.svg'
                                }}
                                siteTitle="Design System React"
                            />
                        </div>

                        <div className="ds_page__middle">
                            {children}
                        </div>

                        <div className="ds_page__bottom">
                            <footer className="ds_site-footer">
                                <div className="ds_wrapper">
                                    <div className="ds_site-footer__content">
                                        <div className="ds_site-footer__copyright">
                                            <a className="ds_site-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
                                                <img src="./ogl.svg" alt="Open Government License" />
                                            </a>
                                            <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except for graphic assets and where otherwise stated</p>
                                            <p>&copy; Crown Copyright</p>
                                        </div>

                                        <div className="ds_site-footer__org">
                                            <a className="ds_site-footer__org-link" title="The Scottish Government" href="https://www.gov.scot/">
                                                <img className="ds_site-footer__org-logo" src="./scottish-government--min.svg" alt="gov.scot" loading="lazy" width="300" height="55" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                </StrictMode>
            </body>
        </html>
    );
}

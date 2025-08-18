import { StrictMode } from 'react';
import "@scottish-government/design-system/dist/css/design-system.css";
import "./app.css";
import "./highlight.css";

import SkipLinks from '@scottish-government/designsystem-react/dist/components/SkipLinks/SkipLinks';
import SiteFooter from '@scottish-government/designsystem-react/dist/components/SiteFooter/SiteFooter';
import SiteHeader from '@scottish-government/designsystem-react/dist/components/SiteHeader/SiteHeader';

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
                            <header className="ds_site-header">
                                <div className="ds_wrapper">
                                    <div className="ds_site-header__content">
                                        <div className="ds_site-branding">
                                            <a href="/" className="ds_site-branding__logo  ds_site-branding__link">
                                                <img src="./scottish-government.svg" alt="gov.scot" loading="lazy" width="300"
                                                    height="58" className="ds_site-branding__logo-image" />
                                            </a>
                                            <div className="ds_site-branding__title">Design System React</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ds_phase-banner ">
                                    <div className="ds_wrapper">
                                        <p className="ds_phase-banner__content">
                                            <span className="ds_tag ds_phase-banner__tag">Alpha</span>
                                            <span className="ds_phase-banner__text">This a work in progress. Your input will help us to improve it. Report issues or raise questions on <a href="https://github.com/scottish-government-design-system/designsystem-react">GitHub</a>.</span>
                                        </p>
                                    </div>
                                </div>
                            </header>
                        </div>

                        <div className="ds_page__middle">
                            <div className="ds_wrapper">
                                {children}
                            </div>
                        </div>

                        <div className="ds_page__bottom">
                            <SiteFooter>
                                <SiteFooter.License>
                                    <img width="41" src="./ogl.svg" alt="Open Government License" />
                                    <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except for graphic assets and where otherwise stated</p>
                                    <p>&copy; Crown Copyright</p>
                                </SiteFooter.License>
                                <SiteFooter.Org title="The Scottish Government" href="https://www.gov.scot/">
                                    <img src="./scottish-government--min.svg" alt="gov.scot" loading="lazy" width="300" height="55" />
                                </SiteFooter.Org>
                            </SiteFooter>
                        </div>
                    </div>
                </StrictMode>
            </body>
        </html>
    );
}

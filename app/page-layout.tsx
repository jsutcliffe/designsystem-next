import { StrictMode } from 'react';

import Image from 'next/image';

import RootLayout from './root-layout';

// @ts-expect-error no types from DS library
import BackToTop from '@scottish-government/designsystem-react/dist/components/BackToTop/BackToTop';
// @ts-expect-error no types from DS library
import PhaseBanner from '@scottish-government/designsystem-react/dist/components/PhaseBanner/PhaseBanner';
// @ts-expect-error no types from DS library
import SkipLinks from '@scottish-government/designsystem-react/dist/components/SkipLinks/SkipLinks';
// @ts-expect-error no types from DS library
import SiteFooter from '@scottish-government/designsystem-react/dist/components/SiteFooter/SiteFooter';
// @ts-expect-error no types from DS library
import SiteHeader from '@scottish-government/designsystem-react/dist/components/SiteHeader/SiteHeader';

import DSJSXSideNavigation from './components/DSJSXSideNavigation';

/*
Package version <a href={metadata.package.url}>{metadata.package.version}</a>
*/

// export const metadata = {
//     title: "SG Design System React",
//     description: "A React implementation of the Scottish Government Design System",
// };

type LayoutProps = {
    children: React.ReactNode
}

export default function PageLayout({ children }: LayoutProps) {
    return (
        <RootLayout>
            <StrictMode>
                <div>
                    <SkipLinks/>
                    <span id="page-top"></span>
                    <div className="ds_page">
                        <div className="ds_page__top">
                            <SiteHeader>
                                <SiteHeader.Brand
                                    homeUrl="/"
                                    siteTitle="Design System React"
                                >
                                    <Image
                                        alt="gov.scot"
                                        height="58"
                                        loading="eager"
                                        src="../scottish-government.svg"
                                        width="300"
                                    />
                                </SiteHeader.Brand>
                                <SiteHeader.Phase>
                                    <PhaseBanner phaseName="Alpha">
                                        This a work in progress. Your input will help us to improve it. Report issues or raise questions on <a href="https://github.com/scottish-government-design-system/designsystem-react">GitHub</a>.
                                    </PhaseBanner>
                                </SiteHeader.Phase>
                            </SiteHeader>
                        </div>

                        <div className="ds_page__middle">
                            <div className="ds_wrapper">
                                <div className="ds_layout  ds_layout--pl-component">
                                    {children}

                                    <div className="ds_layout__sidebar">
                                        <DSJSXSideNavigation/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BackToTop/>

                        <div className="ds_page__bottom">
                            <SiteFooter>
                                <SiteFooter.License>
                                    <Image width="41" height="17" src="/ogl.svg" alt="Open Government License" />
                                    <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except for graphic assets and where otherwise stated</p>
                                    <p>&copy; Crown Copyright</p>
                                </SiteFooter.License>
                                <SiteFooter.Org title="The Scottish Government" href="https://www.gov.scot/">
                                    <Image src="/scottish-government--min.svg" alt="gov.scot" loading="lazy" width="300" height="55" />
                                </SiteFooter.Org>
                            </SiteFooter>
                        </div>
                    </div>
                </div>
            </StrictMode>
        </RootLayout>
    );
}

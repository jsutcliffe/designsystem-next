// 'use client';

// @ts-expect-error no types from DS library
import SideNavigation from '@scottish-government/designsystem-react/dist/components/SideNavigation/SideNavigation';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

type DSJSXSideNavigationProps = {
    children?: React.ReactNode,
    href: string,
    title: string
};

// To avoid having to repeatedly specify how to render link in child prop
function NextJsSideNavigationItem({
    href,
    children,
    title,
}: DSJSXSideNavigationProps) {
    const pathname = 'foo'; //usePathname();
    const isCurrent = href.indexOf(pathname) === 0;

    return (
        <SideNavigation.Item current={isCurrent} href={href} title={title} linkComponent={({ className, ...props }: {className: string}) => (
            <Link className={className} href={href} {...props}/>
        )}>{children}</SideNavigation.Item>
    );
}

const DSJSXSideNavigation = () => {
    return (
        <SideNavigation ariaLabel="Sections in this page">
            <SideNavigation.List isRoot>
                <NextJsSideNavigationItem href="/components/accordion" title="Accordion" />
                <NextJsSideNavigationItem href="/components/aspect-box" title="Aspect box" />
                <NextJsSideNavigationItem href="/components/back-to-top" title="Back to top" />
                <NextJsSideNavigationItem href="/components/breadcrumbs" title="Breadcrumbs" />
                <NextJsSideNavigationItem href="/components/button" title="Button" />
                <NextJsSideNavigationItem href="/components/checkbox" title="Checkbox" />
                <NextJsSideNavigationItem href="/components/confirmation-message" title="Confirmation message" />
                <NextJsSideNavigationItem href="/components/contents-nav" title="Contents nav" />
                <NextJsSideNavigationItem href="/components/cookie-banner" title="Cookie banner" />
                <NextJsSideNavigationItem href="/components/date-picker" title="Date picker" />
                <NextJsSideNavigationItem href="/components/details" title="Details" />
                <NextJsSideNavigationItem href="/components/error-summary" title="Error summary" />
                <NextJsSideNavigationItem href="/components/file-download" title="File download" />
                <NextJsSideNavigationItem href="/components/hide-this-page" title="Hide this page" />
                <NextJsSideNavigationItem href="/components/inset-text" title="Inset text" />
                <NextJsSideNavigationItem href="/components/notification-banner" title="Notification banner" />
                <NextJsSideNavigationItem href="/components/notification-panel" title="Notification panel" />
                <NextJsSideNavigationItem href="/components/page-header" title="Page header" />
                <NextJsSideNavigationItem href="/components/page-metadata" title="Page metadata" />
                <NextJsSideNavigationItem href="/components/pagination" title="Pagination" />
                <NextJsSideNavigationItem href="/components/phase-banner" title="Phase banner" />
                <NextJsSideNavigationItem href="/components/question" title="Question" />
                <NextJsSideNavigationItem href="/components/radio" title="Radio button" />
                <NextJsSideNavigationItem href="/components/select" title="Select (dropdown)" />
                <NextJsSideNavigationItem href="/components/sequential-navigation" title="Sequential navigation" />
                <NextJsSideNavigationItem href="/components/side-navigation" title="Side navigation" />
                <NextJsSideNavigationItem href="/components/site-footer" title="Site footer" />
                <NextJsSideNavigationItem href="/components/site-header" title="Site header" />
                <NextJsSideNavigationItem href="/components/site-navigation" title="Site navigation" />
                <NextJsSideNavigationItem href="/components/site-search" title="Site search" />
                <NextJsSideNavigationItem href="/components/skip-links" title="Skip links" />
                <NextJsSideNavigationItem href="/components/summary-card" title="Summary card" />
                <NextJsSideNavigationItem href="/components/summary-list" title="Summary list" />
                <NextJsSideNavigationItem href="/components/table" title="Table" />
                <NextJsSideNavigationItem href="/components/tabs" title="Tabs" />
                <NextJsSideNavigationItem href="/components/tag" title="Tag" />
                <NextJsSideNavigationItem href="/components/task-list" title="Task list" />
                <NextJsSideNavigationItem href="/components/text-input" title="Text input" />
                <NextJsSideNavigationItem href="/components/textarea" title="Textarea" />
                <NextJsSideNavigationItem href="/components/warning-text" title="Warning text" />
            </SideNavigation.List>
        </SideNavigation>
    );
}

export default DSJSXSideNavigation;

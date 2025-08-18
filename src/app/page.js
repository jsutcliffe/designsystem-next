'use client';

// "OFFICIAL" COMPONENTS

import Accordion from '@scottish-government/designsystem-react/dist/components/Accordion/Accordion';
import AspectBox from '@scottish-government/designsystem-react/dist/components/AspectBox/AspectBox';
import BackToTop from '@scottish-government/designsystem-react/dist/components/BackToTop/BackToTop';
import Breadcrumbs from '@scottish-government/designsystem-react/dist/components/Breadcrumbs/Breadcrumbs';
import Button from '@scottish-government/designsystem-react/dist/components/Button/Button';
import Checkbox from '@scottish-government/designsystem-react/dist/components/Checkbox/Checkbox';
import CheckboxGroup from '@scottish-government/designsystem-react/dist/components/Checkbox/CheckboxGroup';
import ConfirmationMessage from '@scottish-government/designsystem-react/dist/components/ConfirmationMessage/ConfirmationMessage';
// contact details
import CookieBanner from '@scottish-government/designsystem-react/dist/components/CookieBanner/CookieBanner';
import DatePicker from '@scottish-government/designsystem-react/dist/components/DatePicker/DatePicker';
import Details from '@scottish-government/designsystem-react/dist/components/Details/Details';
import ErrorMessage from '@scottish-government/designsystem-react/dist/components/ErrorMessage/ErrorMessage';
import ErrorSummary from '@scottish-government/designsystem-react/dist/components/ErrorSummary/ErrorSummary';
// feature header
import FileDownload from '@scottish-government/designsystem-react/dist/components/FileDownload/FileDownload';
import HideThisPage from '@scottish-government/designsystem-react/dist/components/HideThisPage/HideThisPage';
import InsetText from '@scottish-government/designsystem-react/dist/components/InsetText/InsetText';
import Metadata from '@scottish-government/designsystem-react/dist/components/PageMetadata/PageMetadata';
import NotificationBanner from '@scottish-government/designsystem-react/dist/components/NotificationBanner/NotificationBanner';
import NotificationPanel from '@scottish-government/designsystem-react/dist/components/NotificationPanel/NotificationPanel';
import PageHeader from '@scottish-government/designsystem-react/dist/components/PageHeader/PageHeader';
import Pagination from '@scottish-government/designsystem-react/dist/components/Pagination/Pagination';
import PhaseBanner from '@scottish-government/designsystem-react/dist/components/PhaseBanner/PhaseBanner';
import Question from '@scottish-government/designsystem-react/dist/components/Question/Question';
import RadioButton from '@scottish-government/designsystem-react/dist/components/RadioButton/RadioButton';
import RadioGroup from '@scottish-government/designsystem-react/dist/components/RadioButton/RadioGroup';
import Select from '@scottish-government/designsystem-react/dist/components/Select/Select';
import SequentialNavigation from '@scottish-government/designsystem-react/dist/components/SequentialNavigation/SequentialNavigation';
import SideNavigation from '@scottish-government/designsystem-react/dist/components/SideNavigation/SideNavigation';
import SiteFooter from '@scottish-government/designsystem-react/dist/components/SiteFooter/SiteFooter';
import SiteHeader from '@scottish-government/designsystem-react/dist/components/SiteHeader/SiteHeader';
import SiteNavigation from '@scottish-government/designsystem-react/dist/components/SiteNavigation/SiteNavigation';
import SiteSearch from '@scottish-government/designsystem-react/dist/components/SiteSearch/SiteSearch';
import SkipLinks from '@scottish-government/designsystem-react/dist/components/SkipLinks/SkipLinks';
import SummaryCard from '@scottish-government/designsystem-react/dist/components/SummaryCard/SummaryCard';
import SummaryList from '@scottish-government/designsystem-react/dist/components/SummaryList/SummaryList';
import Table from '@scottish-government/designsystem-react/dist/components/Table/Table';
import Tabs from '@scottish-government/designsystem-react/dist/components/Tabs/Tabs';
import Tag from '@scottish-government/designsystem-react/dist/components/Tag/Tag';
import Textarea from '@scottish-government/designsystem-react/dist/components/Textarea/Textarea';
import TextInput from '@scottish-government/designsystem-react/dist/components/TextInput/TextInput';
import WarningText from '@scottish-government/designsystem-react/dist/components/WarningText/WarningText';

// SUPPORTING COMPONENTS

import ScreenReaderText from '@scottish-government/designsystem-react/dist/common/ScreenReaderText';

// UNPUBLISHED COMPONENTS

// article aside
// back link
// card
// category item
// category list
// content label
import ContentsNav from '@scottish-government/designsystem-react/dist/components/ContentsNav/ContentsNav';
import Icon from '@scottish-government/designsystem-react/dist/common/Icon';
// link item (basically category item?)
// link list (found in a page block on dynamic issue hub)
// search controls
// search result
// search results
// site branding
// sort options
// step navigation (enhanced accordion)
import TaskList from '@scottish-government/designsystem-react/dist/components/TaskList/TaskList';
// field group
// label (do we need a JSX label?)
// prefilled value list (part of summary list)

// BASE STYLES

// leader
// wrapper

import Configuration from './components/configuration';
import Example from './components/example';
import lastUpdated from './lastUpdated';

const suggestionMappingFunction = function (suggestionsObj) {
    const responseObj = JSON.parse(suggestionsObj.response).map(suggestionsObj => ({
        key: '',
        displayText: suggestionsObj,
        weight: '',
        type: '',
        category: ''
    }));
    const filteredResults = responseObj.filter(item => (item.displayText.toLowerCase().indexOf(document.getElementById('site-search').value.toLowerCase()) > -1));

    return filteredResults.slice(0,6);
}

export default function Home() {

    return (
        <>
            <main id="main-content">
                <PageHeader
                    title="Design System React components"
                >
                    <Metadata>
                        <Metadata.Item name="Last updated">{lastUpdated}</Metadata.Item>
                    </Metadata>
                </PageHeader>

                <ContentsNav ariaLabel="Sections in this page">
                    <ContentsNav.Item href="#section-accordion">Accordion</ContentsNav.Item>
                    <ContentsNav.Item href="#section-aspect-box">Aspect box</ContentsNav.Item>
                    <ContentsNav.Item href="#section-back-to-top">Back to top</ContentsNav.Item>
                    <ContentsNav.Item href="#section-breadcrumbs">Breadcrumbs</ContentsNav.Item>
                    <ContentsNav.Item href="#section-button">Button</ContentsNav.Item>
                    <ContentsNav.Item href="#section-checkbox">Checkbox</ContentsNav.Item>
                    <ContentsNav.Item href="#section-confirmation-message">Confirmation message</ContentsNav.Item>
                    <ContentsNav.Item href="#section-contents-nav">Contents nav</ContentsNav.Item>
                    <ContentsNav.Item href="#section-cookie-banner">Cookie banner</ContentsNav.Item>
                    <ContentsNav.Item href="#section-date-picker">Date picker</ContentsNav.Item>
                    <ContentsNav.Item href="#section-details">Details</ContentsNav.Item>
                    <ContentsNav.Item href="#section-error-summary">Error summary</ContentsNav.Item>
                    <ContentsNav.Item href="#section-file-download">File download</ContentsNav.Item>
                    <ContentsNav.Item href="#section-hide-this-page">Hide this page</ContentsNav.Item>
                    <ContentsNav.Item href="#section-inset-text">Inset text</ContentsNav.Item>
                    <ContentsNav.Item href="#section-notification-banner">Notification banner</ContentsNav.Item>
                    <ContentsNav.Item href="#section-notification-panel">Notification panel</ContentsNav.Item>
                    <ContentsNav.Item href="#section-page-header">Page header</ContentsNav.Item>
                    <ContentsNav.Item href="#section-page-metadata">Page metadata</ContentsNav.Item>
                    <ContentsNav.Item href="#section-pagination">Pagination</ContentsNav.Item>
                    <ContentsNav.Item href="#section-phase-banner">Phase banner</ContentsNav.Item>
                    <ContentsNav.Item href="#section-question">Question</ContentsNav.Item>
                    <ContentsNav.Item href="#section-radio">Radio button</ContentsNav.Item>
                    <ContentsNav.Item href="#section-select">Select (dropdown)</ContentsNav.Item>
                    <ContentsNav.Item href="#section-sequential-navigation">Sequential navigation</ContentsNav.Item>
                    <ContentsNav.Item href="#section-side-navigation">Side navigation</ContentsNav.Item>
                    <ContentsNav.Item href="#section-site-footer">Site footer</ContentsNav.Item>
                    <ContentsNav.Item href="#section-site-header">Site header</ContentsNav.Item>
                    <ContentsNav.Item href="#section-site-navigation">Site navigation</ContentsNav.Item>
                    <ContentsNav.Item href="#section-site-search">Site search</ContentsNav.Item>
                    <ContentsNav.Item href="#section-skip-links">Skip links</ContentsNav.Item>
                    <ContentsNav.Item href="#section-summary-card">Summary card</ContentsNav.Item>
                    <ContentsNav.Item href="#section-summary-list">Summary list</ContentsNav.Item>
                    <ContentsNav.Item href="#section-table">Table</ContentsNav.Item>
                    <ContentsNav.Item href="#section-tabs">Tabs</ContentsNav.Item>
                    <ContentsNav.Item href="#section-tag">Tag</ContentsNav.Item>
                    <ContentsNav.Item href="#section-task-list">Task list</ContentsNav.Item>
                    <ContentsNav.Item href="#section-text-input">Text input</ContentsNav.Item>
                    <ContentsNav.Item href="#section-textarea">Textarea</ContentsNav.Item>
                </ContentsNav>




                    {/* <ContentsLink href="#section-error-message">Error message</ContentsLink> */}
                    {/* <ContentsLink href="#section-hint-text">Hint text</ContentsLink> */}
                    {/* <ContentsLink href="#section-icon">Icon</ContentsLink> */}
                    {/* <ContentsLink href="#section-screen-reader-text">Screen reader text</ContentsLink> */}







                <h2 className="dsjsx_example-title" id="section-accordion">Accordion</h2>

                <Example>
                    <Accordion id="accordion-example">
                        <Accordion.Item id="accordion-1" title="Healthcare for veterans">
                            <p>Veterans are entitled to the same healthcare as any citizen. And there
                                are health care options and support available specifically for veterans.</p>
                            <p>If you have a health condition that&apos;s related to your service, you&apos;re
                                entitled to priority treatment based on clinical need.</p>
                        </Accordion.Item>
                        <Accordion.Item open id="accordion-2" title="Employability for veterans">
                            <p>If you&apos;re looking for a job, there are several organisations that can help
                                you <a href="#accordion-link">find a job or develop new skills</a>.</p>
                        </Accordion.Item>
                        <Accordion.Item id="accordion-3" title="Housing for veterans">
                            <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                                there&apos;s support specifically for veterans.</p>
                        </Accordion.Item>
                    </Accordion>
                </Example>

                <Configuration componentName="Accordion">
                    <p><code>Accordion</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>headingLevel</code></dt>
                        <dd>Heading level to use for the accordion items&apos; titles. Default is <code>H3</code>.</dd>
                        <dt><code>hideOpenAll</code> (optional)</dt>
                        <dd>Do not show the "open all" button. Boolean.</dd>
                    </dl>
                </Configuration>
                <Configuration componentName="Accordion item">
                    <p><code>AccordionItem</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>headingLevel</code> (optional)</dt>
                        <dd>Heading level to use for the accordion item&apos;s title. It is better to let the parent set this for all of its accordion items.</dd>
                        <dt><code>id</code></dt>
                        <dd>ID to use for the accordion item if you want to override the automatically generated default for any reason.</dd>
                        <dt><code>open</code> (optional)</dt>
                        <dd>Makes the accordion item display in an open state on page load.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-aspect-box">Aspect box</h2>

                <Example>
                    <AspectBox>
                        <img src="./highland-cow.jpg" alt="" />
                    </AspectBox>
                </Example>

                <Example>
                    <AspectBox ratio="1:1">
                        <img src="./highland-cow.jpg" alt="" />
                    </AspectBox>
                </Example>

                <Configuration componentName="Aspect box">
                    <p><code>AspectBox</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>ratio</code> (optional)</dt>
                        <dd>Aspect ratio to use. Supported values are:
                            <ul>
                                <li><code>1:1</code> (square)</li>
                                <li><code>4:3</code> (standard fullscreen)</li>
                                <li><strong><code>16:9</code> (standard widescreen) (default)</strong></li>
                                <li><code>21:9</code> (anamorphic widescreen)</li>
                            </ul>
                        </dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-back-to-top">Back to top</h2>

                <Example nodisplay>
                    <BackToTop />
                </Example>

                <Configuration componentName="Back to top">
                    <p><code>BackToTop</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>href</code> (optional)</dt>
                        <dd>Fragment identifier for the target element. Default is <code>#page-top</code>.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-breadcrumbs">Breadcrumbs</h2>

                <Example>
                    <Breadcrumbs>
                        <Breadcrumbs.Item href="#home">Home</Breadcrumbs.Item>
                        <Breadcrumbs.Item href="#category">Category</Breadcrumbs.Item>
                        <Breadcrumbs.Item>Page</Breadcrumbs.Item>
                    </Breadcrumbs>
                </Example>

                <Configuration componentName="Breadcrumb item">
                    <p><code>Breadcrumbs.Item</code> components can use the following props:</p>
                    <dl>
                        <dt><code>hidden</code> (optional)</dt>
                        <dd>Applies a <code>visually-hidden</code> CSS class, for if you want to hide the last breadcrumb.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-button">Button</h2>

                <Example title="Button styles">
                    <Button>Primary button</Button><br />
                    <Button buttonStyle="secondary">Secondary button</Button><br />
                    <Button disabled>Disabled button</Button>
                </Example>

                <Example title="Button sizes">
                    <Button>Fluid-width button</Button><br />
                    <Button width="fixed">Fixed-width button</Button><br />
                    <Button width="max">Max-width button</Button><br />
                    <Button small>Small button</Button>
                </Example>

                <Example title="Buttons with icons">
                    <Button icon="ChevronRight">
                        Button with icon
                    </Button><br />
                    <Button iconLeft icon="ChevronLeft">
                        Button with left icon
                    </Button><br />
                    <Button iconOnly icon="Search">
                        Search
                    </Button>
                </Example>

                <Example title="Link buttons and button links">
                    <Button href="#bananas">Link styled as button</Button><br />
                    <Button styleAsLink>Button styled as link</Button>
                </Example>

                <Configuration componentName="Button">
                    <p><code>Button</code> components can use the following props:</p>
                    <dl>
                        <dt><code>buttonStyle</code> (optional)</dt>
                        <dd>The button style to use. Options are:
                            <ul>
                                <li><strong><code>primary</code> (default)</strong></li>
                                <li><code>secondary</code></li>
                            </ul>
                        </dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>icon</code> (optional)</dt>
                        <dd>Name of the icon to use from the icon stack.</dd>
                        <dt><code>iconLeft</code> (optional)</dt>
                        <dd>Whether a button&apos;s icon is aligned to the left (default is aligned to the right). Boolean.</dd>
                        <dt><code>iconOnly</code> (optional)</dt>
                        <dd>Whether this is an &lsquo;icon only&rsquo; button. This will make the button&apos;s text (its child) be visually hidden but available to screen readers. Boolean, default is <code>false</code>.</dd>
                        <dt><code>href</code> (optional)</dt>
                        <dd><code>href</code> attribute to use on the button. If a href is specified, the button will use the HTML <code>a</code> element.</dd>
                        <dt><code>small</code> (optional)</dt>
                        <dd>Whether to use the &lsquo;small&rsquo; variant of a button. Boolean.</dd>
                        <dt><code>styleAsLink</code> (optional)</dt>
                        <dd>Whether to make the button look like a link. Boolean.</dd>
                        <dt><code>type</code> (optional)</dt>
                        <dd>The value for the <code>type</code> attribute of the button. Default is <code>button</code> but sometimes <code>submit</code> might be more appropriate.</dd>
                        <dt><code>width</code> (optional)</dt>
                        <dd>The button width to use. Options are:
                            <ul>
                                <li><strong><code>fluid</code> (default)</strong></li>
                                <li><code>fixed</code> </li>
                                <li><code>max</code> </li>
                            </ul>
                        </dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-checkbox">Checkbox</h2>

                <Example>
                    <CheckboxGroup>
                        <Checkbox
                            id="universal-credit"
                            label="Universal Credit"
                            checked
                        />
                        <Checkbox
                            id="pension-credit"
                            label="Pension Credit"
                        />
                        <Checkbox
                            id="jsa"
                            label="Income-based Job Seeker's Allowance"
                        />
                        <Checkbox
                            id="none"
                            label="No, I do not receive any of these benefits"
                            exclusive
                        />
                    </CheckboxGroup>
                </Example>

                <Configuration componentName="Checkbox group">
                    <p>Use a <code>CheckboxGroup</code> component to group checkboxes. <code>CheckboxGroup</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>small</code> (optional)</dt>
                        <dd>Whether to use the &lsquo;small&rsquo; radio button variant. Boolean.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Checkbox items">
                    <p><code>Checkbox</code> components have the following properties:</p>
                    <dl>
                        <dt><code>checked</code> (optional)</dt>
                        <dd>Whether the checkbox should be checked on load.</dd>
                        <dt><code>hintText</code> (optional)</dt>
                        <dd>Text to use for a checkbox&apos;s hint text.</dd>
                        <dt><code>id</code></dt>
                        <dd>Value to use for the checkbox&apos;s <code>id</code> attribute.</dd>
                        <dt><code>exclusive</code> (optional)</dt>
                        <dd>Whether this checkbox is an an exclusive checkbox (a &lsquo;none&rsquo; option). Boolean.</dd>
                        <dt><code>label</code></dt>
                        <dd>Text to use for the checkbox&apos;s associated label.</dd>
                        <dt><code>name</code> (optional)</dt>
                        <dd>Value to use for the checkbox&apos;s <code>name</code> attribute. Will fall back to using the <code>id</code> prop if not provided.</dd>
                        <dt><code>onBlur</code> (optional)</dt>
                        <dd>Function to fire in response to a blur event.</dd>
                        <dt><code>onChange</code> (optional)</dt>
                        <dd>Function to fire in response to a change event.</dd>
                        <dt><code>small</code> (optional)</dt>
                        <dd>Whether to use the &lsquo;small&rsquo; checkbox variant. Boolean. Alternatively you can set this on an ancestor <code>CheckboxGroup</code> component.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-confirmation-message">Confirmation message</h2>

                <Example>
                    <ConfirmationMessage title="Landlord added successfully">
                        <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
                    </ConfirmationMessage>
                </Example>

                <Configuration componentName="Confirmation message">
                    <p><code>ConfirmationMessage</code> components can use the following prop:</p>
                    <dl>
                        <dt><code>ariaLive</code> (optional)</dt>
                        <dd>Value for an <code>aria-live</code> attribute on the confirmation message, for cases where it&apos;s added to the page dynamically. Default is <code>polite</code>.</dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>headingLevel</code> (optional)</dt>
                        <dd>The heading level for the confirmation message&apos;s title. The default is <code>H3</code>. Changing the heading level does not alter the confirmation message&apos;s appearance.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-contents-nav">Contents nav</h2>

                <Example>
                    <ContentsNav ariaLabel="Pages in this guide">
                        <ContentsNav.Item current>Apply for Blue Badge</ContentsNav.Item>
                        <ContentsNav.Item href="#2">Eligibility</ContentsNav.Item>
                        <ContentsNav.Item href="#3">Using your Blue Badge</ContentsNav.Item>
                        <ContentsNav.Item href="#4">Report a lost, stolen or misuesd Blue Badge</ContentsNav.Item>
                        <ContentsNav.Item href="#5">Changing or handing back a Blue Badge</ContentsNav.Item>
                    </ContentsNav>
                </Example>

                <Configuration componentName="Contents navigation">
                    <p><code>ContentsNav</code> components can use the following props:</p>
                    <dl>
                        <dt><code>ariaLabel</code> (optional)</dt>
                        <dd>Text to use for the content nav&apos;s <code>aria-label</code> property, which is required for accessibility. Default is &lsquo;Pages in this section&rsquo;.</dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>title</code> (optional)</dt>
                        <dd>The title for the contents nav. Default is &lsquo;Contents&rsquo;.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Contents nav items">
                    <p><code>ContentsNav.Item</code> components nav items array can use the following propserties:</p>
                    <dl>
                        <dt><code>current</code> (optional)</dt>
                        <dd>Whether the nav item is for the current page. Boolean.</dd>
                        <dt><code>href</code> (optional)</dt>
                        <dd>URL of the contents nav item</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-cookie-banner">Cookie banner</h2>

                <Example>
                    <CookieBanner>
                        <p>We use <a href="/cookies/">cookies</a> to collect anonymous data to help us improve your site browsing
                            experience.</p>
                        <p>Click 'Accept all cookies' to agree to all cookies that collect anonymous data.
                            To only allow the cookies that make the site work, click 'Use essential cookies only.' Visit 'Set cookie preferences' to control specific cookies.</p>
                        <CookieBanner.Buttons>
                            <Button className="js-accept-all-cookies" small buttonStyle="secondary">Accept all cookies</Button>
                            <Button className="js-accept-essential-cookies" small buttonStyle="secondary">Use essential cookies only</Button>
                            <a href="/cookies/">Set cookie preferences</a>
                        </CookieBanner.Buttons>
                    </CookieBanner>
                </Example>

                <Configuration componentName="Cookie banner">
                    <p><code>CookieBanner</code> components can use the following props:</p>

                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>title</code> (optional)</dt>
                        <dd>The title for the banner, hidden from visual users but present for screen readers. Default is &lsquo;Information&rsquo;.</dd>
                    </dl>

                    <p>Cookie banner buttons and links should be placed in a <code>CookieBanner.Buttons</code> subcomponent.</p>
                </Configuration>

                <h3>Cookie confirmation banner</h3>

                <p>Use a <code>NotificationBanner</code> for the confirmation message, with an additional CSS class for the 'success' colourway.</p>

                <Example>
                    <NotificationBanner id="cookie-confirm" close className="ds_notification--cookie-success">
                        <p>Your cookie preferences have been saved. You can <a href="/cookies/">change your cookie settings</a> at any time.</p>
                    </NotificationBanner>
                </Example>

                <h2 className="dsjsx_example-title" id="section-date-picker">Date picker</h2>

                <Example>
                    <DatePicker
                        id="date-picker"
                        label="Date of birth"
                        value="12/08/2024"
                    />
                </Example>

                <Example title="Date picker with date restrictions">
                    <DatePicker
                        disabledDates="06/07/2024 07/07/2024 13/07/2024 14/07/2024 20/07/2024 21/07/2024 27/07/2024 28/07/2024"
                        hintText="Use dd/mm/yyyy format. For example, 31/01/2023."
                        id="date-picker-restrictions"
                        label="Date of birth"
                        maxDate="26/07/2024"
                    />
                </Example>

                <Example title="Date picker with separate fields">
                    <DatePicker
                        label="Date of birth"
                        id="date-picker-separate"
                        multiple
                        value="12/08/2024"
                    />
                </Example>

                <Configuration componentName="Date picker">
                    <p><code>DatePicker</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>disabledDates</code> (optional)</dt>
                        <dd>Space-separated list of dates to disable in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                        <dt><code>errorMessage</code> (optional)</dt>
                        <dd>Text to use for an error message.</dd>
                        <dt><code>hasError</code> (optional)</dt>
                        <dd>Whether the date picker is in an error state. Boolean.</dd>
                        <dt><code>hintText</code> (optional)</dt>
                        <dd>Text to use for a date picker hint text.</dd>
                        <dt><code>id</code></dt>
                        <dd>Value to use for the <code>id</code> attribute of the date picker&apos;s <code>input</code> element. If the date picker is using multiple inputs, each field starts with the ID. For example, <code>myId-day</code>, <code>myId-month</code>, <code>myId-year</code>.</dd>
                        <dt><code>iconPath</code> (optional)</dt>
                        <dd>Path to the icon file.</dd>
                        <dt><code>label</code></dt>
                        <dd>Text to use for the date picker&apos;s associated label.</dd>
                        <dt><code>maxDate</code> (optional)</dt>
                        <dd>Latest selectable date in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                        <dt><code>minDate</code> (optional)</dt>
                        <dd>Earliest selectable date in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                        <dt><code>multiple</code> (optional)</dt>
                        <dd>Whether to display the day, month and year as separate fields. Boolean.</dd>
                        <dt><code>name</code> (optional)</dt>
                        <dd>Value to use for the <code>name</code> attribute of the date picker. The behaviour of this on date pickers with multiple input fields is the same as the behaviour of the <code>id</code> prop.</dd>
                        <dt><code>onBlur</code> (optional)</dt>
                        <dd>Function to fire in response to a blur event.</dd>
                        <dt><code>onChange</code> (optional)</dt>
                        <dd>Function to fire in response to a change event.</dd>
                        <dt><code>value</code> (optional)</dt>
                        <dd>The default value of the date picker.</dd>
                        <dt><code>width</code> (optional)</dt>
                        <dd>The width of the input element. See <a href="section-text-input">TextInput</a> for the available options. Default is <code>fixed-10</code>.</dd>
                    </dl>

                </Configuration>

                <h2 className="dsjsx_example-title" id="section-details">Details</h2>

                <Example>
                    <Details summary="I can't sign in">
                        <p>Contact the design system team if you cannot sign in.</p>

                        <p>Email <a href="mailto:designsystem@gov.scot">designsystem@gov.scot</a>.</p>
                        <p>Or phone 0000 123 4567<br/>
                            Monday to Friday, 9am to 5pm</p>
                    </Details>
                </Example>

                <Configuration componentName="Details">
                    <p><code>Details</code> components can use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>summary</code></dt>
                        <dd>Text to use for the details componen&apos;s &lsquo;summary&rsquo; element.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-error-summary">Error summary</h2>

                <Example>
                    <ErrorSummary>
                        <ErrorSummary.Item fragmentId="did-resolve">Did this resolve your issue?</ErrorSummary.Item>
                        <ErrorSummary.Item fragmentId="what-topics">What topics are you interested in?</ErrorSummary.Item>
                        <ErrorSummary.Item fragmentId="more-detail">Please provide more detail</ErrorSummary.Item>
                    </ErrorSummary>
                </Example>

                <Configuration componentName="Error summary">
                    <p><code>ErrorSummary</code> components can have use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>title</code> (optional)</dt>
                        <dd>The title of the error summary. Default is &lsquo;There is a problem&rsquo;.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Error summary items">
                    <p><code>ErrorSummary.Item</code> components can use the following props:</p>
                    <dl>
                        <dt><code>fragmentId</code> (optional)</dt>
                        <dd>ID of the question or field to link to.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-file-download">File download</h2>

                <Example>
                    <FileDownload
                        title="Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive"
                        fileSize="333 kB"
                        fileType="8 page PDF"
                        fileUrl="#"
                        icon="Pdf"/>
                </Example>

                <Configuration componentName="File download">
                    <p><code>FileDownload</code> components use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>cover</code> (optional)</dt>
                        <dd>URL of a custom cover image.</dd>
                        <dt><code>highlighted</code> (optional)</dt>
                        <dd>Add a highlight to the file download. Boolean. Default is <code>false</code>.</dd>
                        <dt><code>icon</code> (optional)</dt>
                        <dd>Canned icon to use.</dd>
                        <dt><code>fileSize</code> (optional)</dt>
                        <dd>Description of the file size.</dd>
                        <dt><code>fileType</code> (optional)</dt>
                        <dd>A description of the file type.</dd>
                        <dt><code>fileUrl</code></dt>
                        <dd>The URL of the file to download.</dd>
                        <dt><code>title</code></dt>
                        <dd>The document title, used in the link text.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-hide-this-page">Hide this page</h2>

                <Example nodisplay>
                    <HideThisPage />
                </Example>

                <Configuration componentName="Hide this page">
                    <p><code>HideThisPage</code> components can have use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>escapeUrl</code> (optional)</dt>
                        <dd>The URL to take the user to. Defaults to <code>https://www.bbc.co.uk/weather</code>.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-inset-text">Inset text</h2>

                <Example>
                    <InsetText>
                        You may be able to <a href="#inset">apply for free school meals</a> at the same time as you apply for the clothing grant.
                    </InsetText>
                </Example>

                <Configuration componentName="Inset text">
                    <p><code>InsetText</code> components can have use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-notification-banner">Notification banner</h2>

                <Example>
                    <NotificationBanner>
                        <p>We need to tell you about <a href="#notification">something</a></p>
                    </NotificationBanner>
                </Example>

                <Example title="Notification banner with icon and close">
                    <NotificationBanner icon="PriorityHigh" hasColourIcon hasInverseIcon close>
                        <p>We need to tell you about <a href="#notification">something</a></p>
                    </NotificationBanner>
                </Example>

                <Configuration componentName="Notification banner">
                    <p><code>NotificationBanner</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>close</code> (optional)</dt>
                        <dd>Shows the &lsquo;close&rsquo; button on the notification banner. Boolean.</dd>
                        <dt><code>hasColourIcon</code> (optional)</dt>
                        <dd>Makes the icon display in the alternative colour scheme (yellow). Boolean.</dd>
                        <dt><code>hasInverseIcon</code> (optional)</dt>
                        <dd>Makes the icon be inverted against a circle background. Boolean.</dd>
                        <dt><code>icon</code> (optional)</dt>
                        <dd>Shows the &lsquo;high priority&rsquo; icon on the notification banner. Boolean.</dd>
                        <dt><code>title</code> (optional)</dt>
                        <dd>A hidden title for the notification banner, useful for screen reader users. Default is &lsquo;Information&rsquo;.</dd>
                    </dl>

                    <p>Both <code>hasColourIcon</code> and <code>hasInverseIcon</code> can be used together. This combines the effects of both modifiers.</p>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-notification-panel">Notification panel</h2>

                <Example>
                    <NotificationPanel title="Thank you">
                        <p>Your Saltire Scholarship Application form has been successfully submitted.</p>
                    </NotificationPanel>
                </Example>

                <Configuration componentName="Notification panel">
                    <p><code>NotificationPanel</code> components can use the following props:</p>
                    <dl>
                        <dt><code>ariaLive</code> (optional)</dt>
                        <dd>Value for an <code>aria-live</code> attribute on the notification panel, for cases where it&apos;s added to the page dynamically. Default is <code>polite</code>.</dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>headingLevel</code> (optional)</dt>
                        <dd>The heading level for the notification panel&apos;s message&apos;s title. The default is H1. Changing the heading level does not alter the notification panel&apos;s appearance.</dd>
                        <dt><code>title</code></dt>
                        <dd>Title of the notification panel.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-page-header">Page header</h2>

                <Example>
                    <PageHeader
                        label="Guide"
                        title="Apply for or renew a disabled parking permit"
                    >
                    </PageHeader>
                </Example>

                <Example>
                    <PageHeader
                        label="Publication - FOI/EIR release"
                        title="Constitutional Futures Division documents mentioning the Treaty on the Prohibition of Nuclear Weapons: FOI Release"
                    >
                        <Metadata>
                            <Metadata.Item name="Last updated">15 August 2024</Metadata.Item>
                            <Metadata.Item name="Directorate">
                                <a href="#one">Constitution Directorate</a>
                            </Metadata.Item>
                            <Metadata.Item name="Part of">
                                <a href="#two">Constitution and democracy</a>,{' '}
                                <a href="#three">Public sector</a>
                            </Metadata.Item>
                            <Metadata.Item name="FOI reference">
                                FOI/202400423236
                            </Metadata.Item>
                            <Metadata.Item name="Date received">
                                18 July 2024
                            </Metadata.Item>
                            <Metadata.Item name="Date responded">
                                15 August 2024
                            </Metadata.Item>
                        </Metadata>
                    </PageHeader>
                </Example>

                <Configuration componentName="Page header">
                    <p><code>PageHeader</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>label</code> (optional)</dt>
                        <dd>Text to use for a label shown above the H1 element. No label is displayed if there is no <code>label</code> prop provided.</dd>
                        <dt><code>title</code></dt>
                        <dd>Text to use for the page header&apos;s H1 element.</dd>
                    </dl>
                    <p>Page header components can show metadata below the <code>H1</code> element. Do this by including a <a href="#section-page-metadata">page metadata</a> component as a child.</p>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-page-metadata">Page metadata</h2>

                <Example>
                    <Metadata>
                        <Metadata.Item name="Last updated">21/04/2020</Metadata.Item>
                        <Metadata.Item name="Directorate">
                            <a href="#one">Equality, Inclusion and Human Rights Directorate</a>
                        </Metadata.Item>
                        <Metadata.Item name="Part of">
                            <a href="#two">Equality and rights</a>,{' '}
                            <a href="#three">Law and order</a>
                        </Metadata.Item>
                    </Metadata>
                </Example>

                <Example title="Inline metadata">
                    <Metadata inline>
                        <Metadata.Item name="Content type">Publication</Metadata.Item>
                        <Metadata.Item name="Last updated">21/04/2020</Metadata.Item>
                    </Metadata>
                </Example>

                <Configuration componentName="Page metadata">
                    <p><code>Metadata</code> components can use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>inline</code> (optional)</dt>
                        <dd>Makes the page metadata use the truncated &lsquo;inline&rsquo; display. Boolean.</dd>
                    </dl>
                </Configuration>
                <Configuration componentName="Medatata item">
                    <p><code>Metadata</code> components can have any number of <code>Metadata.Item</code> children. Metadata item components can use the following props:</p>
                    <dl>
                        <dt><code>name</code></dt>
                        <dd>The name or key of the metadata item. Boolean.</dd>
                    </dl>
                    <p>The value of the metadata item is provided by its children.</p>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-pagination">Pagination</h2>

                <Example>
                    <Pagination page="1" totalPages="21" />
                </Example>

                <Example>
                    <Pagination page="10" totalPages="21" />
                </Example>

                <Example>
                    <Pagination page="10" padding="3" totalPages="21" />
                </Example>

                <Configuration componentName="Pagination">
                    <p><code>Pagination</code> components can use the following props:</p>
                    <dl>
                        <dt><code>ariaLabel</code> (optional)</dt>
                        <dd>Text to use for an <code>aria-label</code> attribute on the <code>nav</code> element. Default is &lsquo;Pages&rsquo;.</dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output. Used on all links in the pagination.</dd>
                        <dt><code>onClick</code> (optional)</dt>
                        <dd>Function to fire in response to a click event on pagination links.</dd>
                        <dt><code>padding</code> (optional)</dt>
                        <dd>Number of other pages to show on either side of the current page. Default is 1.</dd>
                        <dt><code>page</code></dt>
                        <dd>Current page number.</dd>
                        <dt><code>pattern</code> (optional)</dt>
                        <dd>A regex-ish pattern to use for the pagination links. The string <code>$1</code> will be replaced with the page number.<br />Default is <code>/search?page=$1</code>.</dd>
                        <dt><code>totalPages</code></dt>
                        <dd>Total number of pages.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-phase-banner">Phase banner</h2>

                <Example>
                    <PhaseBanner phaseName="banana">
                        This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
                    </PhaseBanner>
                </Example>

                <Configuration componentName="Phase banner">
                    <p>Phase banner components can use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>phaseName</code></dt>
                        <dd>The text for the phase banner&apos;s tag component.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-question">Question</h2>

                <Example title="Basic question">
                    <Question
                    >
                        <TextInput
                            id="text-input-question"
                            label="First name"
                        />
                    </Question>
                </Example>

                <Example title="Question with error">
                    <Question
                        hasError
                    >
                        <TextInput
                            error="true"
                            errorMessage="This is a required field"
                            id="text-input-question-error"
                            label="First name"
                        />
                    </Question>
                </Example>

                <Example title="Fieldset question">
                    <Question
                        hintText="Select all that apply."
                        legend="Do you receive any of these benefits"
                        tagName="fieldset"
                    >
                        <CheckboxGroup>
                            <Checkbox
                                id="universal-credit"
                                label="Universal Credit"
                                checked
                            />
                            <Checkbox
                                id="pension-credit"
                                label="Pension Credit"
                            />
                            <Checkbox
                                id="jsa"
                                label="Income-based Job Seeker's Allowance"
                            />
                            <Checkbox
                                id="none"
                                label="No, I do not receive any of these benefits"
                                exclusive
                            />
                        </CheckboxGroup>
                    </Question>
                </Example>

                <Example title="Fieldset question with error">
                    <Question
                        error="true"
                        errorMessage="You must select at least one option"
                        hintText="Select all that apply."
                        legend="Do you receive any of these benefits"
                        tagName="fieldset"
                    >
                        <CheckboxGroup>
                            <Checkbox
                                id="universal-credit"
                                label="Universal Credit"
                                checked
                            />
                            <Checkbox
                                id="pension-credit"
                                label="Pension Credit"
                            />
                            <Checkbox
                                id="jsa"
                                label="Income-based Job Seeker's Allowance"
                            />
                            <Checkbox
                                id="none"
                                label="No, I do not receive any of these benefits"
                                exclusive
                            />
                        </CheckboxGroup>
                    </Question>
                </Example>

                <Configuration componentName="Question">
                    <p><code>Question</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>errorMessage</code> (optional)</dt>
                        <dd>Text for a question&apos;s <code>ErrorMessage</code> component. For use when the question uses a fieldset.</dd>
                        <dt><code>hasError</code> (optional)</dt>
                        <dd>Whether the question is in an error state. Boolean.</dd>
                        <dt><code>hintText</code> (optional)</dt>
                        <dd>Text for a question&apos;s <code>HintText</code> component. For use when the question uses a fieldset.</dd>
                        <dt><code>legend</code> (optional)</dt>
                        <dd>Text for a question&apos;s <code>legend</code> element. Use when the question has a <code>tagName</code> of &lsquo;fieldset&rsquo;.</dd>
                        <dt><code>tagName</code> (optional)</dt>
                        <dd>HTML tag name to use for the question. Default is <code>div</code>, but <code>fieldset</code> will sometimes be more appropriate.</dd>
                    </dl>

                    <p>Questions are meaningless without one or more form fields, which should be provided as children.</p>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-radio">Radio button</h2>

                <Example>
                    <RadioGroup name="propertyType">
                        <RadioButton label="Flat" id="flat-radio"/>
                        <RadioButton label="Bungalow" id="bungalow-radio"/>
                        <RadioButton label="Cottage" id="cottage-radio"/>
                        <RadioButton label="Terraced house" id="terraced-radio"/>
                        <RadioButton label="Semi-detached house" id="semi-radio"/>
                        <RadioButton label="Detached house" id="detached-radio"/>
                    </RadioGroup>
                </Example>

                <Example title="Radio buttons with hint text">
                    <RadioGroup name="paymentType">
                        <RadioButton
                            label="Advance"
                            id="advance-radio"
                            hintText="This means you're paid for the period coming up, e.g. the month ahead"
                        />
                        <RadioButton
                            label="Arrears"
                            id="arrears-radio"
                            hintText="This means you're paid for the time that's just passed, e.g. for the last month"
                        />
                    </RadioGroup>
                </Example>

                <Configuration componentName="Radio group">
                    <p>Use a <code>RadioGroup</code> component to group radio buttons. Radio groups can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>inline</code> (optional)</dt>
                        <dd>Whether to display the radio buttons in the group inline instead of stacked. Boolean.</dd>
                        <dt><code>name</code></dt>
                        <dd>Value for the <code>name</code> attribute on radio buttons in the group.</dd>
                        <dt><code>small</code> (optional)</dt>
                        <dd>Whether to use the &lsquo;small&rsquo; radio button variant. Boolean.</dd>
                    </dl>
                </Configuration>
                <Configuration componentName="Radio buttons">
                    <p><code>RadioButton</code> components can use the following props:</p>
                    <dl>
                        <dt><code>checked</code> (optional)</dt>
                        <dd>Whether the radio should be selected on load.</dd>
                        <dt><code>hintText</code> (optional)</dt>
                        <dd>Text to use for a radio button&apos;s hint text.</dd>
                        <dt><code>id</code></dt>
                        <dd>Value to use for the radio button&apos;s <code>id</code> attribute.</dd>
                        <dt><code>label</code></dt>
                        <dd>Text to use for the radio button&apos;s associated label.</dd>
                        <dt><code>name</code> (optional)</dt>
                        <dd>Value to use for the radio button&apos;s <code>name</code> attribute. Alternatively you can set this on an ancestor <code>RadioGroup</code> component.</dd>
                        <dt><code>onBlur</code> (optional)</dt>
                        <dd>Function to fire in response to a blur event.</dd>
                        <dt><code>onChange</code> (optional)</dt>
                        <dd>Function to fire in response to a change event.</dd>
                        <dt><code>small</code> (optional)</dt>
                        <dd>Whether to use the &lsquo;small&rsquo; radio button variant. Boolean. Alternatively you can set this on an ancestor <code>RadioGroup</code> component.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-select">Select (dropdown)</h2>

                <Example>
                    <Select
                        defaultValue="button"
                        id="select-component"
                        label="Choose a component"
                        placeholder="Choose a component"
                    >
                        <option value="accordion">Accordion</option>
                        <option value="breadcrumbs">Breadcrumbs</option>
                        <option value="button">Button</option>
                    </Select>
                </Example>

                <Configuration componentName="Select">
                    <p><code>Select</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>defaultValue</code> (optional)</dt>
                        <dd>The ID of the option that you want selected on page load.</dd>
                        <dt><code>errorMessage</code> (optional)</dt>
                        <dd>Text to use for an error message.</dd>
                        <dt><code>hasError</code> (optional)</dt>
                        <dd>Whether the field is in an error state. Boolean.</dd>
                        <dt><code>hintText</code> (optional)</dt>
                        <dd>Text to use for a select&apos;s hint text.</dd>
                        <dt><code>id</code></dt>
                        <dd>Value to use for the select&apos;s <code>id</code> attribute.</dd>
                        <dt><code>label</code></dt>
                        <dd>Text to use for the select&apos;s associated label.</dd>
                        <dt><code>name</code> (optional)</dt>
                        <dd>Value to use for the select&apos;s <code>name</code> attribute. Will fall back to using the <code>id</code> prop if not provided.</dd>
                        <dt><code>onBlur</code> (optional)</dt>
                        <dd>Function to fire in response to a blur event.</dd>
                        <dt><code>onChange</code> (optional)</dt>
                        <dd>Function to fire in response to a change event.</dd>
                        <dt><code>options</code></dt>
                        <dd>Array of option items.</dd>
                        <dt><code>placeholder</code> (optional)</dt>
                        <dd>Text to use for an optional unselected first option.</dd>
                        <dt><code>width</code> (optional)</dt>
                        <dd>The width to use for the <code>select</code> element. The options are the same as for <code>TextInput</code>.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-sequential-navigation">Sequential navigation</h2>

                <Example>
                    <SequentialNavigation>
                        <SequentialNavigation.Previous href="#previous">
                            Apply for or renew a Blue Badge
                        </SequentialNavigation.Previous>
                        <SequentialNavigation.Next href="#next">
                            Eligibility: who can have one?
                        </SequentialNavigation.Next>
                    </SequentialNavigation>
                </Example>

                <Configuration componentName="Sequential navigation">
                    <p><code>SequentialNavigation</code> components use the following props:</p>
                    <dl>
                        <dt><code>ariaLabel</code> (optional)</dt>
                        <dd>Text to use for an <code>aria-label</code> attribute on the <code>nav</code> element. Default is &lsquo;Article navigation&rsquo;.</dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Sequential navigation links">
                    <p><code>SequentialNavigation.Next</code> and <code>SequentialNavigation.Previous</code> components use the following props:</p>
                    <dl>
                        <dt><code>href</code></dt>
                        <dd>URL of the page being linked to.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                        <dt><code>textLabel</code> (optional)</dt>
                        <dd>String to use for the label that precedes the link text. Defaults to &lsquo;Previous&rsquo; and &lsquo;Next&rsquo;</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-side-navigation">Side navigation</h2>

                <Example>
                    <SideNavigation>
                        <SideNavigation.List isRoot>
                            <SideNavigation.Item href="#apples" title="Apples">
                                <SideNavigation.List>
                                    <SideNavigation.Item href="#green-apples" title="Green apples">
                                        <SideNavigation.List>
                                            <SideNavigation.Item href="#bramley" title="Bramley" current/>
                                            <SideNavigation.Item href="#granny-smith" title="Granny smith"/>
                                        </SideNavigation.List>
                                    </SideNavigation.Item>
                                    <SideNavigation.Item href="#red-apples" title="Red apples"/>
                                </SideNavigation.List>
                            </SideNavigation.Item>
                            <SideNavigation.Item href="#bananas" title="Bananas" />
                            <SideNavigation.Item href="#cherries" title="Cherries" />
                            <SideNavigation.Item href="#dates" title="Dates"/>
                        </SideNavigation.List>
                    </SideNavigation>
                </Example>

                <Configuration componentName="Side navigation">
                    <p><code>SideNavigation</code> components can use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Side navigation list">
                    <p><code>SideNavigation.List</code> components can use the following prop:</p>
                    <dl>
                        <dt><code>isRoot</code> (optional)</dt>
                        <dd>Indicates that this is the root list in a nested structure. Required for mobile navigation.</dd>
                    </dl>
                    <p><code>SideNavigation.List</code> components can be children of <code>SideNavigation.Item</code> components to create a nested navigation structure.</p>
                </Configuration>

                <Configuration componentName="Side navigation item">
                    <p><code>SideNavigation.Item</code> components can use the following props:</p>
                    <dl>
                        <dt><code>current</code> (optional)</dt>
                        <dd>Whether this is the current page. The current page uses a <code>span</code> element and is not a link. Boolean. Default is false.</dd>
                        <dt><code>href</code></dt>
                        <dd>The destination URL.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                        <dt><code>title</code></dt>
                        <dd>Text to use for the link text.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-site-footer">Site footer</h2>

                <Example>
                    <SiteFooter>
                        <SiteFooter.Links>
                            <SiteFooter.Link href="#">Privacy</SiteFooter.Link>
                            <SiteFooter.Link href="#">Cookies</SiteFooter.Link>
                            <SiteFooter.Link href="#">Accessibility</SiteFooter.Link>
                        </SiteFooter.Links>
                        <SiteFooter.License>
                            <img width="41" src="./ogl.svg" alt="Open Government License" />
                            <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except for graphic assets and where otherwise stated</p>
                            <p>&copy; Crown Copyright</p>
                        </SiteFooter.License>
                        <SiteFooter.Org title="The Scottish Government" href="https://www.gov.scot/">
                            <img src="./scottish-government--min.svg" alt="gov.scot" loading="lazy" width="300" height="55" />
                        </SiteFooter.Org>
                    </SiteFooter>
                </Example>

                <Configuration componentName="Site footer">
                    <p><code>SiteFooter</code> components can have <code>SiteFooter.Links</code>, <code>SiteFooter.Licensing</code> and <code>SiteFooter.Org</code> children. Site footer components can use the following property:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Site footer links">
                    <p><code>SiteFooter.Links</code> components can have <code>SiteFooter.Link</code> children.</p>
                    <p><code>SiteFooter.Link</code> components can have the following props:</p>
                    <dl>
                        <dt><code>href</code> (optional)</dt>
                        <dd>The destination URL.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Site footer licensing">
                    <p>This is a basic container for copyright information, including any logo you might want to use.</p>
                </Configuration>

                <Configuration componentName="Site footer org">
                    <p>This is a basic container for an org logo. If you want the org logo to be wraped in a link, use the following propserties:</p>
                    <dl>
                        <dt><code>href</code> (optional)</dt>
                        <dd>The destination URL.</dd>
                        <dt><code>title</code> (optional)</dt>
                        <dd>Title attribute of the link.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-site-header">Site header</h2>

                <Example>
                    <SiteHeader>
                        <SiteHeader.Brand homeUrl="/" siteTitle="Design System React">
                            <img src="./scottish-government.svg" alt="gov.scot" loading="lazy" width="300" height="58" />
                        </SiteHeader.Brand>
                        <SiteHeader.Navigation>
                            <SiteNavigation>
                                <SiteNavigation.Item href="#about">About</SiteNavigation.Item>
                                <SiteNavigation.Item href="#get-started">Get started</SiteNavigation.Item>
                                <SiteNavigation.Item href="#styles">Styles</SiteNavigation.Item>
                                <SiteNavigation.Item href="#components" current>Components</SiteNavigation.Item>
                                <SiteNavigation.Item href="#patterns">Patterns</SiteNavigation.Item>
                                <SiteNavigation.Item href="#guidance">Guidance</SiteNavigation.Item>
                            </SiteNavigation>
                        </SiteHeader.Navigation>
                        <SiteHeader.Search>
                            <SiteSearch id="site-header-search"/>
                        </SiteHeader.Search>
                        <SiteHeader.Phase>
                            <PhaseBanner phaseName="Beta">
                                This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
                            </PhaseBanner>
                        </SiteHeader.Phase>
                    </SiteHeader>
                </Example>

                <Configuration componentName="Site header">
                    <p><code>SiteHeader</code> uses basic subcomponents as slots for its content.</p>
                    <ul>
                        <li><code>SiteHeader.Navigation</code> expects a <code>SiteNavigation</code> component or equivalent</li>
                        <li><code>SiteHeader.Phase</code> expects a <code>PhaseBanner</code> component or equivalent</li>
                        <li><code>SiteHeader.Search</code> expects a <code>SiteSearch</code> component or equivalent</li>
                        <li><code>SiteHeader.Brand</code> is a special case, described separately below</li>
                    </ul>
                </Configuration>

                <Configuration componentName="Site header brand">
                    <p><code>SiteHeader.Brand</code> should have an image child for use as the site logo. <code>SiteHeader.Brand</code> components can use the following props:</p>
                    <dl>
                        <dt><code>homeUrl</code></dt>
                        <dd>The URL of the home page. Default is <code>/</code>.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                        <dt><code>siteTitle</code> (optional)</dt>
                        <dd>Text to use in the site title.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-site-navigation">Site navigation</h2>

                <Example>
                   <SiteNavigation>
                        <SiteNavigation.Item href="#about">About</SiteNavigation.Item>
                        <SiteNavigation.Item href="#get-started">Get started</SiteNavigation.Item>
                        <SiteNavigation.Item href="#styles">Styles</SiteNavigation.Item>
                        <SiteNavigation.Item href="#components" current>Components</SiteNavigation.Item>
                        <SiteNavigation.Item href="#patterns">Patterns</SiteNavigation.Item>
                        <SiteNavigation.Item href="#guidance">Guidance</SiteNavigation.Item>
                    </SiteNavigation>
                </Example>

                <Configuration componentName="Site navigation">
                    <p><code>SiteNavigation</code> components can use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Site navigation items">
                    <p><code>SiteNavigation.Item</code> components array can use the following props:</p>
                    <dl>
                        <dt><code>current</code> (optional)</dt>
                        <dd>Whether this is the current page. Boolean. Default is false.</dd>
                        <dt><code>href</code></dt>
                        <dd>The destination URL.</dd>
                        <dt><code>linkComponent</code> (optional)</dt>
                        <dd>Function that returns an element, to customise the output.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-site-search">Site search</h2>

                <Example>
                    <SiteSearch
                        autocompleteEndpoint="./autocomplete-dummy-data.json#"
                        autocompleteSuggestionMappingFunction={suggestionMappingFunction}
                    />
                </Example>

                <Configuration componentName="Site search">
                    <p><code>SiteSearch</code> components can use the following props:</p>
                    <dl>
                        <dt><code>action</code> (optional)</dt>
                        <dd>The value of the search form&apos;s <code>action</code> atttribute. Default is <code>/search</code>.</dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>id</code></dt>
                        <dd>The value of the search input field&apos;s <code>id</code> attribute. Default is <code>site-search</code></dd>
                        <dt><code>method</code> (optional)</dt>
                        <dd>The form method to use. Default is <code>GET</code>.</dd>
                        <dt><code>name</code> (optional)</dt>
                        <dd>The value of the search field&apos;s <code>name</code> attribute. Default is <code>q</code>.</dd>
                        <dt><code>placeholder</code> (optional)</dt>
                        <dd>The value of the search field&apos;s <code>placeholder</code> attribute. Default is <code>Search</code>.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Autocomplete">
                    <p>Autocomplete can be configured on a site search component by adding the following props:</p>
                    <dl>
                        <dt><code>autocompleteEndpoint</code></dt>
                        <dd>The endpoint used by the autocomplete.</dd>
                        <dt><code>autocompleteSuggestionMappingFunction</code> (optional)</dt>
                        <dd>A JavaScript function that maps the results from the endpoint into the format that the Design System Autocomplete component expects.</dd>
                        <dt><code>minLength</code> (optional)</dt>
                        <dd>The number of characters that need to be entered before requests are sent to the endpoint. Default is <code>3</code>.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-skip-links">Skip links</h2>

                <Example nodisplay>
                    <SkipLinks>
                        <SkipLinks.Link fragmentId="main-content">Skip to main content</SkipLinks.Link>
                    </SkipLinks>
                </Example>

                <Configuration componentName="Skip links">
                    <p>If a <code>SkipLinks</code> has no children, it will insert a default <code>SkipLinks.Link</code> component, whose text and target element can be customised through the <code>mainContentId</code> and <code>mainLinkText</code> props.</p>
                    <p><code>SkipLinks</code> components can use the following props:</p>
                    <dl>
                        <dt><code>isStatic</code> (optional)</dt>
                        <dd>Use the 'static' display variant, which makes the skip links use screen real estate when focused instead of being absolutely positioned.</dd>
                        <dt><code>mainContentId</code> (optional)</dt>
                        <dd>The <code>id</code> attribute of the &lsquo;main content&rsquo; element to link to. Default is <code>main-content</code>.</dd>
                        <dt><code>mainLinkText</code> (optional)</dt>
                        <dd>The text to use for the &lsquo;main content&rsquo; link. Default is &lsquo;Skip to main content&rsquo;.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Skip link items">
                    <p><code>SkipLinks.Link</code> components use the following prop:</p>
                    <dl>
                        <dt><code>fragmentId</code></dt>
                        <dd>ID of the destination element.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-summary-card">Summary card</h2>

                <Example>
                    <SummaryCard title="Joe Bloggs">
                        <SummaryCard.Action href="#foo">Change</SummaryCard.Action>
                        <SummaryCard.Action onclick={() => console.log('delete clicked')}>Delete</SummaryCard.Action>
                        <SummaryList>
                            <SummaryList.Item title="Phone number">
                                <SummaryList.Value>0123 456 7890</SummaryList.Value>
                            </SummaryList.Item>

                            <SummaryList.Item title="Address">
                                <SummaryList.Value>
                                    Victoria Quay<br />Edinburgh<br />EH6 6QQ
                                </SummaryList.Value>
                            </SummaryList.Item>
                        </SummaryList>
                    </SummaryCard>

                </Example>

                <Configuration componentName="Summary card">
                    <p><code>SummaryCard</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>headingLevel</code> (optional)</dt>
                        <dd>Heading level to use for the summary card title. Default is <code>H3</code>.</dd>
                        <dt><code>title</code></dt>
                        <dd>The title of the summary card.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Summary card actions">
                    <p><code>SummaryCard.Action</code> components can have the following prop:</p>
                    <dl>
                        <dt><code>href</code> (optional)</dt>
                        <dd>The destination URL. The action will be a button element if this is omitted.</dd>
                        <dt><code>onclick</code> (optional)</dt>
                        <dd>Function to fire in response to a click event.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-summary-list">Summary list</h2>

                <Example>
                    <SummaryList>
                        <SummaryList.Item title="Name">
                            <SummaryList.Value>Jane Smith</SummaryList.Value>
                            <SummaryList.Action href="#foo">Change</SummaryList.Action>
                            <SummaryList.Action onclick={() => console.log('delete clicked')}>Delete</SummaryList.Action>
                        </SummaryList.Item>

                        <SummaryList.Item title="Date of birth">
                            <SummaryList.Value>13 April 2001</SummaryList.Value>
                            <SummaryList.Action href="#bar">Change</SummaryList.Action>
                        </SummaryList.Item>

                        <SummaryList.Item title="Address">
                            <SummaryList.Value>
                                Scottish Government<br />St Andrew's House<br />Regent Road<br />Edinburgh<br />EH1 3DG
                            </SummaryList.Value>
                            <SummaryList.Action href="#baz">Change</SummaryList.Action>
                        </SummaryList.Item>

                        <SummaryList.Item title="Contact details">
                            <SummaryList.Value>email@gov.scot</SummaryList.Value>
                            <SummaryList.Value>0123 456 7890</SummaryList.Value>
                            <SummaryList.Action href="foo">Change</SummaryList.Action>
                            <SummaryList.Action onclick={() => console.log('delete clicked')}>Delete</SummaryList.Action>
                        </SummaryList.Item>
                    </SummaryList>
                </Example>

                <Configuration componentName="Summary list">
                    <p><code>SummaryList</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>noBorder</code> (optional)</dt>
                        <dd>Use the borderless display variant. Boolean.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Summary list items" id="summary-list-items">
                    <p><code>SummaryList.Item</code> components can have the following prop:</p>
                    <dl>
                        <dt><code>actions</code> (optional)</dt>
                        <dd>Array of summary item actions data.</dd>
                        <dt><code>title</code></dt>
                        <dd>Title of the summary list item.</dd>
                        <dt><code>value</code> (optional)</dt>
                        <dd>Value of the summary item. Can be either a string or an array.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Summary list actions">
                    <p><code>SummaryList.Action</code> components can have the following prop:</p>
                    <dl>
                        <dt><code>href</code> (optional)</dt>
                        <dd>The destination URL. The action will be a button element if this is omitted.</dd>
                        <dt><code>onclick</code> (optional)</dt>
                        <dd>Function to fire in response to a click event.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-table">Table</h2>

                <Example>
                    <Table>
                        <caption>Public holidays in 2020</caption>
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Day</th>
                                <th scope="col">Holiday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10 April</td>
                                <td>Friday</td>
                                <td>Good Friday</td>
                            </tr>
                            <tr>
                                <td>8 May</td>
                                <td>Friday</td>
                                <td>Early May Bank Holiday</td>
                            </tr>
                            <tr>
                                <td>25 May</td>
                                <td>Monday</td>
                                <td>Spring Bank Holiday</td>
                            </tr>
                            <tr>
                                <td>3 August</td>
                                <td>Monday</td>
                                <td>Summer Bank Holiday</td>
                            </tr>
                        </tbody>
                    </Table>
                </Example>

                <Configuration componentName="Table">
                    <p>The <code>Table</code> component is a basic wrapper around standard table elements that adds the Design System's <code>ds_table</code> CSS class and a prop for specifying table behaviour on small screens.</p>
                    <p><code>Table</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>smallscreen</code> (optional)</dt>
                        <dd>The behaviour to use on small screens. Permitted values are <code>boxes</code> and <code>scrolling</code>.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-tabs">Tabs</h2>

                <Example>
                    <Tabs manual title="Contents">
                        <Tabs.Item tabLabel="Courses and funding">
                            <h2>Search for training courses and funding</h2>
                            <p>A wide range of training courses for your employees are available.</p>
                            <p>Opportunities include distance learning, short courses and vocational training.</p>
                            <p><a href="#">Visit My World of Work to search for training courses</a>.</p>
                            <p>You can also <a href="#">search for training courses, and funding towards training</a>.</p>
                        </Tabs.Item>
                        <Tabs.Item tabLabel="Choosing apprenticeships">
                            <h2>Choosing an apprenticeship for your business</h2>
                            <p>Apprenticeships can help you address skills gaps in your business. The government provides help with the cost of training an apprentice.</p>
                            <p>There are 3 different types of apprenticeship:</p>
                            <ul>
                                <li>Foundation Apprenticeships let school or college students do short-term work experience at your business as part of a qualification</li>
                                <li>Modern Apprenticeships let your new or current employees gain a qualification while working in a paid role at your business</li>
                                <li>Graduate Apprenticeships let your new or current employees gain a degree while working in a paid role at your business</li>
                            </ul>
                            <p>You can find more information on the <a href="#">apprenticeships.scot</a> website.</p>
                        </Tabs.Item>
                        <Tabs.Item tabLabel="Extra skills support">
                            <h2>Extra skills support</h2>
                            <p>The <a href="#">Skills for Growth</a> service can offer skills advice to businesses with fewer than 250 employees.</p>
                            <p>Businesses of any size can get skills advice by completing a <a href="#">skills support request form</a>.</p>
                            <p>Businesses of any size can also get skills advice by calling Skills Development Scotland on 0800 783 6000.</p>
                        </Tabs.Item>
                    </Tabs>
                </Example>

                <Configuration componentName="Tabs">
                    <p><code>Tab</code> components can use the following props:</p>
                    <dl>
                        <dt><code>baseId</code></dt>
                        <dd>A string that IDs for subcomponents are derived from.</dd>
                        <dt><code>bordered</code> (optional)</dt>
                        <dd>Whether to give each tab a border. Boolean. Default is <code>true</code>.</dd>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>headingLevel</code> (optional)</dt>
                        <dd>Heading level to use for the tab container's title. Default is <code>H2</code>.</dd>
                        <dt><code>manual</code> (optional)</dt>
                        <dd>Whether to require manual tab activation. Boolean. Default is <code>false</code>.</dd>
                        <dt><code>title</code> (optional)</dt>
                        <dd>The title of the tab list. Default is 'Contents'.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Tab items">
                    <p><code>Tabs.Item</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>id</code></dt>
                        <dd>The ID of the tab's content, required for correct linking of tab and content.</dd>
                        <dt><code>tabLabel</code></dt>
                        <dd>The label text of the item's tab.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-tag">Tag</h2>

                <Example>
                    <Tag>Beta</Tag>
                </Example>

                <Example>
                    <Tag colour="green">Completed</Tag>
                </Example>

                <Configuration componentName="Tag">
                    <p><code>Tag</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>colour</code> (optional)</dt>
                        <dd>The tag colour to use. Supported values are:
                            <ul>
                                <li><code>grey</code></li>
                                <li><code>green</code></li>
                                <li><code>teal</code></li>
                                <li><strong><code>blue</code> (default)</strong></li>
                                <li><code>purple</code></li>
                                <li><code>pink</code></li>
                                <li><code>red</code></li>
                                <li><code>orange</code></li>
                                <li><code>yellow</code></li>
                            </ul>
                        </dd>
                        <dt><code>title</code></dt>
                        <dd>The text content of the tag.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-task-list">Task list</h2>

                <Example>
                    <TaskList
                        title="Application incomplete"
                    >
                        <TaskList.Item
                            href="#conditions"
                            id="task-conditions"
                            isComplete
                            statusText="Completed"
                            title="Conditions"
                        >
                            Tell us about your conditions, symptoms and any sensory issues you have.
                        </TaskList.Item>
                        <TaskList.Item
                            href="#in-progress"
                            id="task-medications"
                            statusText="In progress"
                            title="Medications"
                        >
                            Tell us about any medication you need.
                        </TaskList.Item>
                        <TaskList.Item
                            id="task-contacts"
                            statusText="Cannot start yet"
                            title="Contacts and supporting information"
                        >
                            Share any supporting documents and provide details of people we can talk to about you.
                        </TaskList.Item>
                    </TaskList>
                </Example>

                <Example title="Task list with grouped tasks">
                    <TaskList
                        title="Application incomplete"
                    >
                        <TaskList.Group
                            title="Provide your health details"
                        >
                            <TaskList.Item
                                href="#conditions"
                                id="task-conditions"
                                isComplete
                                statusText="Completed"
                                title="Conditions"
                            >
                                Tell us about your conditions, symptoms and any sensory issues you have.
                            </TaskList.Item>
                            <TaskList.Item
                                href="#in-progress"
                                id="task-medications"
                                isComplete
                                statusText="Completed"
                                title="Medications"
                            >
                                Tell us about any medication you need.
                            </TaskList.Item>
                            <TaskList.Item
                                href="#contacts"
                                id="task-contacts"
                                isComplete
                                statusText="Completed"
                                title="Contacts and supporting information"
                            >
                                Share any supporting documents and provide details of people we can talk to about you.
                            </TaskList.Item>
                        </TaskList.Group>

                        <TaskList.Group
                            title="Tell us about your daily living and mobility circumstances"
                            intro="This information will be used to check what additional benefits you may be able to apply for."
                        >
                            <TaskList.Item
                                href="#preparing-food"
                                id="task-preparing-food"
                                statusText="In progress"
                                tagColour="grey"
                                title="Preparing food"
                            >
                                Questions about your ability to prepare a simple meal safely and any help you need to do this.
                            </TaskList.Item>
                            <TaskList.Item
                                href="#taking-nutrition"
                                id="task-taking-nutrition"
                                statusText="Not started"
                                tagColour="grey"
                                title="Taking nutrition"
                            >
                                Questions about your ability to eat and drink and any help you need to do this.
                            </TaskList.Item>
                            <TaskList.Item
                                href="#managing-therapy"
                                id="task-managing-therapy"
                                statusText="Not started"
                                tagColour="grey"
                                title="Managing therapy or monitoring a health condition"
                            >
                                Questions about any help you need to monitor changes in your health condition, take medication or do therapy at home.
                            </TaskList.Item>
                        </TaskList.Group>
                    </TaskList>
                </Example>

                <Configuration componentName="Task list">
                    <p><code>TaskList</code> components can have either <code>TaskList.Item</code> or <code>TaskList.Group</code> children. Task list components can use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>headingId</code> (optional)</dt>
                        <dd>ID of the task list&apos;s heading element.</dd>
                        <dt><code>title</code></dt>
                        <dd>The title of the task list.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Task list item">
                    <p><code>TaskList.Item</code> item components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>href</code> (optional)</dt>
                        <dd>The URL of the page to link to.</dd>
                        <dt><code>id</code> (optional)</dt>
                        <dd>The value of the task&apos;s <code>id</code> attribute.</dd>
                        <dt><code>isComplete</code> (optional)</dt>
                        <dd>Whether the task is complete. Boolean.</dd>
                        <dt><code>statusText</code> (optional)</dt>
                        <dd>The text to use for the task&apos;s status tag.</dd>
                        <dt><code>tagColour</code> (optional)</dt>
                        <dd>The colour to use for the task&apos;s status tag. Default is <code>grey</code>.</dd>
                        <dt><code>title</code></dt>
                        <dd>The title of the task list.</dd>
                    </dl>

                    <p>Tasks can have additional content, provided as children of the task component.</p>
                </Configuration>

                <Configuration componentName="Task group">
                    <p><code>TaskList.Group</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>intro</code> (optional)</dt>
                        <dd>Text to put into an introduction paragraph above the group&apos;s tasks.</dd>
                        <dt><code>title</code></dt>
                        <dd>The title of the task group.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-text-input">Text input</h2>

                <Example>
                    <TextInput
                        id="text-input"
                        label="First name"
                        type="password"
                    />
                </Example>

                <Example title="Text input with hint text">
                    <TextInput
                        hintText="This is your given name."
                        id="text-input-hint"
                        label="First name"
                    />
                </Example>

                <Example title="Text input with associated button">
                    <TextInput
                        buttonIcon="Search"
                        buttonText="Search"
                        hasButton
                        id="text-input-button"
                        label="Search"
                    />
                </Example>

                <Example title="Text input with character count">
                    <TextInput
                        id="text-input-character-count"
                        label="First name"
                        maxlength="20"
                        value="Joe Bloggs"
                        width="fixed-20"
                    />
                </Example>

                <Example title="Text input with currency">
                    <TextInput
                        currency
                        id="text-input-currency"
                        label="Price per month"
                        width="fluid-one-third"
                    />
                </Example>

                <Configuration componentName="Text input">
                    <p><code>TextInput</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>errorMessage</code> (optional)</dt>
                        <dd>Text to use for an error message.</dd>
                        <dt><code>hasError</code> (optional)</dt>
                        <dd>Whether the field is in an error state. Boolean.</dd>
                        <dt><code>hintText</code> (optional)</dt>
                        <dd>Text to use for a text input&apos;s hint text.</dd>
                        <dt><code>id</code></dt>
                        <dd>Value to use for the <code>id</code> attribute of the <code>input</code> element.</dd>
                        <dt><code>label</code></dt>
                        <dd>Text to use for the text input&apos;s associated label.</dd>
                        <dt><code>name</code> (optional)</dt>
                        <dd>Value to use for the <code>name</code> attribute of the <code>input</code> element.</dd>
                        <dt><code>onBlur</code> (optional)</dt>
                        <dd>Function to fire in response to a blur event.</dd>
                        <dt><code>onChange</code> (optional)</dt>
                        <dd>Function to fire in response to a change event.</dd>
                        <dt><code>placeholder</code> (optional)</dt>
                        <dd>Value to use for the <code>placeholder</code> attribute of the <code>input</code> element.</dd>
                        <dt><code>type</code></dt>
                        <dd>Value to use for the <code>type</code> attribute of the <code>input</code> element. Default is <code>text</code>.</dd>
                        <dt><code>value</code> (optional)</dt>
                        <dd>The default value of the <code>input</code> element.</dd>
                        <dt><code>width</code> (optional)</dt>
                        <dd><p>The width to use for the <code>input</code> element. If no width is specified the text input is full-width. Supported values are:</p>
                            <ul>
                                <li><code>fixed-20</code> - 20 characters wide</li>
                                <li><code>fixed-10</code> - 10 characters wide</li>
                                <li><code>fixed-5</code> - 5 characters wide</li>
                                <li><code>fixed-4</code> - 4 characters wide</li>
                                <li><code>fixed-3</code> - 3 characters wide</li>
                                <li><code>fixed-2</code> - 2 characters wide</li>
                                <li><code>fluid-three-quarters</code> - three quarters of the width of the parent container</li>
                                <li><code>fluid-two-thirds</code> - two thirds of the width of the parent container</li>
                                <li><code>fluid-half</code> - half of the width of the parent container</li>
                                <li><code>fluid-one-third</code> - one third of the width of the parent container</li>
                                <li><code>fluid-one-quarter</code> - one quarter of the width of the parent container</li>
                            </ul>
                        </dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Text input with button">
                    <p>Use these additional props for a text input with an associated button:</p>
                    <dl>
                        <dt><code>buttonIcon</code></dt>
                        <dd>Name of the icon to use from the icon stack.</dd>
                        <dt><code>buttonText</code></dt>
                        <dd>Text content for the button (for screen readers).</dd>
                        <dt><code>hasButton</code></dt>
                        <dd>Whether the component has an associated button. Boolean.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Character count">
                    <p>Use these additional props for a text input with a character count:</p>
                    <dl>
                        <dt><code>countThreshold</code> (optional)</dt>
                        <dd>Percentage threshold to show the character count at.</dd>
                        <dt><code>maxlength</code></dt>
                        <dd>Maximum number of characters permitted.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Currency input">
                    <p>Use these additional props for a currency text input:</p>
                    <dl>
                        <dt><code>currency</code></dt>
                        <dd>Whether the component is a currency field. Boolean.</dd>
                        <dt><code>currencySymbol</code> (optional)</dt>
                        <dd>Currency symbol to use. Default is <code>£</code>.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-textarea">Textarea</h2>

                <Example>
                    <Textarea
                        id="textarea"
                        label="Description"
                        rows="2"
                    />
                </Example>

                <Example title="Textarea with character count">
                    <Textarea
                        defaultValue="Mygov.scot gives people and businesses information about and access to public services in Scotland. We work closely with public sector organisations to make public services easy to find and understand."
                        id="textarea-character-count"
                        label="Description"
                        maxlength="250"
                    />
                </Example>

                <Configuration componentName="Textarea">
                    <p><code>Textarea</code> components can use the following props:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                        <dt><code>errorMessage</code> (optional)</dt>
                        <dd>Text to use for an error message.</dd>
                        <dt><code>hasError</code> (optional)</dt>
                        <dd>Whether the field is in an error state. Boolean.</dd>
                        <dt><code>hintText</code> (optional)</dt>
                        <dd>Text to use for a textarea&apos;s hint text.</dd>
                        <dt><code>id</code></dt>
                        <dd>Value to use for the <code>id</code> attribute of the <code>textarea</code> element.</dd>
                        <dt><code>label</code></dt>
                        <dd>Text to use for the textarea&apos;s associated label.</dd>
                        <dt><code>name</code> (optional)</dt>
                        <dd>Value to use for the <code>name</code> attribute of the <code>textarea</code> element.</dd>
                        <dt><code>onBlur</code> (optional)</dt>
                        <dd>Function to fire in response to a blur event.</dd>
                        <dt><code>onChange</code> (optional)</dt>
                        <dd>Function to fire in response to a change event.</dd>
                        <dt><code>placeholder</code> (optional)</dt>
                        <dd>Value to use for the <code>placeholder</code> attribute of the <code>textarea</code> element.</dd>
                        <dt><code>rows</code> (optional)</dt>
                        <dd>Value to use for the <code>rows</code> attribute of the <code>textarea</code> element. Default is <code>4</code>.</dd>
                        <dt><code>value</code> (optional)</dt>
                        <dd>The default value of the <code>textarea</code> element.</dd>
                    </dl>
                </Configuration>

                <Configuration componentName="Character count">
                    <p>Use these additional props for a textarea with a character count:</p>
                    <dl>
                        <dt><code>countThreshold</code> (optional)</dt>
                        <dd>Percentage threshold to show the character count at.</dd>
                        <dt><code>maxlength</code></dt>
                        <dd>Maximum number of characters permitted.</dd>
                    </dl>
                </Configuration>

                <h2 className="dsjsx_example-title" id="section-warning-text">Warning text</h2>

                <Example>
                    <WarningText>
                        Call 999 if you or someone else is in immediate danger, or if the crime is in progress.
                    </WarningText>
                </Example>

                <Configuration componentName="Warning text">
                    <p><code>WarningText</code> can have use the following prop:</p>
                    <dl>
                        <dt><code>className</code> (optional)</dt>
                        <dd>A CSS class name to pass to the component.</dd>
                    </dl>
                </Configuration>

                <BackToTop />
            </main>
        </>
    );
}

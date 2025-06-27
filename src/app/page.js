'use client';

// "OFFICIAL" COMPONENTS

import Accordion, { AccordionItem } from '@scottish-government/designsystem-react/dist/components/accordion/accordion';
import AspectBox from '@scottish-government/designsystem-react/dist/components/aspect-box/aspect-box';
//// import Autocomplete from './components/autocomplete/autocomplete'; // refactored to be a version of SiteSearch
import BackToTop from '@scottish-government/designsystem-react/dist/components/back-to-top/back-to-top';
import Breadcrumbs from '@scottish-government/designsystem-react/dist/components/breadcrumbs/breadcrumbs';
import Button from '@scottish-government/designsystem-react/dist/components/button/button';
//// character count: DONE as part of text input. To be generalised with textarea.
import CheckboxGroup from '@scottish-government/designsystem-react/dist/components/checkbox/checkbox';
import ConfirmationMessage from '@scottish-government/designsystem-react/dist/components/confirmation-message/confirmation-message';
// contact details
// cookie banner
import DatePicker from '@scottish-government/designsystem-react/dist/components/date-picker/date-picker';
import Details from '@scottish-government/designsystem-react/dist/components/details/details';
import ErrorMessage from '@scottish-government/designsystem-react/dist/components/error-message/error-message';
// error summary
// feature header
// file download
import HideThisPage from '@scottish-government/designsystem-react/dist/components/hide-this-page/hide-this-page';
import InsetText from '@scottish-government/designsystem-react/dist/components/inset-text/inset-text';
import Metadata, { MetadataItem } from '@scottish-government/designsystem-react/dist/components/page-metadata/page-metadata';
import NotificationBanner from '@scottish-government/designsystem-react/dist/components/notification-banner/notification-banner';
import NotificationPanel from '@scottish-government/designsystem-react/dist/components/notification-panel/notification-panel';
import PageHeader from '@scottish-government/designsystem-react/dist/components/page-header/page-header';
import Pagination from '@scottish-government/designsystem-react/dist/components/pagination/pagination';
import PhaseBanner from '@scottish-government/designsystem-react/dist/components/phase-banner/phase-banner';
import Question from '@scottish-government/designsystem-react/dist/components/question/question';
import RadioGroup from '@scottish-government/designsystem-react/dist/components/radio-button/radio-button';
import Select from '@scottish-government/designsystem-react/dist/components/select/select';
import SequentialNavigation from '@scottish-government/designsystem-react/dist/components/sequential-navigation/sequential-navigation';
import SideNavigation from '@scottish-government/designsystem-react/dist/components/side-navigation/side-navigation';
// site footer
// site header - incl mobile nav menu
import SiteNavigation from '@scottish-government/designsystem-react/dist/components/site-navigation/site-navigation';
import SiteSearch from '@scottish-government/designsystem-react/dist/components/site-search/site-search';
import SkipLinks from '@scottish-government/designsystem-react/dist/components/skip-links/skip-links';
// summary list
// table
// tabs
import Tag from '@scottish-government/designsystem-react/dist/components/tag/tag';
import Textarea from '@scottish-government/designsystem-react/dist/components/textarea/textarea';
import TextInput from '@scottish-government/designsystem-react/dist/components/text-input/text-input';
import WarningText from '@scottish-government/designsystem-react/dist/components/warning-text/warning-text';

// SUPPORTING COMPONENTS

import ScreenReaderText from '@scottish-government/designsystem-react/dist/common/screen-reader-text';

// UNPUBLISHED COMPONENTS

// article aside
// back link
// card
// category item
// category list
// content label
import ContentsNav from '@scottish-government/designsystem-react/dist/components/contents-nav/contents-nav';
import Icon from '@scottish-government/designsystem-react/dist/common/icon';
// link item (basically category item?)
// link list (found in a page block on dynamic issue hub)
// search controls
// search result
// search results
// site branding
// sort options
// step navigation (enhanced accordion)
import TaskList, { Task, TaskGroup } from '@scottish-government/designsystem-react/dist/components/task-list/task-list';
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
        <main className="ds_wrapper" id="main-content">

            <PageHeader
                title="Design System React components"
            >
                <Metadata>
                    <MetadataItem name="Last updated">{lastUpdated}</MetadataItem>
                </Metadata>
            </PageHeader>

            <ContentsNav label="Sections in this page" items={[
                {
                    href: '#section-accordion',
                    title: 'Accordion'
                },
                {
                    href: '#section-aspect-box',
                    title: 'Aspect box'
                },
                {
                    href: '#section-back-to-top',
                    title: 'Back to top'
                },
                {
                    href: '#section-breadcrumbs',
                    title: 'Breadcrumbs'
                },
                {
                    href: '#section-button',
                    title: 'Button'
                },
                {
                    href: '#section-checkbox',
                    title: 'Checkbox'
                },
                {
                    href: '#section-confirmation-message',
                    title: 'Confirmation message'
                },
                {
                    href: '#section-contents-nav',
                    title: 'Contents nav'
                },
                {
                    href: '#section-date-picker',
                    title: 'Date picker'
                },
                {
                    href: '#section-details',
                    title: 'Details'
                },
                {
                    href: '#section-hide-this-page',
                    title: 'Hide this page'
                },
                {
                    href: '#section-inset-text',
                    title: 'Inset text'
                },
                {
                    href: '#section-notification-banner',
                    title: 'Notification banner'
                },
                {
                    href: '#section-notification-panel',
                    title: 'Notification panel'
                },
                {
                    href: '#section-page-header',
                    title: 'Page header'
                },
                {
                    href: '#section-page-metadata',
                    title: 'Page metadata'
                },
                {
                    href: '#section-pagination',
                    title: 'Pagination'
                },
                {
                    href: '#section-phase-banner',
                    title: 'Phase banner'
                },
                {
                    href: '#section-question',
                    title: 'Question'
                },
                {
                    href: '#section-radio',
                    title: 'Radio button'
                },
                {
                    href: '#section-select',
                    title: 'Select (dropdown)'
                },
                {
                    href: '#section-sequential-navigation',
                    title: 'Sequential navigation'
                },
                {
                    href: '#section-side-navigation',
                    title: 'Side navigation'
                },
                {
                    href: '#section-site-navigation',
                    title: 'Site navigation'
                },
                {
                    href: '#section-site-search',
                    title: 'Site search'
                },
                {
                    href: '#section-skip-links',
                    title: 'Skip links'
                },
                {
                    href: '#section-tag',
                    title: 'Tag'
                },
                {
                    href: '#section-task-list',
                    title: 'Task list'
                },
                {
                    href: '#section-text-input',
                    title: 'Text input'
                },
                {
                    href: '#section-textarea',
                    title: 'Textarea'
                },
                {
                    href: '#section-tag',
                    title: 'Tag'
                }
            ]}/>



                {/* <ContentsLink href="#section-error-message">Error message</ContentsLink> */}
                {/* <ContentsLink href="#section-hint-text">Hint text</ContentsLink> */}
                {/* <ContentsLink href="#section-icon">Icon</ContentsLink> */}
                {/* <ContentsLink href="#section-screen-reader-text">Screen reader text</ContentsLink> */}




            <h2 className="dsjsx_example-title" id="section-accordion">Accordion</h2>

            <Example>
                <Accordion id="accordion-example">
                    <AccordionItem id="accordion-1" title="Healthcare for veterans">
                        <p>Veterans are entitled to the same healthcare as any citizen. And there
                            are health care options and support available specifically for veterans.</p>
                        <p>If you have a health condition that&apos;s related to your service, you&apos;re
                            entitled to priority treatment based on clinical need.</p>
                    </AccordionItem>
                    <AccordionItem open id="accordion-2" title="Employability for veterans">
                        <p>If you&apos;re looking for a job, there are several organisations that can help
                            you <a href="#accordion-link">find a job or develop new skills</a>.</p>
                    </AccordionItem>
                    <AccordionItem id="accordion-3" title="Housing for veterans">
                        <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                            there&apos;s support specifically for veterans.</p>
                    </AccordionItem>
                </Accordion>
            </Example>

            <Configuration componentName="Accordion">
                <p>Accordion components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headerLevel</code></dt>
                    <dd>Header level to use for the accordion items&apos; titles. Default is <code>H3</code>.</dd>
                    <dt><code>hideOpenAll</code> (optional)</dt>
                    <dd>Do not show the "open all" button. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Accordion item">
                <p>Accordion components&apos; <code>AccordionItem</code> children can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headerLevel</code> (optional)</dt>
                    <dd>Header level to use for the accordion item&apos;s title. It is better to let the parent set this for all of its accordion items.</dd>
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
                <p>Aspect box components can use the following props:</p>
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
                <p>Back to top components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>href</code> (optional)</dt>
                    <dd>Fragment identifier for the target element. Default is <code>#page-top</code>.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-breadcrumbs">Breadcrumbs</h2>

            <Example>
                <Breadcrumbs
                    items={[
                        { href: 'home', title: 'Home' },
                        { href: 'category', title: 'Category' },
                        { title: 'Page' }
                    ]}
                    hideLastItem
                />
            </Example>

            <Configuration componentName="Breadcrumbs">
                <p>Breadcrumbs components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>hideLastItem</code> (optional)</dt>
                    <dd>Will set the final breadcrumb (i.e. the current page) to visually hidden if present. Boolean.</dd>
                    <dt><code>items</code></dt>
                    <dd>Array of breadcrumb item data.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Breadcrumb items">
                <p>Objects in the bredcrumb items array can have the following properties:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>URL to use for the breadcrumb item. Omit the <code>href</code> prop from the last breadcrumb item (representing the current page) to make it display without a link. This is the preferred way of presenting breadcrumbs in the Design System.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for a breadcrumb item.</dd>
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
                <p>Button components can use the following props:</p>
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
                <CheckboxGroup items={[
                    {
                        id: 'universal-credit',
                        label: 'Universal Credit',
                        checked: true
                    },
                    {
                        id: 'pensioncredit',
                        label: 'Pension Credit'
                    },
                    {
                        id: 'jsa',
                        label: 'Income-based Job Seeker\'s Allowance',
                    },
                    {
                        exclusive: true,
                        id: 'none',
                        label: 'No, I do not receive any of these benefits',
                    }
                ]}/>
            </Example>

            <Configuration componentName="Checkbox group">
                <p>Use a <code>CheckboxGroup</code> component to group checkboxes. Checkbox group components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>items</code></dt>
                    <dd>Array of checkbox items.</dd>
                    <dt><code>small</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; checkbox variant. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Checkbox items">
                <p>Objects in the checkbox items array can have the following properties:</p>
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
                    <dd>Whether to use the &lsquo;small&rsquo; checkbox variant. Boolean. It is better to set this on the <code>CheckboxGroup</code> component.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-confirmation-message">Confirmation message</h2>

            <Example>
                <ConfirmationMessage title="Landlord added successfully">
                    <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
                </ConfirmationMessage>
            </Example>

            <Configuration componentName="Confirmation message">
                <p>Confirmation message components can use the following prop:</p>
                <dl>
                    <dt><code>ariaLive</code> (optional)</dt>
                    <dd>Value for an <code>aria-live</code> attribute on the confirmation message, for cases where it&apos;s added to the page dynamically. Default is <code>polite</code>.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headerLevel</code> (optional)</dt>
                    <dd>The header level for the confirmation message&apos;s title. The default is <code>H3</code>. Changing the heading level does not alter the confirmation message&apos;s appearance.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-contents-nav">Contents nav</h2>

            <Example>
                <ContentsNav label="Pages in this guide" items={[
                    {
                        title: 'Apply for Blue Badge',
                        current: true
                    },
                    {
                        title: 'Eligibility',
                        href: '#2'
                    },
                    {
                        title: 'Using your Blue Badge',
                        href: '#3'
                    },
                    {
                        title: 'Report a lost, stolen or misuesd Blue Badge',
                        href: '#4'
                    },
                    {
                        title: 'Changing or handing back a Blue Badge',
                        href: '#5'
                    }
                ]} />
            </Example>

            <Configuration componentName="Contents navigation">
                <p>Contents nav components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>items</code></dt>
                    <dd>Array of content nav items.</dd>
                    <dt><code>label</code> (optional)</dt>
                    <dd>Text to use for the content nav&apos;s <code>aria-label</code> property, which is required for accessibility. Default is &lsquo;Pages in this section&rsquo;.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>The title for the contents nav. Default is &lsquo;Contents&rsquo;.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Contents nav items">
                <p>Objects in the contents nav items array can use the following propserties:</p>
                <dl>
                    <dt><code>current</code> (optional)</dt>
                    <dd>Whether the nav item is for the current page. Boolean.</dd>
                    <dt><code>href</code> (optional)</dt>
                    <dd>URL of the contents nav item</dd>
                    <dt><code>title</code></dt>
                    <dd>Text of the content nav item</dd>
                </dl>
            </Configuration>

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
                <p>Date picker components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>disabledDates</code> (optional)</dt>
                    <dd>Space-separated list of dates to disable in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                    <dt><code>error</code> (optional)</dt>
                    <dd>Whether the date picker is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
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
                    <dd>The width of the input element. See <code>TextInput</code> for the available options. Default is <code>fixed-10</code>.</dd>
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
                <p>Details components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>summary</code></dt>
                    <dd>Text to use for the details componen&apos;s &lsquo;summary&rsquo; element.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-hide-this-page">Hide this page</h2>

            <Example nodisplay>
                <HideThisPage />
            </Example>

            <Configuration componentName="Hide this page">
                <p>Hide this lage can have use the following props:</p>
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
                <p>Inset text can have use the following prop:</p>
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
                <NotificationBanner icon iconColour iconInverse close>
                    <p>We need to tell you about <a href="#notification">something</a></p>
                </NotificationBanner>
            </Example>

            <Configuration componentName="Notification banner">
                <p>Notification banner components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>close</code> (optional)</dt>
                    <dd>Shows the &lsquo;close&rsquo; button on the notification banner. Boolean.</dd>
                    <dt><code>icon</code> (optional)</dt>
                    <dd>Shows the &lsquo;high priority&rsquo; icon on the notification banner. Boolean.</dd>
                    <dt><code>iconColour</code> (optional)</dt>
                    <dd>Makes the icon display in the alternative colour scheme (yellow). Boolean.</dd>
                    <dt><code>iconInverse</code> (optional)</dt>
                    <dd>Makes the icon be inverted against a circle background. Boolean.</dd>
                    <dt><code>title</code> (optional)</dt>
                    <dd>A hidden title for the notification banner, useful for screen reader users. Default is &lsquo;Information&rsquo;.</dd>
                </dl>

                <p>Both <code>iconColour</code> and <code>iconInverse</code> can be used together. This combines the effects of both modifiers.</p>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-notification-panel">Notification panel</h2>

            <Example>
                <NotificationPanel title="Thank you">
                    <p>Your Saltire Scholarship Application form has been successfully submitted.</p>
                </NotificationPanel>
            </Example>

            <Configuration componentName="Notification panel">
                <p>Notification panel components can use the following prop:</p>
                <dl>
                    <dt><code>ariaLive</code> (optional)</dt>
                    <dd>Value for an <code>aria-live</code> attribute on the notification panel, for cases where it&apos;s added to the page dynamically. Default is <code>polite</code>.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headerLevel</code> (optional)</dt>
                    <dd>The header level for the notification panel&apos;s message&apos;s title. The default is H1. Changing the heading level does not alter the notification panel&apos;s appearance.</dd>
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
                        <MetadataItem name="Last updated">15 August 2024</MetadataItem>
                        <MetadataItem name="Directorate">
                            <a href="#one">Constitution Directorate</a>
                        </MetadataItem>
                        <MetadataItem name="Part of">
                            <a href="#two">Constitution and democracy</a>,{' '}
                            <a href="#three">Public sector</a>
                        </MetadataItem>
                        <MetadataItem name="FOI reference">
                            FOI/202400423236
                        </MetadataItem>
                        <MetadataItem name="Date received">
                            18 July 2024
                        </MetadataItem>
                        <MetadataItem name="Date responded">
                            15 August 2024
                        </MetadataItem>
                    </Metadata>
                </PageHeader>
            </Example>

            <Configuration componentName="Page header">
                <p>Page header components can use the following props:</p>
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
                    <MetadataItem name="Last updated">21/04/2020</MetadataItem>
                    <MetadataItem name="Directorate">
                        <a href="#one">Equality, Inclusion and Human Rights Directorate</a>
                    </MetadataItem>
                    <MetadataItem name="Part of">
                        <a href="#two">Equality and rights</a>,{' '}
                        <a href="#three">Law and order</a>
                    </MetadataItem>
                </Metadata>
            </Example>

            <Example title="Inline metadata">
                <Metadata inline>
                    <MetadataItem name="Content type">Publication</MetadataItem>
                    <MetadataItem name="Last updated">21/04/2020</MetadataItem>
                </Metadata>
            </Example>

            <Configuration componentName="Page metadata">
                <p>Page metadata components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>inline</code> (optional)</dt>
                    <dd>Makes the page metadata use the truncated &lsquo;inline&rsquo; display. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Medatata item">
                <p>Page metadata components can have any number of <code>MetadataItem</code> children. Metadata item components can use the following props:</p>
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
                <p>Pagination components can use the following props:</p>
                <dl>
                    <dt><code>ariaLabel</code> (optional)</dt>
                    <dd>Text to use for an <code>aria-label</code> attribute on the <code>nav</code> element. Default is &lsquo;Pages&rsquo;.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>onClick</code> (optional)</dt>
                    <dd>Function to fire in response to a click event on paginaiton links.</dd>
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
                    error
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
                    <CheckboxGroup items={[
                        {label: 'Universal Credit', id: 'universalcredit-question'},
                        {label: 'Pension Credit', id: 'pensioncredit-question'},
                        {label: 'Income-based Job Seeker\'s Allowance', id: 'jsa-question'},
                        {label: 'No, I do not receive any of these benefits', id: 'noneCheckbox-question', exclusive: true}
                    ]}/>
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
                    <CheckboxGroup items={[
                        {label: 'Universal Credit', id: 'universalcredit-question-error'},
                        {label: 'Pension Credit', id: 'pensioncredit-question-error'},
                        {label: 'Income-based Job Seeker\'s Allowance', id: 'jsa-question-error'},
                        {label: 'No, I do not receive any of these benefits', id: 'noneCheckbox-question-error', exclusive: true}
                    ]}/>
                </Question>
            </Example>

            <Configuration componentName="Question">
                <p>Question components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>error</code> (optional)</dt>
                    <dd>Whether the question is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text for a question&apos;s <code>ErrorMessage</code> component. For use when the question uses a fieldset.</dd>
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
                <RadioGroup name="propertyType" items={[
                    {
                        label: "Flat",
                        id: "flat-radio"
                    },
                    {
                        label: "Bungalow",
                        id: "bungalow-radio"
                    },
                    {
                        label: "Cottage",
                        id: "cottage-radio"
                    },
                    {
                        label: "Terraced house",
                        id: "terraced-radio"
                    },
                    {
                        label: "Semi-detached house",
                        id: "semi-radio"
                    },
                    {
                        label: "Detached house",
                        id: "detached-radio"
                    }]}/>
            </Example>

            <Example title="Radio buttons with hint text">
                <RadioGroup name="paymentType" items={[
                    {
                        label: "Advance",
                        id: "advance-radio",
                        hintText: "This means you're paid for the period coming up, e.g. the month ahead"
                    },
                    {
                        label: "Arrears",
                        id: "arrears-radio",
                        hintText: "This means you're paid for the time that's just passed, e.g. for the last month"
                    }
                ]}/>
            </Example>

            <Configuration componentName="Radio group">
                <p>Use a <code>RadioGroup</code> component to group radio buttons. Radio groups can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>inline</code> (optional)</dt>
                    <dd>Whether to display the radio buttons in the group inline instead of stacked. Boolean.</dd>
                    <dt><code>items</code></dt>
                    <dd>Array of radio button items.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value for the <code>name</code> attribute on radio buttons in the group.</dd>
                    <dt><code>small</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; checkbox variant. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Radio group items">
                <p>Objects in the radio group&apos;s items array can use the following propserties:</p>
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
                    <dd>Value to use for the radio button&apos;s <code>name</code> attribute. It is better to set a name on a parent <code>RadioGroup</code> element instead.</dd>
                    <dt><code>onBlur</code> (optional)</dt>
                    <dd>Function to fire in response to a blur event.</dd>
                    <dt><code>onChange</code> (optional)</dt>
                    <dd>Function to fire in response to a change event.</dd>
                    <dt><code>small</code> (optional)</dt>
                    <dd>Whether to use the &lsquo;small&rsquo; radio button variant. Boolean. It is better to set this on the <code>RadioGroup</code> component.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-select">Select (dropdown)</h2>

            <Example>
                <Select
                    defaultValue="button"
                    id="select-component"
                    label="Choose a component"
                    placeholder="Choose a component"
                    options={[
                        {
                            value: 'accordion',
                            text: 'Accordion'
                        },
                        {
                            value: 'breadcrumbs',
                            text: 'Breadcrumbs'
                        },
                        {
                            value: 'button',
                            text: 'Button'
                        }
                    ]}
                >
                </Select>
            </Example>

            <Configuration componentName="Select">
                <p>Select components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>defaultValue</code> (optional)</dt>
                    <dd>The ID of the option that you want selected on page load.</dd>
                    <dt><code>error</code> (optional)</dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
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

            <Configuration componentName="Select 'option' items">
                <p>Objects in the &lsquo;options&rsquo; array can use the following properties:</p>
                <dl>
                    <dt><code>text</code></dt>
                    <dd>The text of the <code>option</code> element.</dd>
                    <dt><code>value</code> (optional)</dt>
                    <dd>The <code>value</code> attribute of the <code>option</code> element.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-sequential-navigation">Sequential navigation</h2>

            <Example>
                <SequentialNavigation
                    next={{ title: 'Eligibility: who can have one?', href: '#next' }}
                    previous={{ title: 'Apply for or renew a Blue Badge?', href: '#prev' }}
                />
            </Example>

            <Configuration componentName="Sequential navigation">
                <p>Sequential navigation uses the following props:</p>
                <dl>
                    <dt><code>ariaLabel</code> (optional)</dt>
                    <dd>Text to use for an <code>aria-label</code> attribute on the <code>nav</code> element. Default is &lsquo;Article navigation&rsquo;.</dd>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>next</code> (optional)</dt>
                    <dd>Object containing data for the &lsquo;next&rsquo; link.</dd>
                    <dt><code>previous</code> (optional)</dt>
                    <dd>Object containing data for the &lsquo;previous&rsquo; link.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Sequential navigation 'next' and 'previous'">
                <p>The values for &lsquo;next&rsquo; and &lsquo;previous&rsquo; are both object with the following properties:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-side-navigation">Side navigation</h2>

            <Example>
                <SideNavigation items={[
                    {
                        title: 'apples',
                        href: '#apples',
                        items: [
                            {
                                title: 'Green apples',
                                href: '#green-apples',
                                items: [
                                    {
                                        title: 'Bramley',
                                        current: true
                                    },
                                    {
                                        title: 'Granny Smith',
                                        href: '#granny-smith'
                                    }
                                ]
                            },
                            {
                                title: 'Red apples',
                                href: '#red-apples'
                            }
                        ]
                    },
                    {
                        title: 'Bananas',
                        href: '#bananas'
                    },
                    {
                        title: 'Cherries',
                        href: '#cherries'
                    },
                    {
                        title: 'Dates',
                        href: '#dates'
                    }
                ]}/>
            </Example>

            <Configuration componentName="Side navigation">
                <p>Side navigation components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>items</code></dt>
                    <dd>Array of side navigation item objects.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Side navigation items">
                <p>Objects in the side navigation &lsquo;items&rsquo; array can use the following properties:</p>
                <dl>
                    <dt><code>current</code> (optional)</dt>
                    <dd>Whether this is the current page. The current page uses a <code>span</code> element and is not a link. Boolean. Default is false.</dd>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>items</code> (optional)</dt>
                    <dd>Array of side navigation item objects, for a nested navigation structure.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-site-navigation">Site navigation</h2>

            <Example>
                <SiteNavigation items={[
                    {title: 'About', href: '#about'},
                    {title: 'Get started', href: '#get-started'},
                    {title: 'Styles', href: '#styles'},
                    {title: 'Components', href: '#components', current: true},
                    {title: 'Patterns', href: '#patterns'},
                    {title: 'Guidance', href: '#guidance'},
                ]}/>
            </Example>

            <Configuration componentName="Site navigation">
                <p>Site navigation components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>items</code></dt>
                    <dd>Array of site navigation item objects.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Site navigation items">
                <p>Objects in the site navigation &lsquo;items&rsquo; array can use the following properties:</p>
                <dl>
                    <dt><code>current</code> (optional)</dt>
                    <dd>Whether this is the current page. Boolean. Default is false.</dd>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
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
                <p>Site search can use the following props:</p>
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
                <SkipLinks mainContentId="baz" items={[
                    {title: 'bar', targetId: 'foo'}
                ]}/>
            </Example>

            <Configuration componentName="Skip links">
                <p>Skip links always contain a link to the main content of a page. You can include additional links in the <code>items</code> prop. Skip links components can use the following props:</p>
                <dl>
                    <dt><code>items</code> (optional)</dt>
                    <dd>Array of additional skip link items if you need to add more than just &lsquo;main content&rsquo;.</dd>
                    <dt><code>mainContentId</code> (optional)</dt>
                    <dd>The <code>id</code> attribute of the &lsquo;main content&rsquo; element to link to. Default is <code>main-content</code>.</dd>
                    <dt><code>mainLinkText</code> (optional)</dt>
                    <dd>The text to use for the &lsquo;main content&rsquo; link. Default is &lsquo;Skip to main content&rsquo;.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Skip link items">
                <p>Objects in the skip link items array use the following properties:</p>
                <dl>
                    <dt><code>targetId</code></dt>
                    <dd>ID of the destination element.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-tag">Tag</h2>

            <Example>
                <Tag title="Beta"/>
            </Example>

            <Example>
                <Tag colour="green" title="Completed"/>
            </Example>

            <Configuration componentName="Tag">
                <p>Tag components can use the following props:</p>
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

            <h2 className="dsjsx_example-title" id="task-list">Task list</h2>

            <Example>
                <TaskList
                    title="Application incomplete"
                >
                    <Task
                        href="#conditions"
                        id="task-conditions"
                        isComplete
                        statusText="Completed"
                        title="Conditions"
                    >
                        Tell us about your conditions, symptoms and any sensory issues you have.
                    </Task>
                    <Task
                        href="#in-progress"
                        id="task-medications"
                        statusText="In progress"
                        title="Medications"
                    >
                        Tell us about any medication you need.
                    </Task>
                    <Task
                        id="task-contacts"
                        statusText="Cannot start yet"
                        title="Contacts and supporting information"
                    >
                        Share any supporting documents and provide details of people we can talk to about you.
                    </Task>
                </TaskList>
            </Example>

            <Example title="Task list with grouped tasks">
                <TaskList
                    title="Application incomplete"
                >
                    <TaskGroup
                        title="Provide your health details"
                    >
                        <Task
                            href="#conditions"
                            id="task-conditions"
                            isComplete
                            statusText="Completed"
                            title="Conditions"
                        >
                            Tell us about your conditions, symptoms and any sensory issues you have.
                        </Task>
                        <Task
                            href="#in-progress"
                            id="task-medications"
                            isComplete
                            statusText="Completed"
                            title="Medications"
                        >
                            Tell us about any medication you need.
                        </Task>
                        <Task
                            href="#contacts"
                            id="task-contacts"
                            isComplete
                            statusText="Completed"
                            title="Contacts and supporting information"
                        >
                            Share any supporting documents and provide details of people we can talk to about you.
                        </Task>
                    </TaskGroup>

                    <TaskGroup
                        title="Tell us about your daily living and mobility circumstances"
                        intro="This information will be used to check what additional benefits you may be able to apply for."
                    >
                        <Task
                            href="#preparing-food"
                            id="task-preparing-food"
                            statusText="In progress"
                            tagColour="grey"
                            title="Preparing food"
                        >
                            Questions about your ability to prepare a simple meal safely and any help you need to do this.
                        </Task>
                        <Task
                            href="#taking-nutrition"
                            id="task-taking-nutrition"
                            statusText="Not started"
                            tagColour="grey"
                            title="Taking nutrition"
                        >
                            Questions about your ability to eat and drink and any help you need to do this.
                        </Task>
                        <Task
                            href="#managing-therapy"
                            id="task-managing-therapy"
                            statusText="Not started"
                            tagColour="grey"
                            title="Managing therapy or monitoring a health condition"
                        >
                            Questions about any help you need to monitor changes in your health condition, take medication or do therapy at home.
                        </Task>
                    </TaskGroup>
                </TaskList>
            </Example>

            <Configuration componentName="Task list">
                <p>Task list components can have either <code>Task</code> or <code>TaskGroup</code> children. Task list components can use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>headingId</code> (optional)</dt>
                    <dd>ID of the task list&apos;s heading element.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title of the task list.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Task">
                <p>Task components can use the following props:</p>
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
                <p>Task groups can use the following props:</p>
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
                <p>Text input components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>error</code> (optional)</dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
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
                <p>Textarea components can use the following props:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>error</code> (optional)</dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code> (optional)</dt>
                    <dd>Text to use for an error message.</dd>
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
                <p>Warning text can have use the following prop:</p>
                <dl>
                    <dt><code>className</code> (optional)</dt>
                    <dd>A CSS class name to pass to the component.</dd>
                </dl>
            </Configuration>

            <BackToTop />
        </main>
    );
}

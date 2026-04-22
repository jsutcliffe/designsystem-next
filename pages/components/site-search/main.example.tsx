import SiteSearch from '@scottish-government/designsystem-react/src/components/SiteSearch/SiteSearch';

import ExampleLayout from '../../../app/example-layout';

type AutocompleteResponseObject = {
    key: string,
    displayText: string,
    weight: string,
    type: string,
    category: string
}

type SuggestionObject = { response: string };

const suggestionMappingFunction = function (suggestionObj: SuggestionObject) {
    const responseObj = JSON.parse(suggestionObj.response).map((item: string) => ({
        key: '',
        displayText: item,
        weight: '',
        type: '',
        category: ''
    }));
    const siteSearchElement = document.getElementById('site-search') as HTMLInputElement;
    const filteredResults = responseObj.filter((item: AutocompleteResponseObject) => (item.displayText.toLowerCase().indexOf(siteSearchElement.value.toLowerCase()) > -1));
    return filteredResults.slice(0,6);
}

export const Content = <SiteSearch id="foo"
    autocompleteEndpoint="/autocomplete-dummy-data.json#"
    // autocompleteSuggestionMappingFunction={suggestionMappingFunction}
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

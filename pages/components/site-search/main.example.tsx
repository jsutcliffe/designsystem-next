// @ts-expect-error no types from DS library
import SiteSearch from '@scottish-government/designsystem-react/dist/components/SiteSearch/SiteSearch';

import ExampleLayout from '../../../app/example-layout';


type AutocompleteResponseObject = {
    key: string,
    displayText: string,
    weight: string,
    type: string,
    category: string
}

const suggestionMappingFunction = function (request: XMLHttpRequest) {
    const responseObj = JSON.parse(request.response).map((item: string) => ({
        key: '',
        displayText: item,
        weight: '',
        type: '',
        category: ''
    }));
    const siteSearchElement = document.getElementById('site-search') as HTMLInputElement;
    const filteredResults = responseObj.filter((item: AutocompleteResponseObject) => (item.displayText.toLowerCase().indexOf(siteSearchElement.value.toLowerCase()) > -1));
console.log(responseObj,filteredResults)
    return filteredResults.slice(0,6);
}

export const Content = <SiteSearch
    autocompleteEndpoint="/autocomplete-dummy-data.json#"
    autocompleteSuggestionMappingFunction={suggestionMappingFunction}
/>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

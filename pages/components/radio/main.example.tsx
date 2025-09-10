// @ts-expect-error no types from DS library
import RadioButton from '@scottish-government/designsystem-react/dist/components/RadioButton/RadioButton';
// @ts-expect-error no types from DS library
import RadioGroup from '@scottish-government/designsystem-react/dist/components/RadioButton/RadioGroup';

import ExampleLayout from '../../../app/example-layout';

export const Content = <RadioGroup name="propertyType">
    <RadioButton label="Flat" id="flat-radio"/>
    <RadioButton label="Bungalow" id="bungalow-radio"/>
    <RadioButton label="Cottage" id="cottage-radio"/>
    <RadioButton label="Terraced house" id="terraced-radio"/>
    <RadioButton label="Semi-detached house" id="semi-radio"/>
    <RadioButton label="Detached house" id="detached-radio"/>
</RadioGroup>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

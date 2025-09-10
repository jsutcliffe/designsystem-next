// @ts-expect-error no types from DS library
import Table from '@scottish-government/designsystem-react/dist/components/Table/Table';

import ExampleLayout from '../../../app/example-layout';

export const Content = <Table>
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
</Table>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

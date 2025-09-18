// @ts-expect-error no types from DS library
import SideNavigation from '@scottish-government/designsystem-react/dist/components/SideNavigation/SideNavigation';

import ExampleLayout from '../../../app/example-layout';

export const Content = <SideNavigation>
    <SideNavigation.List isRoot>
        <SideNavigation.Item href="#apples" title="Apples">
            <SideNavigation.List>
                <SideNavigation.Item href="#green-apples" title="Green apples">
                    <SideNavigation.List>
                        <SideNavigation.Item href="#bramley" title="Bramley" isCurrent/>
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
</SideNavigation>;

export default function Page() {
    return (<ExampleLayout>
        {Content}
    </ExampleLayout>);
}

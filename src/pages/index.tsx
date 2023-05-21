import BasicTabs from '@/components/Tabs/Tabs';
import { BasicTabsTabDataType } from '@/types/components/Tabs';
import { AirPlane, HomeSmile } from 'react-huge-icons/outline';
import SearchFieldsFlights from '@/components/SearchFieldsFlights/SearchFieldsFlights';

const tabData: BasicTabsTabDataType[] = [
    {
        id: 1,
        iconTab: <AirPlane className='w-7 h-7 !m-0' />,
        indexTab: 0,
        labelTab: 'Flight',
        TabPanelData: <SearchFieldsFlights />,
    },
    {
        id: 2,
        iconTab: <HomeSmile className='w-7 h-7 !m-0' />,
        indexTab: 1,
        labelTab: 'Hotel',
        TabPanelData: <h2>Coming Soon ...</h2>,
    },
];

export default function Home() {
    return (
        <div className='flex items-center justify-center w-full h-[100vh] bg-gray-700'>
            <div className='container flex items-center justify-center'>
                <div className='w-full lg:w-1/2 bg-white rounded-lg p-5'>
                    <BasicTabs tabData={tabData} />
                </div>
            </div>
        </div>
    );
}

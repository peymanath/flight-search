import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import TabPanel from '@/components/Tabs/TabPanel';
import type { BasicTabsTabDataType, BasicTabsType } from '@/types/components/Tabs';

function dataTab(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ tabData }: BasicTabsType) {
    const [value, setValue] = useState(0);

    return (
        <div className='w-full'>
            <Tabs
                value={value}
                onChange={(event: SyntheticEvent, newValue: number) => setValue(newValue)}
                variant='fullWidth'
                scrollButtons='auto'
                sx={{
                    '& .MuiTabs-flexContainer': { borderBottom: '2px solid var(--color-primary)' },
                    '& .MuiTabs-indicator': { display: 'none' },
                }}>
                {!!tabData &&
                    tabData.map(({ id, iconTab, indexTab, labelTab }: BasicTabsTabDataType) => (
                        <Tab
                            key={id}
                            icon={iconTab}
                            label={labelTab}
                            {...dataTab(indexTab)}
                            className={`!rounded-t-md !flex-row !items-center !justify-center !gap-1 !min-h-min ${
                                value == indexTab ? '!bg-primary !text-white' : ''
                            }`}
                        />
                    ))}
            </Tabs>
            {!!tabData &&
                tabData.map(({ id, indexTab, TabPanelData }: BasicTabsTabDataType) => (
                    <TabPanel
                        key={id}
                        value={value}
                        index={indexTab}>
                        {TabPanelData}
                    </TabPanel>
                ))}
        </div>
    );
}

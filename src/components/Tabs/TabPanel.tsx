import Box from '@mui/material/Box';
import type {TabPanelProps} from '@/types/components/Tabs';

export default function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index &&
                <div className="py-5">
                    {children}
                </div>
            }
        </div>
    )
        ;
}

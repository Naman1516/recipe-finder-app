import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ResponsiveYouTubeVideo from './ResponsiveYoutubeVideo';
import RecipieInstruction from './RecipieInstruction';

const RecipieTabs = ({ instructions, ingredients, videoUrl }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Tabs className="tabs tabs-boxed m-12 flex flex-col items-start p-4" onSelect={setActiveTab}>
            <TabList className="flex flex-wrap">
                <Tab className={activeTab === 0 ? "tab tab-active" : "tab"}>Ingredients</Tab>
                <Tab className={activeTab === 1 ? "tab tab-active" : "tab"}>Recipe</Tab>
                {videoUrl && <Tab className={activeTab === 2 ? "tab tab-active" : "tab"}>Tutorial</Tab>}
            </TabList>

            <TabPanel className={`tab-panel h-auto ${activeTab !== 0 && 'hidden'}`}>
                <ul className='m-2'>
                    {Object.entries(ingredients).map(([key, value], index) => (
                        <li className='p-1' key={key}>
                            {index + 1}. {key} - {value}
                        </li>
                    ))}
                </ul>
            </TabPanel>

            <TabPanel className={`tab-panel h-auto m-2 ${activeTab !== 1 && 'hidden'}`}>
                <RecipieInstruction instructions={instructions} />
            </TabPanel>

            {videoUrl && (
                <TabPanel className={`tab-panel h-auto w-full ${activeTab !== 2 && 'hidden'}`}>
                    <div className='m-2 p-1 flex justify-center'>
                        <ResponsiveYouTubeVideo videoUrl={videoUrl} />
                    </div>
                </TabPanel>
            )}
        </Tabs>
    );
};

export default RecipieTabs;

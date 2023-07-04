import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const RecipieTabs = ({ instructions, ingredients, videoUrl }) => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <Tabs className="tabs tabs-boxed" defaultIndex={0} onSelect={(index) => setActiveTab(index)}>
            <TabList>
                <Tab className={activeTab === 0 ? "tab tab-active" : "tab"}>Ingredients</Tab>
                <Tab className={activeTab === 1 ? "tab tab-active" : "tab"}>Recipie</Tab>
                <Tab className={activeTab === 2 ? "tab tab-active" : "tab"}>Tutorial</Tab>
            </TabList>
            <br />
            <div>
                <TabPanel>
                    <div>
                        {instructions}
                    </div>
                </TabPanel>
                <TabPanel>
                    <p>
                        {Object.entries(ingredients)}
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        {videoUrl}
                    </p>
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default RecipieTabs
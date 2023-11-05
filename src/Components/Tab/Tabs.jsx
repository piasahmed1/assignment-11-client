import { Tab, TabList, TabPanel } from "react-tabs";

const Tabs = () => {
  return (
<div className="text-center">
<Tab>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tab>
</div>

  );
};

export default Tabs;
import { Input, Select } from "antd";

import type { NextPage } from "next";

const Option = Select.Option;

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Select size="large" defaultValue="lucy" style={{ width: 192 }}>
        <Option value="jack">jack</Option>
        <Option value="lucy">lucy</Option>
        <Option value="disabled" disabled>
          disabled
        </Option>
        <Option value="yiminghe">yiminghe</Option>
      </Select>
      <Input placeholder="inputtestplaceholder" />
    </div>
  );
};

export default Home;

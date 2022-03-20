import { HeaderWithBack } from "../components/HeaderWithBack";
import { StatsTable } from "../modules/stats/components/StatsTable";

import type { NextPage } from "next";
const stats: NextPage = () => (
  <div>
    <HeaderWithBack title={`stats`} />
    <StatsTable />
  </div>
);

export default stats;

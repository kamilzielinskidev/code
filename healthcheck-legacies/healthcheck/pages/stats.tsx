import { HeaderWithBack } from "../common/components/HeaderWithBack";
import { StatsTable } from "../modules/stats/components/StatsTable";

import type { NextPage } from "next";
const stats: NextPage = () => (
  <div>
    <HeaderWithBack>stats</HeaderWithBack>
    <StatsTable />
  </div>
);

export default stats;

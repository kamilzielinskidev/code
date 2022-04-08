import { HeaderWithBack } from "../components/HeaderWithBack";
import { CategoryIcon } from "../modules/survey/components/CategoryIcon";
import { HapinessRadioGroup } from "../modules/survey/components/HapinessRadioGroup";
import { categories } from "../modules/survey/constants/categories";

import type { NextPage } from "next";
const Survey: NextPage = () => (
  <div>
    <HeaderWithBack title={`voting: 3`} />

    <div>
      {categories.map((category) => (
        <div key={category.name}>
          <div className="flex items-center">
            <CategoryIcon category={category} />
            {category.name}
          </div>
          <HapinessRadioGroup />
        </div>
      ))}
    </div>
  </div>
);

export default Survey;

import { FC } from "react";
import { BiHappy, BiMeh, BiSad } from "react-icons/bi";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { BigIcon } from "../../../common/components/BigIcon";

const HappyRadio: FC = (props) => (
  <Radio
    icon={<BigIcon icon={BiHappy} />}
    checkedIcon={<BigIcon icon={BiHappy} color="var(--success)" />}
    {...props}
  />
);

const MehRadio: FC = (props) => (
  <Radio
    icon={<BigIcon icon={BiMeh} />}
    checkedIcon={<BigIcon icon={BiMeh} color="var(--warning)" />}
    {...props}
  />
);

const SadRadio: FC = (props) => (
  <Radio
    icon={<BigIcon icon={BiSad} />}
    checkedIcon={<BigIcon icon={BiSad} color="var(--error)" />}
    {...props}
  />
);

export const HapinessRadioGroup: FC = () => (
  <FormControl>
    <RadioGroup defaultValue="happy" row>
      <FormControlLabel value="happy" control={<HappyRadio />} label="Happy" />
      <FormControlLabel
        value="neutral"
        control={<MehRadio />}
        label="Neutral"
      />
      <FormControlLabel value="sad" control={<SadRadio />} label="Sad" />
    </RadioGroup>
  </FormControl>
);

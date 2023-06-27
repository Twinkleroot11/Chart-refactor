import { ButtonGroupRoot, PickerItem } from "./ButtonGroup.styled";
import { useState } from "react";

enum DayFormats {
  ONE_DAY = "1D",
  ONE_WEEK = "7D",
  ONE_MONTH = "1M",
  ONE_YEAR = "1Y",
  ALL = "ALL",
}

const config = [
  { id: 1, value: DayFormats.ONE_DAY },
  { id: 2, value: DayFormats.ONE_WEEK },
  { id: 3, value: DayFormats.ONE_MONTH },
  { id: 4, value: DayFormats.ONE_YEAR },
  { id: 5, value: DayFormats.ALL },
];

const ButtonGroup = () => {
  const [selected, setSelected] = useState<DayFormats>(DayFormats.ONE_DAY);

  return (
    <ButtonGroupRoot>
      {config.map((item) => (
        <PickerItem
          key={item.id}
          onClick={() => setSelected(item.value)}
          selected={selected === item.value}
        >
          {item.value}
        </PickerItem>
      ))}
    </ButtonGroupRoot>
  );
};

export default ButtonGroup;

import { useState } from "react";

const Select = () => {
  const [period, setPeriod] = useState("12");
  return (
    <select value={period} onChange={(e) => setPeriod(e.target.value)}>
      <option value="12">12 месяцев</option>
      <option value="6">6 месяцев</option>
      <option value="1">1 месяц</option>
    </select>
  );
};

export default Select;

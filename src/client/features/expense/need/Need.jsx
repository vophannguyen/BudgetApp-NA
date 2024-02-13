import { useGetNeedsQuery } from "./needSlice";
import { categoryNeed } from "../../../utils/data";
import { useState } from "react";
import { Dropdown } from "../../../utils/Dropdown";
export default function Need() {
  const [categoryOption, setCategoryOption] = useState("catergory");
  const [spentOption, setSpentOption] = useState("Spent");
  const [monthOption, setMonthOption] = useState("Month");
  const { data, isLoading, isError } = useGetNeedsQuery();
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return;
  }
  console.log(categoryOption);
  return (
    <section>
      <article>
        <label>Choose Category:</label>
        <select
          value={categoryOption}
          onChange={(e) => setCategoryOption(e.target.value)}
        >
          <option value={categoryOption}>{categoryOption}</option>
          <Dropdown values={categoryNeed} />
        </select>
        <select
          value={spentOption}
          onChange={(e) => setCategoryOption(e.target.value)}
        >
          <option value={spentOption}>{spentOption}</option>
          <Dropdown values={categoryNeed} />
        </select>
        <select
          value={monthOption}
          onChange={(e) => setCategoryOption(e.target.value)}
        >
          <option value={monthOption}>{monthOption}</option>
          <Dropdown values={categoryNeed} />
        </select>
        <button>Submit</button>
      </article>
      <article></article>
    </section>
  );
}

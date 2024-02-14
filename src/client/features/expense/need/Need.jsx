import {
  useCreateNeedsMutation,
  useDeleteNeedMutation,
  useGetNeedsQuery,
} from "./needSlice";
import { categoryNeed, month } from "../../../utils/data";
import { useState } from "react";
import { Dropdown } from "../../../utils/Dropdown";
export default function Need() {
  const [categoryOption, setCategoryOption] = useState("catergory");
  const [spentOption, setSpentOption] = useState(" ");
  const [monthOption, setMonthOption] = useState("Month");

  const { data: need, isLoading, isError } = useGetNeedsQuery();
  const [createNeeds] = useCreateNeedsMutation();
  const [deleteNeed] = useDeleteNeedMutation();
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return;
  }
  console.log(categoryOption, spentOption, monthOption, need);
  async function handleClick() {
    const data = {
      category: categoryOption,
      spent: spentOption,
      month: monthOption,
    };
    try {
      const respon = await createNeeds(data);
      console.log(respon);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    try {
      const respon = await deleteNeed(id);
      console.log(respon);
    } catch (err) {
      console.error(err);
    }
  }
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
        <label>
          Spent
          <input
            value={spentOption}
            onChange={(e) => setSpentOption(e.target.value)}
          ></input>
        </label>
        <select
          value={monthOption}
          onChange={(e) => setMonthOption(e.target.value)}
        >
          <option value={monthOption}>{monthOption}</option>
          <Dropdown values={month} />
        </select>
        <button onClick={handleClick}>Add</button>
      </article>
      <article>
        {need.data.length > 0 &&
          need.data.map((need, index) => {
            return (
              <p key={index}>
                {need.category} {need.spent} {need.month}
                <button onClick={() => handleDelete(need.id)}>X</button>
              </p>
            );
          })}
      </article>
    </section>
  );
}

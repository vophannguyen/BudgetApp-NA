export function Dropdown({ values, onchange }) {
  return values.map((e, index) => {
    return (
      <option value={e.value} key={index}>
        {e.lable}
      </option>
    );
  });
}

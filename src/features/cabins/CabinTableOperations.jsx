import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name(A-Z)" },
          { value: "name-desc", label: "Sort By Name(Z-A)" },
          { value: "regular_price-asc", label: "Sort By Price(↑)" },
          { value: "regular_price-desc", label: "Sort By Price(↓)" },
          { value: "max_capacity-asc", label: "Sort By Max Capacity(↑)" },
          { value: "max_capacity-desc", label: "Sort By Max Capacity(↓)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;

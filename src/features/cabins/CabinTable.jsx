import { useQuery } from "@tanstack/react-query";
// import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";


function CabinTable() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  

  //1)Filter
  const filterValue = searchParams.get("discount") || "all";
  let cabinFilter;
  if (filterValue === "all") cabinFilter = cabins;
  else if (filterValue === "no-discount")
    cabinFilter = cabins.filter((cabin) => cabin.discount === 0);
  else if (filterValue === "with-discount")
    cabinFilter = cabins.filter((cabin) => cabin.discount > 0);

  //2)Sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = cabinFilter.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  if (!cabins.length) return <Empty resource="cabins" />;
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 1.5fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>
        <Table.Body
          // data={cabinFilter}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default CabinTable;

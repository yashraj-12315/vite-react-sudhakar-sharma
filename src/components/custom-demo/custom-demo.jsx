import { DataGrid } from "../../controlled-components/data-grid";

export function CustomDemo() {
  return (
    <div className="container-fluid">
      <h1>Data Grids</h1>
      <DataGrid
        caption="Employees Data Table"
        fields={["First Name", "Last Name", "Designation", "Salary"]}
        data={[
          {
            FirstName: "Yash",
            LastName: "Raj",
            Designation: "Software Developer",
            Salary: 50000,
          },
        ]}
      />
    </div>
  );
}

export function DataGrid({ caption, fields, data }) {
  return (
    <table className={`table table-hover caption-top`}>
      <caption>{caption}</caption>
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index}>
            {Object.keys(record).map((key) => (
              <td key={key}>{record[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

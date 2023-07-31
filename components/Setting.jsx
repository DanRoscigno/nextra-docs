function SettingTable(props) {
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>{props.settingName}</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>Default</td>
          <td>{props.settingDefault}</td>
        </tr>
        <tr>
          <td></td>
          <td>Description</td>
          <td>{props.settingDescription}</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
}
 
export default SettingTable;

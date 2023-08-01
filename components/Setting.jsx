function SettingTable(props) {
  return (
    <div>
      <b>{props.settingName}</b>
      <table style={{marginLeft: '1em'}}>
      <tbody>
        <tr>
          <td></td>
          <td>Default</td>
          <td>{props.settingDefault}</td>
        </tr>
        <tr>
          <td></td>
          <td>Description &nbsp; &nbsp;</td>
          <td>{props.settingDescription}</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
}
 
export default SettingTable;

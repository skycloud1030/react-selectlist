/* react-selectlist.jsx*/
var React = require('react');
var ReactDOM = require('react-dom');
import {ReactSelectList} from 'react-selectlist';

class CheckboxDemo extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      data:[
        { value: 1, label: 'Nuggets'},
        { value: 2, label: 'Jazz'},
        { value: 3, label: 'Warriors' },
        { value: 4, label: 'Lakers' },
      ],
      selected:[1],
      multiple:true,
      orientation:"horizontal",
    }
  }
  _onSelectChange= (newSelect)=>{
    this.setState({selected:newSelect});
  }
  _onMultiple= (newSelect)=>{
    let state;
    state=(newSelect=="true")?true:false;
    this.setState({multiple:state});
  }
  _onOrientation= (newSelect)=>{
    this.setState({orientation:newSelect});
  }
  _onChangeDefault= (event)=>{
    this.setState({selected:event.target.value});
  }
  render(){
    let {data,selected,multiple,orientation}=this.state;
    return(
      <div>
        <ReactSelectList
          data={data}
          disabled={[true,true]}
          value={selected}
          multiple={multiple}
          orientation={orientation}
          onChange={this._onSelectChange}
        />
        <div>The selected value: {selected}</div>

        <div style={{marginTop:15}}>
          <div>Options</div>
          <ReactSelectList
            data={[{value:true,label:"Mutiple"},{value:false,label:"Single"}]}
            multiple={false}
            value={multiple}
            onChange={this._onMultiple}
          />
          <ReactSelectList
            data={[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}]}
            multiple={false}
            value={orientation}
            onChange={this._onOrientation}
          />
          <br/>
          <br/>
          <div>Change default</div>
          <select value={selected[0]} onChange={this._onChangeDefault}>
            <option value={1}> Nuggets </option>
            <option value={2}> Jazz </option>
            <option value={3}> Warriors </option>
            <option value={4}> Lakers </option>
          </select>


        </div>
      </div>
    )
  }
};
ReactDOM.render(
  <CheckboxDemo/>,
  document.getElementById('demo')
);

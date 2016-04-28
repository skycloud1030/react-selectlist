/* react-selectlist.jsx*/
var React = require('react');
var ReactDOM = require('react-dom');
import {ReactSelectList} from 'react-selectlist';

class CheckboxDemo extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      data:[
        { id: 1, name: 'Nuggets'},
        { id: 2, name: 'Jazz'},
        { id: 3, name: 'Warriors' },
        { id: 4, name: 'Lakers' },
      ],
      selected:[1],
      multiple:true,
      orientation:"horizontal",
    }
  }
  _onSelectChange=(newSelect)=>{
    this.setState({selected:newSelect});
  }
  _onMultiple=(newSelect,id)=>{
    let state;
    state=(newSelect=="true")?true:false;
    this.setState({[id]:state});
  }
  _onOrientation=(newSelect,id)=>{
    this.setState({[id]:newSelect});
  }
  render(){
    let {data,selected,multiple,orientation}=this.state;
    return(
      <div>
        <ReactSelectList data={data} defaultValue={selected} multiple={multiple} orientation={orientation} onChange={this._onSelectChange}/>
        <div>The selected value: {selected}</div>

        <div style={{marginTop:15}}>
          <div>Options</div>
          <ReactSelectList id="multiple" data={[{id:"true",name:"Mutiple"},{id:"false",name:"Single"}]} multiple={false} defaultValue={["true"]} onChange={this._onMultiple}/>
          <ReactSelectList id="orientation" data={[{id:"vertical",name:"Vertical"},{id:"horizontal",name:"Horizontal"}]} multiple={false} defaultValue={["horizontal"]} onChange={this._onOrientation}/>

        </div>
      </div>
    )
  }
};
ReactDOM.render(
  <CheckboxDemo/>,
  document.getElementById('demo')
);

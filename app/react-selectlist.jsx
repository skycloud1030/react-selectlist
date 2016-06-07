/* react-selectlist.jsx*/
var React = require('react');
var ReactDOM = require('react-dom');
var randomstring = require("just.randomstring");
var shallowCompare = require('react-addons-shallow-compare');
var _=require('underscore');

export class ReactSelectList extends React.Component{
  static defaultProps={
    data:[],
    multiple:true,
    orientation:"horizontal",
    valueField:'id',
    textField:'name',
    defaultValue:[],
    disable:[],
  }
  constructor(props) {
    super(props);
    let {defaultValue,id}=this.props;
    let l_defaultValue=[...defaultValue];
    var selected=this._genCheckedList(l_defaultValue);
    if(!id){
      id=randomstring(7);
    }
    this.state={
      id:id,
      selected:selected,
      defaultValue:l_defaultValue,
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  _genCheckedList = (defaultValue) => {
    let {data,valueField,multiple}=this.props;
    let selected;
    for(var i=0;i<defaultValue.length;i++){
      defaultValue[i]=defaultValue[i].toString();
    }
    if(!multiple){
      defaultValue=[_.last(defaultValue)];
    }
    selected=data.map((item,index)=>{
      let value=(_.isUndefined(item[valueField]))?item:item[valueField];
      return _.contains(defaultValue,value.toString());
    });
    if(!selected){
      selected=[true];
    }
    return selected;
  }
  _handleChange = (event) => {
    let {multiple}=this.props;
    let {defaultValue,id}=this.state;
    let newValue=event.target.value.toString();
    if(!multiple){
      defaultValue=[];
    }
    if(event.target.checked){
      defaultValue.push(newValue);
    }
    else{
      defaultValue=_.without(defaultValue,newValue)
    }
    var selected=this._genCheckedList(defaultValue);
    if(typeof this.props.onChange=="function"){
      this.props.onChange(defaultValue,id);
    }
    this.setState({selected:selected,defaultValue:defaultValue});

  }
  render(){
    let {orientation,customStyles,customCss,multiple,valueField,textField}=this.props;
    let {data}=this.props;
    let {id,selected,defaultValue}=this.state;
    let selectType=(multiple)?"checkbox":"radio";

    let row=data.map((item,index)=>{
      let value=(_.isUndefined(item[valueField]))?item:item[valueField];
      let text=(item[textField])?item[textField]:value;

      if(orientation.toString().toLowerCase()=="horizontal"){
        return (
          <span key={index} style={customStyles} className={customCss}>
              <input
                id={`select${id}${index}`}
                checked={selected[index]}
                name={`select${id}${index}`}
                onChange={this._handleChange}
                type={selectType}
                value={value}
                disabled={this.props.disable[index]}
              />
              <label htmlFor={`select${id}${index}`}>{text}</label>
          </span>
        );
      }
      else{
        return (
          <div key={index} style={customStyles} className={customCss}>
              <input
                id={`select${id}${index}`}
                checked={selected[index]}
                name={`select${id}${index}`}
                onChange={this._handleChange}
                type={selectType}
                value={value}
                disabled={this.props.disable[index]}
              />
              <label htmlFor={"select"+id+index}>{text}</label>
          </div>
        );
      }
    });
    return(
      <span>
        {row}
      </span>
    )
  }
};

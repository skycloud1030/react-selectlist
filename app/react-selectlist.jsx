/* react-selectlist.jsx*/
import React from 'react';
import randomstring from 'just.randomstring';
import _ from 'underscore';

export class ReactSelectList extends React.Component{
  static defaultProps={
    data:[],
    orientation:"horizontal",
    valueField:"value",
    textField:"label",
    multiple:false,
    value:"",
    disabled:[],
    onChange:()=>{}
  }
  constructor(props) {
    super(props);
    this.data=this.props.data;
    this.value=this.props.value;
    this._getDefaultSet(this.props);
    this.state={...this.props,id:randomstring(7)};
  }
  componentWillReceiveProps(nextProps){
    this.data= nextProps.data;
    this.value= nextProps.value;
    this._getDefaultSet(nextProps);
    this.setState({data:this.data});
  }
  _getDefaultSet = (props)=>{
    let {valueField,multiple}=props;
    let value =this.value;
    if(multiple){
      this.data.map((item,index)=>{
        if(_.isArray(value)){
          if(_.contains(value,item[valueField])){
            item.checked=true;
          }
          else{
            item.checked=false;
          }
        }
        else{
          if(item[valueField]==value){
            item.checked=true;
          }
          else{
            item.checked=false;
          }
        }
      });
    }
    else{
      if(_.isArray(value)){
        value=_.last(value);
      }
      this.data.map((item,index)=>{
        if(item[valueField]==value){
          item.checked=true;
        }
        else{
          item.checked=false;
        }
      });

    }
  }
  _getCheck =()=>{
    let {multiple,valueField}=this.props;
    let {data}=this.state;

    let checked;
    if(multiple){
      checked=data.filter((item)=>{
        return item.checked;
      }).map((item)=>{
        return item[valueField];
      });
      return checked;
    }
    else{
      return this.value;
    }
  }
  _handleChange= (index,event)=>{
    this.value=event.target.value.toString();
    let data=this._genCheckedList(index);
    this.setState({data});
    this.props.onChange(this._getCheck());
  }
  _genCheckedList= (selectedIndex)=>{
      let {multiple}=this.props;
      if(multiple){
        // mutiple checked
        let data=this.data;
        if(_.isUndefined(data[selectedIndex].checked)){
          data[selectedIndex].checked=true;
        }
        else{
          data[selectedIndex].checked=!data[selectedIndex].checked;
        }
        return data;
      }
      else{
        //single checked
        let data=this.data.map((item,index)=>{
          item.checked=(index==selectedIndex)?true:false;
          return item;
        });
        return data;
      }
  }
  render() {
      let {data,textField,valueField,id}=this.state;
      let {disabled,multiple,orientation}=this.props;
      let {className}=this.props;
      let selectType=(multiple)?"checkbox":"radio";
      let style= (orientation=="horizontal")?{display:"inline-block"}:{display:"block"};
      style={...this.props.style,...style};

      let row=data.map((item,index)=>{
        return(
          <span key={index} style={style}>
            <input
              id={`${id}_${index}`}
              checked={item["checked"]}
              name={`${id}_${index}`}
              onChange={this._handleChange.bind(this,index)}
              type={selectType}
              value={item[valueField]}
              disabled={disabled[index]}
            />
            <label htmlFor={`${id}_${index}`}>{item[textField]}</label>
          </span>
        )
      });
      return (
        <span className={className}>
          {row}
        </span>
      )
  }
};

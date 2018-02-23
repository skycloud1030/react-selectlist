import React from "react";
import * as _ from "./math.js";
import shallowEqual from "fbjs/lib/shallowEqual";

/* react-selectlist.jsx*/
export class ReactSelectList extends React.PureComponent {
  static defaultProps = {
    data: [],
    orientation: "horizontal",
    valueField: "value",
    textField: "label",
    multiple: false,
    value: "",
    disabled: [],
    onChange: () => {}
  };
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.value = this.props.value;
    this._getDefaultSet(this.props);
    this.state = { ...this.props, id: _.radomString() };
  }
  componentWillReceiveProps(nextProps) {
    if (!shallowEqual(this.props, nextProps)) {
      this.data = nextProps.data;
      this.value = nextProps.value;
      this._getDefaultSet(nextProps);
      this.setState({ data: this.data });
    }
  }
  _getDefaultSet = props => {
    const { valueField, multiple } = props;
    let value = this.value;
    if (multiple) {
      this.data.map(item => {
        if (_.isArray(value)) {
          item.checked = value.includes(item[valueField]) ? true : false;
        } else {
          item.checked = item[valueField] == value ? true : false;
        }
      });
    } else {
      if (_.isArray(value)) {
        value = _.last(value);
      }
      this.data.map(item => {
        item.checked = item[valueField] == value ? true : false;
      });
    }
  };
  _getCheck = () => {
    const { multiple, valueField } = this.props;
    const { data } = this.state;
    if (multiple) {
      const checked = data
        .filter(item => {
          return item.checked;
        })
        .map(item => {
          return item[valueField];
        });
      return checked;
    } else {
      return this.value;
    }
  };
  _handleChange = (index, event) => {
    this.value = event.target.value.toString();
    const data = this._genCheckedList(index);
    this.setState({ data });
    this.props.onChange(this._getCheck());
  };
  _genCheckedList = selectedIndex => {
    let { multiple } = this.props;
    const data = this.data;
    if (multiple) {
      // mutiple checked
      data[selectedIndex].checked = !data[selectedIndex].checked;
    } else {
      //single checked
      data.map(item => {
        item.checked = false;
      });
      data[selectedIndex].checked = true;
    }
    return data;
  };
  _createBox = () => {
    const { data, textField, valueField, id } = this.state;
    const { disabled, multiple, orientation, className } = this.props;
    const selectType = multiple ? "checkbox" : "radio";
    let style =
      orientation === "horizontal"
        ? { display: "inline-block" }
        : { display: "block" };
    style = { ...this.props.style, ...style };

    const row = data.map((item, index) => {
      return (
        <span key={index} style={style}>
          <input
            id={`${id}_${index}`}
            checked={item["checked"]}
            name={`${id}_${index}`}
            onChange={this._handleChange.bind(this, index)}
            type={selectType}
            value={item[valueField]}
            disabled={disabled[index]}
          />
          <label htmlFor={`${id}_${index}`}>{item[textField]}</label>
        </span>
      );
    });
    return row;
  };
  render() {
    const { className, style } = this.props;
    return (
      <span className={className} style={style}>
        {this._createBox()}
      </span>
    );
  }
}

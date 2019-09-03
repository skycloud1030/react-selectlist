import React, { useMemo, useState, useEffect, useCallback } from "react";
import * as _ from "./math.js";

/* react-selectlist.jsx*/
RcSelect.defaultProps = {
  data: [],
  disabled: [],
  orientation: "horizontal",
  multiple: true
};
function RcSelect(props) {
  const { className, style } = props;
  const { disabled, multiple, orientation } = props;
  const { textField = "label", valueField = "value" } = props;
  const [id] = useState(() => _.radomString());
  const [data, setData] = useState(props.data);
  const { onChange = () => {} } = props;

  const handleChange = useCallback(
    selectedIndex => {
      let newData = [];
      let value;
      const _getCheck = data => {
        switch (true) {
          case multiple:
            return data.filter(item => item.checked).map(item => item[valueField]);
          default:
            return value;
        }
      };
      switch (multiple) {
        case true:
          newData = [...data];
          newData[selectedIndex].checked = !newData[selectedIndex].checked;
          break;
        default:
          newData = data.map(item => ({ ...item, checked: false }));
          newData[selectedIndex].checked = true;
          value = newData[selectedIndex][valueField];
          break;
      }
      onChange(_getCheck(newData));
    },
    [multiple, data]
  );

  useEffect(() => {
    let data = [];
    let value = props.value;
    switch (true) {
      case multiple && _.isArray(value):
        data = props.data.map(item => ({ ...item, checked: value.includes(item[valueField]) }));
        break;
      case multiple:
        data = props.data.map(item => ({ ...item, checked: item[valueField] == value }));
        break;
      case _.isArray(value):
        value = _.last(value);
      default:
        data = props.data.map(item => ({ ...item, checked: item[valueField] == value }));
        break;
    }
    setData(data);
  }, [props.data, multiple, props.value]);

  const _createBox = useMemo(() => {
    const selectType = multiple ? "checkbox" : "radio";
    const style = orientation === "horizontal" ? { display: "inline-block" } : { display: "block" };
    const row = data.map((item, index) => {
      let checked = item["checked"] || false;
      return (
        <span key={index} style={{ ...props.style, ...style }}>
          <input
            id={`${id}_${index}`}
            checked={checked}
            name={`${id}_${index}`}
            type={selectType}
            onChange={handleChange.bind(this, index)}
            value={item[valueField]}
            disabled={disabled[index]}
          />
          <label htmlFor={`${id}_${index}`}>{item[textField]}</label>
        </span>
      );
    });
    return row;
  }, [disabled, multiple, orientation, data]);

  return (
    <span className={className} style={style}>
      {_createBox}
    </span>
  );
}

export default React.memo(RcSelect);

import React from "react";
import { mount } from "enzyme";
import { ReactSelectList } from "../index.js";
import { last } from "./math.js";

const tests = {
  data: [
    { value: 1, label: "Nuggets" },
    { value: 2, label: "Jazz" },
    { value: 3, label: "Warriors" },
    { value: 4, label: "Lakers" }
  ]
};
const tests2 = {
  data: [
    { value: 1, label: "Nuggets" },
    { value: 2, label: "Jazz" },
    { value: 3, label: "Warriors" },
    { value: 4, label: "Lakers" }
  ]
};

let select_val = [];
function _onSelectChange(value) {
  select_val = value;
}
describe("React_Bootstrap_Carousel", () => {
  const test_componet = mount(
    <ReactSelectList
      className={"MySelect"}
      data={tests.data}
      multiple={true}
      value={[1, 2]}
      disabled={[true, true]}
      onChange={_onSelectChange.bind(this)}
    />
  );
  const test_componet2 = mount(
    <ReactSelectList data={tests2.data} multiple={true} value={[1, 2]}/>
  );

  it("Should change value", () => {
    // const checkbox_val = test_componet.find('input[type="checkbox"][value="3"]');
    test_componet.setProps({ value: [3] });
    const checkbox_val = test_componet.find('input[type="checkbox"]');
    expect(checkbox_val.get(2).props.checked).toBe(true);
    expect(checkbox_val.get(0).props.checked && checkbox_val.get(1).props.checked).toBe(false);
    test_componet.setProps({ multiple: false, value: [1, 3] });
    const checkbox_val2 = test_componet.find('input[type="radio"]');
    expect(checkbox_val2.get(2).props.checked).toBe(true);
    expect(checkbox_val2.get(0).props.checked).toBe(false);
    test_componet.setProps({ value: 2 });
    const checkbox_val3 = test_componet.find('input[type="radio"]');
    expect(checkbox_val3.get(1).props.checked).toBe(true);
    expect(checkbox_val3.get(2).props.checked).toBe(false);
  });
  it("Should change verticle & horizontal", () => {
    const horizontal = test_componet.find("span[style]").get(0).props.style.display;
    test_componet.setProps({ orientation: "vertical" });
    const vertical = test_componet.find("span[style]").get(0).props.style.display;
    expect(vertical).toBe("block");
    expect(horizontal).toBe("inline-block");
  });
  it("Should change Mutiple", () => {
    test_componet.setProps({ multiple: true });
    const mutiple = test_componet.find("input[type='checkbox']").length > 0;
    test_componet.setProps({ multiple: false });
    const single = test_componet.find("input[type='radio']").length > 0;
    expect(mutiple).toBe(true);
    expect(single).toBe(true);
  });
  it("Should onClick return right value", () => {
    test_componet.setProps({ multiple: true, value: [1] });
    const check_list = test_componet.find("input[type='checkbox']");
    check_list.at(2).simulate("change");
    expect(select_val).toEqual([1, 3]);
    test_componet.setProps({ multiple: false, value: 1 });
    const check_list2 = test_componet.find("input[type='radio']");
    check_list2.at(2).simulate("change");
    expect(select_val).toBe("3");
    const check_list3 = test_componet2.find("input[type='checkbox']");
    check_list3.at(0).simulate("change");
    test_componet2.setProps({ multiple: true });
  });
  it("Should math function ok", () => {
    expect(last() === undefined).toBe(true);
  });
});

import { List, declare, Union } from "../fable-library.2.3.10/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union, string, list as list$$1, type } from "../fable-library.2.3.10/Reflection.js";
import { createObj } from "../fable-library.2.3.10/Util.js";
export const Option = declare(function Fulma_Tag_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Tag.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], ["Color", [Color$0024002EIColor$0024reflection()]], "is-delete", ["Props", [list$$1(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function tag(options, children) {
  const parseOptions = function parseOptions(result, option) {
    if (option.tag === 2) {
      return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
    } else if (option.tag === 1) {
      return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Color$0024$0024$0024ofColor(option.fields[0]));
    } else if (option.tag === 3) {
      return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
    } else if (option.tag === 4) {
      return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
    } else if (option.tag === 5) {
      return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
    } else if (option.fields[0].tag === 0) {
      console.warn("`is-small` is not a valid size for the tag element");
      return result;
    } else {
      return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, Reflection$0024$0024$0024getCaseName(option.fields[0]));
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "tag"), function (props$$1, children$$1) {
    return React.createElement("span", createObj(props$$1, 1), ...children$$1);
  }, children);
}
export function delete$(options$$1, children$$4) {
  return tag(new List(new Option(2, "is-delete"), options$$1), children$$4);
}
export const List$002EOption = declare(function Fulma_Tag_List_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function List$002EOption$reflection() {
  return union("Fulma.Tag.List.Option", [], List$002EOption, () => ["has-addons", "is-centered", "is-right", ["Props", [list$$1(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$1(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function list(options$$2, children$$5) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 3:
        {
          const props$$4 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$4);
        }

      case 4:
        {
          const customClass$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, customClass$$1);
        }

      case 5:
        {
          const modifiers$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, modifiers$$1);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, parseOptions$$1, "tags"), function (props$$5, children$$6) {
    return React.createElement("div", createObj(props$$5, 1), ...children$$6);
  }, children$$5);
}

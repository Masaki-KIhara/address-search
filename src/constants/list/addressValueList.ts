import { AddressListValueType } from "../../type/formValue";

export const AddressValueList: AddressListValueType = [
  { label: "郵便番号", name: "postCode", rules: { required: true } },
  { label: "都道府県", name: "prefecture", rules: { required: true } },
  { label: "市区町村", name: "municipalities", rules: { required: true } },
];

import { FieldErrors } from "react-hook-form";
import { AddressType } from "../../type/formValue";

export const checkErrorMessage = (
  errors: FieldErrors<AddressType>,
  name: keyof AddressType
) => {
  switch (errors[name]?.type) {
    case "required":
      return <p className="text-[#dc2626]">必須項目です</p>;
    case "maxLength":
      return <p className="text-[#dc2626]">7桁で入力してください</p>;
    case "minLength":
      return <p className="text-[#dc2626]">7桁で入力してください</p>;
    default:
      return "";
  }
};

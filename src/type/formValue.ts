import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type AddressType = {
  postCode: string;
  prefecture: string;
  municipalities: string;
};

export type OmitPostCodeType = Omit<AddressType, "postCode">;

type resultDataType = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

export type AddressInformationType = {
  message: string | null;
  results: resultDataType[];
  status: number;
};

export type AddressListValueType = {
  label: string;
  name: "postCode" | "prefecture" | "municipalities";
  rules: Omit<
    RegisterOptions<FieldValues>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}[];

export type Props = {
  labelText: string;
  name: keyof AddressType;
  register: UseFormRegister<AddressType>;
  errors: FieldErrors<AddressType>;
  rules: Omit<
    RegisterOptions<FieldValues>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

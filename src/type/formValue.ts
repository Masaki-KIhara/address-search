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
}[];

import { useEffect } from "react";
import { Control, UseFormSetValue, useWatch } from "react-hook-form";
import { AddressInformationType, AddressType } from "../type/formValue";

type AddressSearchType = {
  control: Control<AddressType>;
  setValue: UseFormSetValue<AddressType>;
};

export const useAddressSearch = ({ control, setValue }: AddressSearchType) => {
  const postCodeField = useWatch({ control: control, name: "postCode" });

  const fetchAddressData = (postCode: string) => {
    return new Promise<AddressInformationType>((resolve, reject) => {
      fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`)
        .then((res) => res.json())
        .then((data: AddressInformationType) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };

  const addressSearch = async () => {
    try {
      const addressData = await fetchAddressData(postCodeField);
      addressData.results.map((item) => {
        setValue("prefecture", item.address1);
        setValue("municipalities", item.address2 + item.address3);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (postCodeField && postCodeField.length === 7) {
      addressSearch();
    }
  }, [postCodeField]);
};

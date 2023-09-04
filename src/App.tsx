import { FormCategory } from "./component/molcule/formCategory";
import { useForm, useWatch } from "react-hook-form";
import {
  AddressInformationType,
  AddressType,
  OmitPostCodeType,
} from "./type/formValue";
import { AddressValueList } from "./constants/addressValueList";
import { useEffect, useState } from "react";

function App() {
  const { control, register, handleSubmit, reset, setValue } =
    useForm<AddressType>();
  const [addressData, setAddressDate] = useState<OmitPostCodeType>({
    prefecture: "",
    municipalities: "",
  });
  const postCodeField = useWatch({ control: control, name: "postCode" });

  const addressSearch = (postCode: string) => {
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`)
      .then((res) => res.json())
      .then((data: AddressInformationType) =>
        data.results.forEach((item) =>
          setAddressDate({
            prefecture: item.address1,
            municipalities: item.address2 + item.address3,
          })
        )
      );
  };

  if (postCodeField && postCodeField.length === 7) {
    addressSearch(postCodeField);
  }

  const onSubmit = (data: AddressType) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    setValue("prefecture", addressData.prefecture);
    setValue("municipalities", addressData.municipalities);
  }, [addressData]);

  return (
    <>
      <header className="bg-gray flex justify-center p-[20px] text-white text-3xl">
        addressSearch
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        {AddressValueList.map((item) => {
          return (
            <FormCategory
              key={item.name}
              register={register}
              labelText={item.label}
              name={item.name}
            />
          );
        })}
        <button className="bg-gray block mx-auto mt-[30px] border border-gray w-[120px] rounded">
          送信
        </button>
      </form>
    </>
  );
}

export default App;

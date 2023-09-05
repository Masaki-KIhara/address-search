import { FormCategory } from "./component/molcule/formCategory";
import { useForm } from "react-hook-form";
import { AddressType } from "./type/formValue";
import { AddressValueList } from "./constants/list/addressValueList";
import { useAddressSearch } from "./hooks/useAddressSearch";

function App() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AddressType>();

  useAddressSearch({ control: control, setValue: setValue });

  const onSubmit = (data: AddressType) => {
    console.log(data);
    reset();
  };

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
              errors={errors}
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

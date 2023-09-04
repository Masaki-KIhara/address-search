import { UseFormRegister } from "react-hook-form";
import { AddressType } from "../../type/formValue";
import { Input } from "../atoms/input";

type Props = {
  labelText: string;
  name: keyof AddressType;
  register: UseFormRegister<AddressType>;
};

export const FormCategory = ({ labelText, name, register }: Props) => {
  return (
    <div className="flex justify-center mt-10">
      <label className="mr-10">{labelText}</label>
      <Input register={register} name={name} />
    </div>
  );
};

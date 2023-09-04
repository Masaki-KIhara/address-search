import { UseFormRegister } from "react-hook-form";
import { AddressType } from "../../type/formValue";

type Props = {
  name: keyof AddressType;
  register: UseFormRegister<AddressType>;
};

export const Input = ({ name, register }: Props) => {
  return (
    <input
      {...register(name)}
      name={name}
      className={`border rounded pl-[5px]`}
    />
  );
};

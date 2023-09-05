import { FieldErrors, UseFormRegister } from "react-hook-form";
import { checkErrorMessage } from "../../constants/function/handler";
import { AddressType } from "../../type/formValue";

type Props = {
  name: keyof AddressType;
  register: UseFormRegister<AddressType>;
  errors: FieldErrors<AddressType>;
};

export const Input = ({ name, register, errors }: Props) => {
  return (
    <div className="grid">
      <input
        {...register(name, { required: true })}
        name={name}
        className={`border rounded pl-[5px] ${
          errors[name]?.type && "border-[#dc2626]"
        }`}
      />
      {checkErrorMessage(errors, name)}
    </div>
  );
};

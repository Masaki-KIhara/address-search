import { checkErrorMessage } from "../../constants/function/handler";
import { Props } from "../../type/formValue";

export const Input = ({
  name,
  register,
  errors,
  rules,
}: Omit<Props, "labelText">) => {
  return (
    <div className="grid">
      <input
        {...register(name, rules)}
        name={name}
        className={`border rounded pl-[5px] ${
          errors[name]?.type && "border-[#dc2626]"
        }`}
      />
      {checkErrorMessage(errors, name)}
    </div>
  );
};

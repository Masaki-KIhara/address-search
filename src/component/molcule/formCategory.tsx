import { Props } from "../../type/formValue";
import { Input } from "../atoms/input";

export const FormCategory = ({
  labelText,
  name,
  register,
  errors,
  rules,
}: Props) => {
  return (
    <div className="flex justify-center mt-10">
      <label className="mr-10">{labelText}</label>
      <Input register={register} rules={rules} name={name} errors={errors} />
    </div>
  );
};

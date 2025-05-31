import { useForm, type SubmitHandler } from "react-hook-form";

export const Form = () => {
  type Inputs = {
    example: string;
    exampleRequired: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert("submit成功！" + JSON.stringify(data));

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center">
        {/* register your input into the hook by invoking the "register" function */}
        <label className="w-80">テスト</label>
        <input
          className="border-1 w-80"
          defaultValue="test"
          {...register("example", { minLength: 4 })}
        />
        {errors.example && (
          <span className="text-red-600">This field is required</span>
        )}
        <label className="w-80">テスト</label>
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="border-1 w-80"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className="text-red-600">This field is required</span>
        )}
        <input className="border-1 w-40 mt-4" type="submit" />
      </div>
    </form>
  );
};

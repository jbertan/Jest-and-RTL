import { useState } from "react";
const SummaryForm = () => {
  const [status, setStatus] = useState(true);
  const submitHandler = () => {
    console.log("Selam");
  };
  return (
    <div className="flex flex-col space-y-2 justify-center items-start p-4">
      <div className="flex space-x-2">
        {" "}
        <input
          type="checkbox"
          className=""
          id="checkbox-termsandconditions"
          onClick={() => setStatus(!status)}
        />
        <div
          className="tooltip tooltip-primary tooltip-bottom"
          data-tip="no ice cream"
          placeholder="no ice cream"
        >
          <label htmlFor="checkbox-termsandconditions">
            I agree to Terms and Conditions
          </label>
        </div>
      </div>

      <button
        disabled={status}
        onClick={submitHandler}
        className="h-8 w-32 flex justify-center items-center text-lg font-md border-2 "
      >
        Confirm order
      </button>
    </div>
  );
};
export default SummaryForm;

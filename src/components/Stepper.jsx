import { useSelector, useDispatch } from "react-redux";
import {
  nextStep,
  prevStep,
} from "../features/registration/registrationSlice";

const Stepper = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.registration);

  return (
    <div style={{ padding: "20px" }}>
      <h2>NYSC Registration</h2>

      <h3>Step {step} of 4</h3>

      <div style={{ margin: "20px 0" }}>
        {step === 1 && <p>Bio Data Form</p>}
        {step === 2 && <p>School Information</p>}
        {step === 3 && <p>Medical Information</p>}
        {step === 4 && <p>Camp Selection</p>}
      </div>

      <div>
        <button
          onClick={() => dispatch(prevStep())}
          disabled={step === 1}
        >
          Back
        </button>

        <button
          onClick={() => dispatch(nextStep())}
          disabled={step === 4}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
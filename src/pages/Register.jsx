import { useSelector, useDispatch } from "react-redux";
import {
  nextStep,
  prevStep,
  submitRegistration,
} from "../features/registration/registrationSlice";

const Register = () => {
  const { step, loading, success } = useSelector(
    (state) => state.registration
  );
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>NYSC Registration - Step {step}</h2>

      {/* Step Content */}
      {step === 1 && <div>Bio Data Form</div>}
      {step === 2 && <div>School Info Form</div>}
      {step === 3 && <div>Medical Info Form</div>}
      {step === 4 && <div>Camp Selection Form</div>}

      {/* Success Message */}
      {success && <p className="success">Registration Submitted Successfully</p>}

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => dispatch(prevStep())}
          disabled={step === 1}
        >
          Back
        </button>

        {step < 4 && (
          <button onClick={() => dispatch(nextStep())}>
            Next
          </button>
        )}

        {step === 4 && (
          <button onClick={() => dispatch(submitRegistration())}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
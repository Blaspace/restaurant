import FirstSectionSignup from "./FirstSection";
import SecondSection from "./SecondSection";
import { useParams } from "react-router-dom";
import "./Signup.css";


const SignUp = () => {
  const params = useParams();
  return (
    <>
      <div className="signup">
        {Number(params.section) === 1 ? (
          <FirstSectionSignup />
        ) :  (
          <SecondSection />
        )}
      </div>
    </>
  );
};

export default SignUp;

import useFormData from "../../CustomHooks/useFormData";
import "./otp.css";

function OTP({ header, sendTO, OTPsender, verifier, closeDataModel }) {
  const { formData, handleChange } = useFormData({
    otp: "",
  });

  return (
    <form
      onSubmit={() => verifier(formData.otp)}
      className="otp-sender-container"
    >
      <h3>تأكيد {header}</h3>
      <label htmlFor="otp">
        أدخل الرمز الذي أرسلناه للتو الى: {sendTO}
        <input
          id="otp"
          name="otp"
          type="number"
          placeholder="أدخل الرمز"
          onChange={handleChange}
          required
        />
      </label>
      <span>
        لم يصلك الرمز؟ انتظر بضع دقائق و{" "}
        <span className="otp-try-again">حاول مجددا</span>
      </span>
      <div className="otp-buttons">
        <button onClick={OTPsender}>اعد ارسال الرمز</button>
        <button onClick={closeDataModel}>السابق</button>
        <button type="submit">
          التحقق من الصحة
        </button>
      </div>
    </form>
  );
}

export default OTP;

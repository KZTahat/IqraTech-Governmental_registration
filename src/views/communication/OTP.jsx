import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Alert, Button } from "../../components";
import useFormData from "../../CustomHooks/useFormData";
import "./otp.css";

function OTP({
  header,
  sendTO,
  OTPsender,
  verificationCode,
  closeDataModel,
  validity,
  setValidity,
}) {
  const { formData, handleChange } = useFormData({
    otp: "",
  });
  let [waiting, setWaiting] = useState(true);
  let [countDown, setCountDown] = useState(true);

  let phoneNumberVerifier = () => {
    try {
      console.log("phone verification");
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/unauth/phone/verifyCode`,
          {
            verification_code: verificationCode,
            key: formData.otp,
          }
        )
        .then((response) => {
          if (response.data.success) setValidity(true);
        })
        .catch((err) => {})
        .finally(() => {
          setWaiting(false);
          formData.otp = "";
        });
    } catch (error) {
      console.log(console.log(error.message));
    }
  };

  let emailVerifier = () => {
    try {
      console.log("email verification");
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/unauth/email/verifyCode`,
          {
            verification_code: verificationCode,
            key: formData.otp,
          }
        )
        .then((response) => {
          if (response.data.success) setValidity(true);
        })
        .catch((err) => {})
        .finally(() => {
          setWaiting(false);
          formData.otp = "";
        });
    } catch (error) {
      console.log(console.log(error.message));
    }
  };

  useEffect(() => {
    OTP_countDown(5);
  }, []);

  const rcANDrOTP = () => {
    OTPsender();
    setCountDown(true);
    console.log(countDown);
    OTP_countDown(5);
  };

  const OTP_countDown = (remaining) => {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    if (!validity)
      document.getElementById("otp_countdown").innerHTML = m + ":" + s;
    remaining -= 1;

    if (remaining >= 0 && countDown) {
      setTimeout(() => {
        OTP_countDown(remaining);
      }, 1000);
      return;
    }
    setCountDown(false);
  };

  return (
    <div className="otp-sender-container">
      <h3>تأكيد {header}</h3>
      {!waiting && validity ? (
        <Alert status="success" message="تم تأكيد رقم الهاتف" />
      ) : (
        <>
          <label htmlFor="otp">
            أدخل الرمز الذي أرسلناه للتو الى: {sendTO}
            <input
              id="otp"
              name="otp"
              type="number"
              placeholder="أدخل الرمز"
              onChange={handleChange}
            />
          </label>
          <span className="resend-otp-stat">
            لم يصلك الرمز؟ انتظر بضع دقائق و لم يصلك الرمز؟ انتظر بضع دقائق{" "}
            <span id="otp_countdown" /> و{" "}
            <span className="otp-try-again">حاول مجددا</span>
          </span>

          {!waiting && !validity ? (
            <Alert status="fail" message="رقم التأكيد غير صحيح" />
          ) : (
            <></>
          )}
        </>
      )}

      <div className="otp-buttons">
        {/* resend OTP button */}
        {!waiting && validity ? (
          <></>
        ) : (
          <Button
            text="اعد ارسال الرمز"
            handler={rcANDrOTP}
            disabled={countDown ? true : false}
            specialStyles={{
              backgroundColor: countDown
                ? "var(--boundary_light_text_color)"
                : "var(--buttons_and_boxes)",
            }}
          />
        )}

        {/* close data model button */}
        <Button
          text={validity ? "الصفحه الرئيسية" : "السابق"}
          handler={() => closeDataModel(false)}
        />

        {/* check validity button */}
        <Button
          text="التحقق من الصحة"
          disabled={formData.otp.length != 6 ? true : false}
          handler={header == "رقمك" ? phoneNumberVerifier : emailVerifier}
          specialStyles={{
            backgroundColor:
              formData.otp.length != 6
                ? "var(--boundary_light_text_color)"
                : "var(--buttons_and_boxes)",
          }}
        />
      </div>
    </div>
  );
}

export default OTP;

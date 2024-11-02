import axios from "axios";
import { useState } from "react";
import { Alert, Button, DataModel } from "../../components";
import useFormData from "../../CustomHooks/useFormData";
import "./communication.css";
import codes from "./Icodes";
import OTP from "./otp/OTP.jsx";

function Communication() {
  let [showOTPModel, setShowOTPModel] = useState(false);
  const { formData, handleChange } = useFormData({
    internationalCode: "",
    phoneNumber: "",
    email: "",
  });
  let [sendTO, setSendTo] = useState(0); // 0 for number and 1 for email
  let [verificationCode, setVerificationCode] = useState("");
  let [phoneNumberValidity, setPhoneNumberValidity] = useState(false);
  let [emailValidity, setEmailValidity] = useState(false);

  let phoneNumberOTPsender = (e) => {
    if (e) e.preventDefault();
    try {
      setSendTo(0);
      if (!showOTPModel) setShowOTPModel(true);
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/unauth/verifyNonUserPhone`,
          { phone: formData.internationalCode + formData.phoneNumber }
        )
        .then((response) => {
          setVerificationCode(response.data.key);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  let emailOTPsender = (e) => {
    if (e) e.preventDefault();
    try {
      setSendTo(1);
      if (!showOTPModel) setShowOTPModel(true);

      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/unauth/verifyNonUserEmail`,
          { email: formData.email }
        )
        .then((response) => {
          setVerificationCode(response.data.key);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="communi-info-cont">
      {/* Phone Number info */}
      <form onSubmit={phoneNumberOTPsender} className="communi-phone-form">
        <div className="communi-heading-box">
          <span>معلومات الاتصال</span>
        </div>

        <label htmlFor="internationalCode">
          الرمز الدولي*
          <select
            onChange={handleChange}
            required
            name="internationalCode"
            id="internationalCode"
          >
            <option value="">اختر ...</option>
            {codes.map((element) => {
              return (
                <option value={element.secondary}>
                  {element.primary} {element.secondary}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="phoneNumber">
          الهاتف النقال*
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="ادخل رقم الهاتف"
            onChange={handleChange}
            required
          />
        </label>

        <div className="button-container">
          <Button
            text="تحقق من رقم الهاتف"
            icon={<i className="ri-smartphone-line"></i>}
          />
        </div>
      </form>

      {phoneNumberValidity ? (
        <Alert status="success" message="تم تأكيد رقم الهاتف" />
      ) : (
        <></>
      )}

      {/* Email info */}
      <form onSubmit={emailOTPsender} className="communi-email-form">
        <label htmlFor="email">
          البريد الالكتروني*
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ادخل البريد الالكتروني"
            onChange={handleChange}
            required
          />
        </label>

        <div className="button-container">
          <Button
            text="تحقق من البريد الالكتروني"
            icon={<i className="ri-mail-line"></i>}
          />
        </div>
      </form>

      {emailValidity ? (
        <Alert status="success" message="تم تأكيد بريدك الالكتروني" />
      ) : (
        <></>
      )}

      {/* Data Model Display */}
      {showOTPModel ? (
        <DataModel>
          {!sendTO ? (
            <OTP
              header="رقمك"
              sendTO={formData.internationalCode + formData.phoneNumber}
              OTPsender={phoneNumberOTPsender}
              verificationCode={verificationCode}
              closeDataModel={setShowOTPModel}
              validity={phoneNumberValidity}
              setValidity={setPhoneNumberValidity}
            />
          ) : (
            <OTP
              header="بريدك الاكتروني"
              sendTO={formData.email}
              OTPsender={emailOTPsender}
              verificationCode={verificationCode}
              closeDataModel={setShowOTPModel}
              validity={emailValidity}
              setValidity={setEmailValidity}
            />
          )}
        </DataModel>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Communication;

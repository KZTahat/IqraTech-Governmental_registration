import axios from "axios";
import { useState } from "react";
import DataModel from "../../components/DataModel/DataModel";
import useFormData from "../../CustomHooks/useFormData";
import "./communication.css";
import OTP from "./OTP";

function Communication() {
  let [showOTPModel, setShowOTPModel] = useState(false);
  const { formData, handleChange } = useFormData({
    internationalCode: "",
    phoneNumber: "",
    email: "",
  });
  let [sendTO, setSendTo] = useState(0); // 0 for number and 1 for email
  let [verificationCode, setVerificationCode] = useState("");

  let phoneNumberOTPsender = (e) => {
    e.preventDefault();
    try {
      setSendTo(0);
      if (!showOTPModel) setShowOTPModel(true);
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/unauth/verifyNonUserPhone`,
          { phone: formData.phoneNumber }
        )
        .then((response) => {
          console.log(response.data);
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
    e.preventDefault();
    try {
      setSendTo(1);
      if (!showOTPModel) setShowOTPModel(true);

      // console.log(process.env);
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/unauth/verifyNonUserEmail`,
          { email: formData.email }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  let phoneNumberVerifier = (e, otp) => {
    e.preventDefault();
    try {
      console.log(otp);
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/unauth/phone/verifyCode`,
          {
            verification_code: verificationCode,
            key: otp,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(console.log(error.message));
    }
  };

  return (
    <div className="communi-info-cont">
      {/* Phone Number info */}
      <form onSubmit={phoneNumberOTPsender} className="communi-form">
        <div className="communi-heading-box">
          <span>معلومات الاتصال</span>
        </div>

        <label htmlFor="internationalCode">
          الرمز الدولي*
          <input
            id="internationalCode"
            name="internationalCode"
            type="number"
            placeholder="+962"
            onChange={handleChange}
            required
          />
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
          <button type="submit">
            <i className="ri-smartphone-line"></i> تحقق من رقم الهاتف
          </button>
        </div>
      </form>

      {/* Email info */}
      <form onSubmit={emailOTPsender} className="communi-form">
        <label htmlFor="email">
          البريد الالكتروني*
          <input
            id="email"
            name="email"
            type="text"
            placeholder="ادخل البريد الالكتروني"
            onChange={handleChange}
            required
          />
        </label>

        <div className="button-container">
          <button type="submit">
            <i className="ri-mail-line"></i> تحقق من البريد الالكتروني
          </button>
        </div>
      </form>

      {/* Data Model Display */}
      {showOTPModel ? (
        <DataModel>
          {!sendTO ? (
            <OTP
              header="رقمك"
              sendTO={formData.phoneNumber}
              OTPsender={phoneNumberOTPsender}
              closeDataModel={setShowOTPModel}
              verifier={phoneNumberVerifier}
            />
          ) : (
            <OTP
              header="بريدك الاكتروني"
              sendTO={formData.email}
              OTPsender={emailOTPsender}
              closeDataModel={setShowOTPModel}
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

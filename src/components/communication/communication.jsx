import "./communication.css";

function Communication() {
  return (
    <section className="communi-info-cont">
      {/* Phone Number Confirmation */}
      <div className="communi-heading-box">
        <span>معلومات الاتصال</span>
      </div>

      <label>
        الرمز الدولي*
        <input type="number" placeholder="9961030130" />
      </label>

      <label>
        الهاتف النقال*
        <input type="number" placeholder="ادخل رقم الهاتف" />
      </label>

      <div className="button-container">
        <button>
          <i class="ri-smartphone-line"></i> تحقق من رقم الهاتف
        </button>
      </div>

      {/* Email Confirmation */}
      <label>
        البريد الالكتروني*
        <input type="text" placeholder="ادخل البريد الالكتروني" />
      </label>

      <div className="button-container">
        <button>
          <i class="ri-mail-line"></i> تحقق من الريد الالكتروني
        </button>
      </div>
    </section>
  );
}

export default Communication;

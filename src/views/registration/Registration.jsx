import { Button } from "../../components";
import "./registration.css";

function Registration() {
  return (
    <section className="inquiry-field">
      <div>
        <label>
          الرقم الوطني
          <input type="number" placeholder="9961030130" />
        </label>

        <label>
          تاريخ الميلاد
          <input type="date" />
        </label>

        <div className="button-container">
          <Button text="إستعلام" />
        </div>
      </div>

      <div>
        <label>
          الإسم الكامل (باإنجليزية)
          <input type="text" placeholder="Khale Zayed Mohammed Tahat" />
        </label>

        <label>
          الإسم الكامل (بالعربية)
          <input type="text" placeholder="خالد زايد محمد طاهات" />
        </label>

        <label>
          رقم الهوية
          <input type="number" placeholder="198624" />
        </label>

        <label>
          اسم الجهة الحكومية
          <input type="text" placeholder="ادخل" />
        </label>

        <label>
          رقم الهاتف الأرضي
          <input type="number" placeholder="ادخل" />
        </label>

        <label>
          الرقم التعريفي للجهة الحكومية
          <input type="number" placeholder="587794" />
        </label>
      </div>
    </section>
  );
}

export default Registration;

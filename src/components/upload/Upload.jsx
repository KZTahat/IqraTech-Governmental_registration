import "./upload.css";
function Upload() {
  return (
    <>
      <section className="upload-container">
        <span className="upload-header">
          وثيقة اثبات قدرة الموظف من الجهة الحكوميه على تمثيلها
        </span>
        <div className="document-upload-section">
          <div>
            <i class="ri-upload-cloud-2-line"></i>
            <span>
              تحميل وثيقة اثبات قدرة الموظف من الجهة الحكومية على تمثيلها
            </span>
          </div>
          <button>تحميل</button>
        </div>
        <div className="">
          <p>* السماح بارفاق أنواع معينة ققط مثل PDF او png او jpg او jpeg</p>
          <p>* حجم الملف لا يتجاوز 5MB</p>
        </div>
      </section>
    </>
  );
}

export default Upload;

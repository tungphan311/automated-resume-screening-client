import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

function Editor({
  formClassName,
  label,
  required,
  meta = {}, // redux form
  input: { value, onChange } // redux form
}) {
  const { error, touched } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  return (
    <div className={`form-group ${formClassName}`}>
      <label className={`${label ? "" : "d-none"}`}>
        {label} {required && <span className="text-danger"> *</span>}
      </label>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
      {showError && (
        <span
          className="error"
          style={{ position: "absolute", color: "#f25961", bottom: "0px" }}
        >
          {errCode}
        </span>
      )}
      <br style={{ marginTop: "1rem" }} />
    </div>
  );
}

export default Editor;

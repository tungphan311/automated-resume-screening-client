import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

function Editor({
  formClassName,
  label,
  required,
  meta = {}, // redux form
  input // redux form
}) {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  console.log({ ...input });
  return (
    <div className={`form-group ${formClassName}`}>
      <label className={`${label ? "" : "d-none"}`}>
        {label} {required && <span className="text-danger"> *</span>}
      </label>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      {showError && (
        <span
          className="error"
          style={{ position: "absolute", color: "#f25961", top: "38px" }}
        >
          {errCode}
        </span>
      )}
    </div>
  );
}

export default Editor;

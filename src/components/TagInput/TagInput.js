import Tag from "components/TagInput/Tag";
import React from "react";
import { useState } from "react";
import "./TagInput.scss";

function TagInput({ tags = [], name, onChange }) {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const type = e.target.value;

    const list = type.split(",");

    if (list.length === 2) {
      const tag = list[0];
      const text = list[1];

      onChange(name, [
        ...tags,
        { text: tag, id: tags.length > 0 ? tags[tags.length - 1].id + 1 : 0 }
      ]);

      setValue(text);
    } else {
      setValue(type);
    }
  };

  const handleRemoveTag = (id) => {
    const newTags = tags.filter((t) => t.id !== id);
    onChange(name, newTags);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      if (!value && tags.length) {
        e.preventDefault();
        const lastTag = tags[tags.length - 1];
        tags.pop();

        setValue(lastTag.text);
        onChange(name, tags);
      }
    }
  };

  return (
    <>
      <div className="tag-input-wrapper">
        <div className="tag-input-selections">
          {tags.length > 0 &&
            tags.map(({ text, id }) => (
              <Tag key={id} id={id} onClose={handleRemoveTag}>
                {text}
              </Tag>
            ))}
          <input
            type="text"
            name="skills"
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </>
  );
}

export default TagInput;

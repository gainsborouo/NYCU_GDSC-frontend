// src/components/InfoForm.jsx
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import "./InfoForm.css";

function InfoForm() {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    hobbies: [],
    bio: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let newHobbies = [...formData.hobbies];
      if (checked) {
        newHobbies.push(value);
      } else {
        newHobbies = newHobbies.filter((hobby) => hobby !== value);
      }
      setFormData({ ...formData, hobbies: newHobbies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const errors = [];
    if (formData.name.trim() === "") {
      errors.push("姓名為必填項目。");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "") {
      errors.push("電子郵件為必填項目。");
    } else if (!emailPattern.test(formData.email)) {
      errors.push("請輸入有效的電子郵件地址。");
    }
    if (formData.age === "") {
      errors.push("年齡為必填項目。");
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errors.push("請輸入有效的年齡。");
    }
    if (formData.gender === "") {
      errors.push("請選擇性別。");
    }
    if (formData.hobbies.length === 0) {
      errors.push("請至少選擇一項興趣。");
    }
    if (formData.bio.trim().length < 10) {
      errors.push("自我介紹至少需要 10 個字。");
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      // 設置用戶信息
      setUser({
        name: formData.name,
        email: formData.email,
        age: formData.age,
        gender: formData.gender,
        hobbies: formData.hobbies,
        bio: formData.bio,
      });
      alert("表單提交成功！");
      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
      gender: "",
      hobbies: [],
      bio: "",
    });
    setErrors([]);
  };

  return (
    <div className="container">
      <h1>請填寫你的個人資訊</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">姓名：</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.includes("姓名為必填項目。") ? "error-input" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">電子郵件：</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={
              errors.includes("電子郵件為必填項目。") ||
              errors.includes("請輸入有效的電子郵件地址。")
                ? "error-input"
                : ""
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">年齡：</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={
              errors.includes("年齡為必填項目。") ||
              errors.includes("請輸入有效的年齡。")
                ? "error-input"
                : ""
            }
          />
        </div>
        <div className="form-group">
          <label>性別：</label>
          <input
            type="radio"
            id="gender_male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="gender_male">男</label>
          <input
            type="radio"
            id="gender_female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="gender_female">女</label>
        </div>
        <div className="form-group">
          <label>興趣：</label>
          <input
            type="checkbox"
            id="hobby_reading"
            name="hobbies"
            value="reading"
            checked={formData.hobbies.includes("reading")}
            onChange={handleChange}
          />
          <label htmlFor="hobby_reading">閱讀</label>
          <input
            type="checkbox"
            id="hobby_traveling"
            name="hobbies"
            value="traveling"
            checked={formData.hobbies.includes("traveling")}
            onChange={handleChange}
          />
          <label htmlFor="hobby_traveling">旅遊</label>
          <input
            type="checkbox"
            id="hobby_sports"
            name="hobbies"
            value="sports"
            checked={formData.hobbies.includes("sports")}
            onChange={handleChange}
          />
          <label htmlFor="hobby_sports">運動</label>
        </div>
        <div className="form-group">
          <label htmlFor="bio">自我介紹：</label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
            className={
              errors.includes("自我介紹至少需要 10 個字。") ? "error-input" : ""
            }
          ></textarea>
        </div>
        <div className="button-group">
          <button type="submit" className="btn submit-btn">
            提交
          </button>
          <button type="reset" className="btn reset-btn" onClick={handleReset}>
            重置
          </button>
        </div>
        {errors.length > 0 && (
          <div id="errorMessages" className="error-messages">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default InfoForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactUs.css";

function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    setIsSubmitted(true);
    reset(); 
    setTimeout(() => setIsSubmitted(false), 3000); 
  };

  return (
    <div className="contact-container">
      <h1>ติดต่อเรา</h1>
      {isSubmitted && <p className="success-message">ส่งข้อความเรียบร้อยแล้ว!</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label>ชื่อของคุณ</label>
          <input
            type="text"
            placeholder="ชื่อของคุณ"
            {...register("name", { required: "กรุณากรอกชื่อของคุณ" })}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>อีเมลของคุณ</label>
          <input
            type="email"
            placeholder="อีเมลของคุณ"
            {...register("email", {
              required: "กรุณากรอกอีเมล",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "อีเมลไม่ถูกต้อง",
              },
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>ข้อความของคุณ</label>
          <textarea
            placeholder="ข้อความของคุณ"
            rows="5"
            {...register("message", {
              required: "กรุณากรอกข้อความ",
              minLength: { value: 10, message: "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร" },
            })}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message.message}</p>}
        </div>

        <button type="submit" className="submit-btn">ส่งข้อความ</button>
      </form>
    </div>
  );
}

export default ContactUs;

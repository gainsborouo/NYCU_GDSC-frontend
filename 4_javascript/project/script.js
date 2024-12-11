document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("infoForm");
    const errorMessages = document.getElementById("errorMessages");
  
    form.addEventListener("submit", function(event) {
      errorMessages.innerHTML = "";
      let errors = [];
  
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        errors.push("姓名為必填項目。");
        document.getElementById("name").classList.add("error-input");
      } else {
        document.getElementById("name").classList.remove("error-input");
      }
  
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        errors.push("電子郵件為必填項目。");
        document.getElementById("email").classList.add("error-input");
      } else if (!emailPattern.test(email)) {
        errors.push("請輸入有效的電子郵件地址。");
        document.getElementById("email").classList.add("error-input");
      } else {
        document.getElementById("email").classList.remove("error-input");
      }
  
      const age = document.getElementById("age").value;
      if (age === "") {
        errors.push("年齡為必填項目。");
        document.getElementById("age").classList.add("error-input");
      } else if (isNaN(age) || age <= 0) {
        errors.push("請輸入有效的年齡。");
        document.getElementById("age").classList.add("error-input");
      } else {
        document.getElementById("age").classList.remove("error-input");
      }
  
      const genderMale = document.getElementById("gender_male").checked;
      const genderFemale = document.getElementById("gender_female").checked;
      if (!genderMale && !genderFemale) {
        errors.push("請選擇性別。");
      }
  
      const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
      if (hobbies.length === 0) {
        errors.push("請至少選擇一項興趣。");
      }
  
      const bio = document.getElementById("bio").value.trim();
      if (bio.length < 10) {
        errors.push("自我介紹至少需要 10 個字。");
        document.getElementById("bio").classList.add("error-input");
      } else {
        document.getElementById("bio").classList.remove("error-input");
      }
  
      if (errors.length > 0) {
        event.preventDefault();
        let errorHTML = "<ul>";
        errors.forEach(function(error) {
          errorHTML += "<li>" + error + "</li>";
        });
        errorHTML += "</ul>";
        errorMessages.innerHTML = errorHTML;
        errorMessages.style.color = "#f44336";
        errorMessages.style.marginTop = "20px";
      }
    });
  });
  
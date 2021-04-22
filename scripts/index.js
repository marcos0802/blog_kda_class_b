window.onload = function () {
  fetch("https://my-json-server.typicode.com/marcos0802/blog_kda_class_b/apprenants")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (student) {
        const studentsContainer = document.querySelector(".student-container");
        studentsContainer.classList = "student-container";
        const card = document.createElement("div");
        card.classList = "card";

        const cardContent = document.createElement("div");
        const cardImage = document.createElement("img");
        const cardTitle = document.createElement("div");
        const cardAbout = document.createElement("p");
        const cardEmail = document.createElement("h5");

        cardContent.classList = "card-content";
        cardTitle.classList = "card-title";

        cardImage.setAttribute("src", `images/${student.profile}`);
        cardTitle.textContent = student.names;
        cardEmail.textContent = `Email: ${student.email}`;
        cardAbout.textContent = student.about;

        cardContent.appendChild(cardImage);
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardEmail);
        cardContent.appendChild(cardAbout);

        card.appendChild(cardContent);

        return studentsContainer.appendChild(card);
      });
    });
};

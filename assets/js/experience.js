AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Marketing Director",
    cardImage: "assets/images/experience-page/classicwood.png",
    place: "Classic Wood Nepal",
    time: "(Oct, 2017 - Feb, 2020)",
    desp: "<li>Oversaw the production and promotion of high-quality wooden products, furniture, and decorative pieces.</li><li>Implemented marketing campaigns that increased brand visibility and sales.</li><li>Collaborated with design and production teams to align products with customer needs.</li>",
  },
  {
    title: "Business Owner",
    cardImage: "assets/images/experience-page/4aana.png",
    place: "4 Aana Cafe",
    time: "(Apr, 2020 - Dec, 2021)",
    desp: "<li>Successfully managed operations of a local cafe, focusing on customer satisfaction and quality service.</li><li>Developed unique marketing strategies to attract a diverse customer base.</li><li>Oversaw staff training, inventory management, and budget planning.</li>",
  },
  {
    title: "Content Director",
    cardImage: "assets/images/experience-page/audwork.jpeg",
    place: "Audwork International",
    time: "(Jan, 2022 - Oct, 2023)",
    desp: "<li>Directed content strategies and oversaw creative initiatives for the organization.</li><li>Managed a team of writers and designers to ensure timely delivery of projects.</li><li>Collaborated with marketing teams to align content with company goals.</li>",
  },
  {
    title: "Freelance Social Media Consultant",
    cardImage: "assets/images/experience-page/smartivity.avif",
    place: "Smartivity",
    time: "(Oct, 2023 - Jan, 2024)",
    desp: "<li>Provided social media strategies to enhance brand engagement and visibility.</li><li>Designed and implemented campaigns tailored to target audiences.</li><li>Analyzed performance metrics and optimized strategies for better results.</li>",
  },
  {title: "Sales and Marketing Executive",
    cardImage: "assets/images/experience-page/cloudlaya.png",
    place: "Cloudlaya",
    time: "(Jan 2024 - Present)",
    desp: "<li>Handling all sales and marketing operations, from generating leads to converting them.</li><li>Promoting email solutions like Zoho Mail, G-Suite, M-365, and web hosting services.</li><li>Managing AWS cloud infrastructure services and ensuring customer satisfaction.</li>",
  },

  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {title: "Performance Growth Marketing Executive (Part-Time)",
    cardImage: "assets/images/experience-page/easy.png",
    place: "EasyFiling",
    time: "(Feb 2025 - Present)",
    desp:  "<li>Developing marketing strategies for EasyFiling’s legal and tax services targeted at small businesses and startups.</li><li>Running performance marketing campaigns and optimizing lead generation funnels for higher conversion rates.</li><li>Collaborating with the product and operations team to align messaging with customer needs and pain points.</li>",
  },
  {title: "Growth Marekting Executive (Remote)",
    cardImage: "assets/images/experience-page/costq.png",
    place: "CostQ",
    time: "(Nov 2024 - Present)",
    desp: `
    <li>Leading B2B marketing efforts for CostQ, a cloud cost optimization platform tailored for startups and SMBs.</li>
    <li>Creating pitch decks, product launch campaigns, and content strategies to drive visibility on Product Hunt and G2.</li>
    <li>Working closely with engineering and design teams to shape CostQ's positioning in the AWS cost management space.</li>
  `,
},
  {title: "Sales and Marketing Executive",
    cardImage: "assets/images/experience-page/cloudlaya.png",
    place: "Cloudlaya",
    time: "(Jan 2024 - Present)",
    desp: "<li>Handling all sales and marketing operations, from generating leads to converting them.</li><li>Promoting email solutions like Zoho Mail, G-Suite, M-365, and web hosting services.</li><li>Managing AWS cloud infrastructure services and ensuring customer satisfaction.</li>",
  },
  {
    title: "Freelance Social Media Consultant",
    cardImage: "assets/images/experience-page/smartivity.avif",
    place: "Smartivity",
    time: "(Oct, 2023 - Jan, 2024)",
    desp: "<li>Provided social media strategies to enhance brand engagement and visibility.</li><li>Designed and implemented campaigns tailored to target audiences.</li><li>Analyzed performance metrics and optimized strategies for better results.</li>",
  },
  {
    title: "Content Director",
    cardImage: "assets/images/experience-page/audwork.jpeg",
    place: "Audwork International",
    time: "(Jan, 2022 - Oct, 2023)",
    desp: "<li>Directed content strategies and oversaw creative initiatives for the organization.</li><li>Managed a team of writers and designers to ensure timely delivery of projects.</li><li>Collaborated with marketing teams to align content with company goals.</li>",
  },
  {
    title: "Business Owner",
    cardImage: "assets/images/experience-page/4aana.png",
    place: "4 Aana Cafe",
    time: "(Apr, 2020 - Dec, 2021)",
    desp: "<li>Successfully managed operations of a local cafe, focusing on customer satisfaction and quality service.</li><li>Developed unique marketing strategies to attract a diverse customer base.</li><li>Oversaw staff training, inventory management, and budget planning.</li>",
  },
  {
    title: "Marketing Director",
    cardImage: "assets/images/experience-page/classicwood.png",
    place: "Classic Wood Nepal",
    time: "(Oct, 2017 - Feb, 2020)",
    desp: "<li>Oversaw the production and promotion of high-quality wooden products, furniture, and decorative pieces.</li><li>Implemented marketing campaigns that increased brand visibility and sales.</li><li>Collaborated with design and production teams to align products with customer needs.</li>",
  }

  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, imageStyle, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image" style="width: ${imageStyle?.width}; height: ${imageStyle?.height};"/>
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

import React from "react";
import secondSectionImageOne from "../../assets/images/Layrite.jpg";
import secondSectionImageTwo from "../../assets/images/Uppercut.jpg";
import secondSectionImageThree from "../../assets/images/Reuzel.jpeg";
import secondSectionImageFour from "../../assets/images/PompCo.jpg";
import "./About.css";
import firstImage from "../../assets/images/hairStyle1.webp";
import firstSectionImage from "../../assets/images/hairStyle4.webp";

const About = () => (
  <>
    <div className="about_firstSectionWrapper">
      <div className="about_firstSectionHalf">
        <div className="about_firstSectionText">
          <h1 className="about_firstSectionTitle"> GET THE LOOK</h1>
          <p className="about_firstSectionDesc">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            sapiente laboriosam repellat esse, obcaecati rem rerum facilis odit
            atque molestias iure ex blanditiis eveniet neque voluptas non et
            adipisci deleniti asperiores architecto illo vero omnis impedit a!
            Nemo quae aspernatur deleniti earum ab facilis voluptatem
            blanditiis, similique at, deserunt iure!
          </p>
        </div>
        <div className="trzy">
          <img
            className="about_img first"
            src={firstSectionImage}
            alt="photo product"
          />
        </div>
      </div>
      <div className="about_firstSectionHalf">
        <div className="dwa">
          <img
            className="about_img second"
            src={firstImage}
            alt="photo product"
          />
        </div>
        <div className="about_firstSectionText">
          <h1 className="about_firstSectionTitle"> GROOMING TOOLS </h1>
          <p className="about_firstSectionDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            repellendus dolores quam, libero quas totam incidunt aspernatur
            cupiditate voluptas ullam beatae, vero aliquid? Vel laudantium,
            animi eligendi, dicta cumque vitae rem est accusamus nostrum,
            placeat perferendis in nobis eos et.
          </p>
        </div>
      </div>
    </div>
    <div className="about_secondSectionWrapper">
      <div className="about_secondSectionHalf">
        <div className="about_secondSectionTextWrapper">
          <h1 className="about_secondSectionTitle">HIGHEST QUALITY PRODUCTS</h1>
          <p className="about_secondSectionDesc">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            fugiat! Nobis repudiandae reprehenderit fuga ratione perferendis,
            dolores non animi pariatur, repellendus ipsum doloremque
            consequatur, aliquam itaque aliquid impedit beatae. Nam, beatae
            facere reprehenderit blanditiis inventore nostrum harum, aperiam
            dolore odit voluptates deleniti id tenetur mollitia veritatis eaque
            voluptas eveniet sit, esse quibusdam tempore quasi commodi? Soluta
            voluptatem porro impedit vitae velit non a ducimus nostrum,
            consequuntur magnam sit possimus sed?
          </p>
        </div>
      </div>
      <div className="about_secondSectionHalf">
        <div className="about_secondSectionUpHalf">
          <img
            className="about_secondSectionImage"
            src={secondSectionImageOne}
            alt="product photo"
          />
          <img
            className="about_secondSectionImage"
            src={secondSectionImageTwo}
            alt="product photo"
          />
        </div>
        <div className="about_secondSectionDownHalf">
          <img
            className="about_secondSectionImage"
            src={secondSectionImageThree}
            alt="product photo"
          />
          <img
            className="about_secondSectionImage"
            src={secondSectionImageFour}
            alt="product photo"
          />
        </div>
      </div>
    </div>
  </>
);

export default About;

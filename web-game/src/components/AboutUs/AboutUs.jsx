import React from "react";
import "./AboutUs.css";
import Infographic1 from "../../assets/About Us/Infographic 1.webp";
import Infographic2 from "../../assets/About Us/Infographic 2.webp";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-container">
        <h1>ABOUT FPT GAMING ZONE</h1>
        <div className="AboutUs-container-content">
          <p>
            Founded in 2024, FPT Gaming Zone is a leading interactive
            entertainment company based in Vietnam. We provide an extensive
            range of games that cater to diverse tastes and preferences, from
            action-packed adventures to mind-bending puzzles. FPT Gaming Zone is
            not just a place to buy games; it's a community for gamers to
            connect, compete, and share their experiences.
          </p>
          <img src={Infographic1} alt="Infographic 1" className="about-image"/>
          <p>
            Our flagship offerings include popular titles like "Heroes of VNG,"
            "Legendary Battles," and "Mystery Quest." We are dedicated to
            bringing the best gaming experiences to our users by partnering with
            top game developers worldwide.
          </p>
          <img src={Infographic2} alt="Infographic 2" className="about-image"/>
          <h2 className="haha">Contact Information</h2>
          <div className="About-container-contact">
            <p className="About-container-border"></p>
            <p>123 ABC Street, XYZ District, Ho Chi Minh City, Vietnam</p>
            <p>Tel +84 123 456 789</p>
            <p>Email: support@fptgamingzone.com</p>
          </div>
        </div>
        <div className="About-container-about">
          <div className="">
            <p className="About-container-border">
              Interested in joining our team?
            </p>
            <p>We’re hiring! Visit the FPT Gaming Zone Careers portal.</p>
          </div>
          <div className="">
            <p className="About-container-border">
              Need help with our games or your FPT Gaming Zone account?{" "}
            </p>
            <p>Visit our support center.</p>
          </div>
          <p className="About-container-border-question">
            Frequently Asked Questions
          </p>
        </div>
        <div className="About-question-contents">
          <div className="">
            <p className="About-container-border">Can I visit your studio?</p>
            <p>
              Unfortunately, we do not offer studio tours. Our priority is to
              provide a focused environment for our team to continue creating
              amazing games.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">Do you offer internships?</p>
            <p>
              Internship opportunities, if available, will be posted on our
              careers portal.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I submit my game idea to you?
            </p>
            <p>
              We do not accept unsolicited submissions. Please refrain from
              sending us your ideas, as we cannot legally review them.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I create a fan site for your games?
            </p>
            <p>
              Absolutely! We encourage fans to create content based on our
              games. Please ensure you follow our Fan Content Policy.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Where can I play your games?
            </p>
            <p>
              Visit our downloads page to see where you can access our games
              like "Heroes of VNG" and "Legendary Battles."
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I monetize gameplay videos featuring your games?
            </p>
            <p>Yes, we support the monetization of gameplay videos.</p>
          </div>
          <div className="">
            <p className="About-container-border">
              Does FPT Gaming Zone sponsor gaming tournaments?
            </p>
            <p>
              We currently do not offer sponsorships for gaming competitions and
              tournaments.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Does FPT Gaming Zone offer scholarships?
            </p>
            <p>We do not offer scholarships at this time.</p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I interview one of your developers for my school project?
            </p>
            <p>
              Due to high demand, we generally do not participate in student
              interviews. However, feel free to use the numerous interviews with
              our team members available online.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can my company collaborate with you to create content based on
              your games?
            </p>
            <p>
              While we appreciate your interest, we are not looking for
              additional licensing partners at this time. Please refer to our
              Fan Content Policy for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

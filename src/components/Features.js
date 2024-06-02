import React from "react";

const Features = () => {
  const features = [
    {
      heading: "Advanced AI Integration",
      description:
        "Harness the power of cutting-edge artificial intelligence algorithms to streamline your workflow and make data-driven decisions with confidence.",
      imageUrl:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "Seamless Collaboration",
      description:
        "Collaborate effortlessly with your team in real-time, whether you're in the same office or spread across the globe. Share files, ideas, and feedback instantly.",
      imageUrl:
        "https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      heading: "Intuitive User Interface",
      description:
        "Experience a user-friendly interface designed with simplicity and efficiency in mind. Say goodbye to steep learning curves and hello to productivity.",
      imageUrl:
        "https://images.pexels.com/photos/17561405/pexels-photo-17561405/free-photo-of-smartphone-blank-screen-mockup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "Robust Security Measures",
      description:
        "Rest easy knowing your data is protected by state-of-the-art security protocols. We prioritize your privacy and confidentiality above all else.",
      imageUrl:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "Scalable Infrastructure",
      description:
        "Grow your business without limits. Our scalable infrastructure ensures that your software can handle increased demand and adapt to your evolving needs.",
      imageUrl:
        "https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="flex flex-col text-6xl text-white items-center justify-center p-5">
      <h1 className="mt-20" data-aos="fade-up">
        Features
      </h1>{" "}
      {features.map((feature, index) => (
        <div className="flex flex-col w-full items-center md:w-1/3" key={index}>
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="8000"
            className="w-0.5 h-48 bg-lime-300"
          ></div>
          <img
            className="w-8 h-8 animate-bounce"
            src="/assets/icon.png"
            alt="icon"
          />
          <h1
            data-aos="fade-up"
            className="text-3xl transition ease-in-out delay-150 hover:animate-bounce hover:text-4xl hover:text-lime-300  duration-300"
          >
            {feature.heading}
          </h1>
          <p data-aos="fade-up" className="text-base">
            {feature.description}
          </p>
          <div
            data-aos="flip-left"
            data-aos-duration="4000"
            className=" mt-20 h-40 w-64 rounded-lg overflow-hidden "
          >
            <img
              src={feature.imageUrl}
              className="object-cover hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;

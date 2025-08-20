import React from "react";
import { useParams, Link } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();

  // Example event data
  const events = {
    1: {
      title: "Demo Hackathon",
      description: `
        Welcome to the Demo Hackathon! This event is designed to showcase how a hackathon platform works. You'll get hands-on experience in forming teams, building projects, and submitting ideas. It’s not about winning but about learning and experimenting with new technologies. The hackathon will cover multiple domains including AI, Web Development, and IoT. Mentors will guide you through the process, and workshops will ensure you pick up new skills. This is the perfect place for beginners to start their journey and for advanced coders to experiment with innovative ideas. Networking sessions will also help you connect with peers.

        By the end, you’ll have a project that you can showcase in your portfolio. Remember, innovation comes from curiosity and collaboration. Get ready to dive in, explore, and build something awesome! 🚀
      `,
    },
    2: {
      title: "AI Challenge",
      description: `
        The AI Challenge is about pushing the limits of artificial intelligence. Participants will create innovative applications of AI — from chatbots to predictive models that solve real-world problems. This hackathon encourages creativity and problem-solving while promoting responsible AI usage. Teams can work on computer vision, NLP, or any other AI-powered domain. Mentors will be available to help you structure your project, and workshops will guide you on AI ethics and implementation best practices.

        Winning projects will be judged on innovation, feasibility, and impact. Join us and make AI work for humanity! 🤖
      `,
    },
    3: {
      title: "Web3 Hack",
      description: `
        Web3 Hack is all about blockchain and decentralized applications (dApps). This event is perfect for developers eager to explore the future of the internet. You’ll learn about smart contracts, DAOs, NFTs, and how to build dApps on popular blockchain platforms like Ethereum, Polygon, or Solana. Industry experts will host sessions on security, scalability, and tokenomics. You’ll also have access to starter templates and SDKs to accelerate development.

        The goal is to create decentralized solutions that can empower communities, enable transparent governance, or even redefine digital ownership. Step into the future with Web3 Hack and build the next generation of the internet! 🔗
      `,
    },
  };

  const event = events[id];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Event not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">{event.title}</h1>

      {/* Description as 2 big paragraphs */}
      <div className="max-w-3xl text-center space-y-8 mb-12">
        {event.description
          .trim()
          .split("\n\n") // split into 2 large paragraphs
          .map((para, index) => (
            <p key={index} className="text-lg leading-relaxed text-gray-200">
              {para.trim()}
            </p>
          ))}
      </div>

      {/* Submit Project Button */}
      <Link
        to={`/submit/${id}`}
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-white transition"
      >
        Submit Project
      </Link>
    </div>
  );
}

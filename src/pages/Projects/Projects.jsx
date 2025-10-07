import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Olova! A Lightweight JavaScript Library (Vue.js, Vite)",
    description:
      "A lightweight JavaScript library for creating beautiful, responsive UI components.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    color: "#5196fd",
    githubLink: "https://github.com/olovajs/olova",
    liveLink: "https://olova.js.org/",
  },
  {
    title: "Nanoleaf – Smart LED Lighting for Creative Spaces (Shopify)",
    description:
      "Nanoleaf offers cutting-edge modular LED lighting that transforms homes and offices with interactive, color-customizable designs. The platform supports seamless smart home integration, real-time effects, and intuitive control via app, voice, or automation. Its eco-friendly and innovative technology provides users with personalized, energy-efficient lighting experiences.",
    src: "tree.jpg",
    link: "https://iili.io/Khg5THN.png",
    color: "#8f89ff",
    githubLink: "",
    liveLink: "https://nanoleaf.me/",
  },
  {
    title: "LookPrior – Video-Powered Marketplace (Shopify)",
    description:
      "LookPrior is a mobile classifieds marketplace that lets users post ads with videos alongside images, giving buyers a true sense of products and services before purchase. Its intuitive app and website support secure messaging, customizable listings, and real-time local and national reach. LookPrior’s innovative approach builds trust and transparency for both buyers and sellers.",
    src: "water.jpg",
    link: "https://iili.io/KhgLNg1.png",
    color: "#fff",
    githubLink: "",
    liveLink: "https://lookprior.com/",
  },
  {
    title: "Au Lit Fine Linens – Canadian Luxury Bedding (Shopify)",
    description:
      "Au Lit Fine Linens is a Toronto-based, family-owned business dedicated to transforming sleep with luxury linens crafted from premium Egyptian cotton and natural fabrics. Since 1981, it has offered bespoke bedding, personalized service, and expert customization for both homes and hospitality. All products are made with a commitment to quality, comfort, and timeless style.",
    src: "house.jpg",
    link: "https://iili.io/KhrHG3v.png",
    color: "#ed649e",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://www.aulitfinelinens.com/",
  },
  {
    title: "Polarsteps – Personalized Travel Tracker & Planner (React, AWS)",
    description:
      "Polarsteps is a travel platform that helps users effortlessly plan, track, and share their journeys using automatic GPS route mapping and multimedia journaling. Its intuitive app creates digital and printed travel books, enhances travel planning with AI-generated itineraries, and offers flexible privacy options for sharing adventures. With offline support and a thriving community, Polarsteps brings travel memories and inspiration together in a seamless, engaging experience.",
    src: "house.jpg",
    link: "https://iili.io/Khr830J.png",
    color: "#234632",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://www.polarsteps.com/",
  },
  {
    title:
      "AI Content Detector - Copyleaks Chrome Extension (Chrome Extension, React, Manifest v3)",
    description:
      "A real estate platform built with React and Tailwind CSS. Features include property listings, virtual tours, mortgage calculators, and real-time market analytics for home buyers and sellers.",
    src: "house.jpg",
    link: "https://iili.io/Kh4wKvI.png",
    color: "#678945",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink:
      "https://chromewebstore.google.com/detail/ai-content-detector-copyl/gplcmncpklkdjiccbknjjkoidpgkcakd",
  },
  {
    title:
      "Thunderbit – AI Web Scraper & Web Automation Agent (Chrome Extension, JS, Manifest v3)",
    description:
      "Thunderbit is a powerful AI-driven Chrome extension that enables users to scrape data from any website, PDF, or image in just two clicks, eliminating the need for coding. It supports scraping emails, phone numbers, images, and detailed data across multiple pages with built-in templates for popular sites like Amazon, LinkedIn, and Zillow.",
    src: "house.jpg",
    link: "https://iili.io/Kh6IWAP.png",
    color: "#e58932",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink:
      "https://chromewebstore.google.com/detail/thunderbit-ai-web-scraper/hbkblmodhbmcakopmmfbaopfckopccgp",
  },
  {
    title:
      "Indeed Scraper – Job Data Extraction Chrome Extension (Chrome Extension, JS, Manifest v3)",
    description:
      "Indeed Scraper is a user-friendly Chrome extension designed to effortlessly extract and export detailed job data from Indeed in CSV, JSON, or Excel formats. It helps job seekers, recruiters, and HR managers easily analyze job market trends, track hiring, and customize searches without any coding skills.",
    src: "house.jpg",
    link: "https://iili.io/Kh6Ry2j.png",
    color: "#e58932",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink:
      "https://chromewebstore.google.com/detail/indeed-scraper/bneijclffbjaigpohjfnfmjpnaadchdd",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const totalProjects = projects.length;

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main id="projects" className="bg-[#04081A]" ref={container}>
        <section className="text-white w-full bg-slate-950">
          <div className="flex flex-col justify-center items-center mp-10">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              -Projects-
            </h1>
            <p className="text-gray-300 text-lg">
              Here are some of my projects that I've worked on.
            </p>
          </div>
          {projects.map((project, i) => {
            // Distribute scroll ranges evenly across all projects (works for any count)
            const rangeStart = i / totalProjects;
            const rangeEnd = Math.min(1, rangeStart + 1 / totalProjects);

            // Smooth scale distribution from min to max across the stack
            const minScale = 0.85;
            const maxScale = 1;
            const scaleStep =
              (maxScale - minScale) / Math.max(totalProjects, 1);
            const targetScale = maxScale - (totalProjects - i - 1) * scaleStep;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[rangeStart, rangeEnd]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a> */}

                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

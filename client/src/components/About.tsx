
import { Github } from "lucide-react"; // Assuming you're using lucide-react icons
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Shield,
  Monitor,
  CodeXml,
  ShieldAlert,
  Bug,
  Network,
  Lock,
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 bg-[#1A1A1A] bg-opacity-70 transition-all duration-500"
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left side */}
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2 relative">
                <span className="text-[#00FF8C]">#</span> About Me
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>

            <motion.div
              className="mb-8 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <p className="mb-6 text-gray-300">
                I am a passionate cybersecurity enthusiast and a Bachelor of
                Science in Information Technology (BS IT) student, with hands-on
                experience gained through internships and self-driven projects.
                I focus on implementing and testing security protocols,
                conducting vulnerability assessments, and strengthening overall
                security posture.
              </p>

              <p className="text-gray-300">
                I have practical experience in web and network penetration
                testing, actively participate in bug bounty programs and CTF
                competitions, and engage in the cybersecurity community through
                guest talks and knowledge sharing.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Lock />
                </div>
                <h3 className="font-mono font-semibold mb-2">
                  Web & Network Pentesting
                </h3>
                <p className="text-sm text-gray-400">
                  Skilled in discovering and exploiting vulnerabilities in web
                  apps and networks.
                </p>
              </motion.div>

              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <ShieldCheck />
                </div>
                <h3 className="font-mono font-semibold mb-2">
                  Firewall Implementation
                </h3>
                <p className="text-sm text-gray-400">
                  Experience configuring and managing firewalls to secure
                  network infrastructure.
                </p>
              </motion.div>

              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Bug />
                </div>
                <h3 className="font-mono font-semibold mb-2">
                  Bug Bounty & CTFs
                </h3>
                <p className="text-sm text-gray-400">
                  Actively participating in bug bounty programs and CTFs to
                  enhance offensive security skills.
                </p>
              </motion.div>

              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Network />
                </div>
                <h3 className="font-mono font-semibold mb-2">
                  Community Engagement
                </h3>
                <p className="text-sm text-gray-400">
                  Participating in guest talks and knowledge-sharing within the
                  cybersecurity community.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2">
                <span className="text-[#00FF8C]">#</span> Education and Training
                <div className="h-1 w-40 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>

            <motion.div
              className="mb-6 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{">"}</span> BS in
                  Information Technology
                </h3>
                <p className="text-gray-400 mb-1">
                  University of Agriculture Faisalabad
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{">"}</span> API Sec
                </h3>
                <p className="text-gray-400 mb-1">
                  Practical training and lab experience in API Pentesting.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{">"}</span> HTB CPTS Path
                </h3>
                <p className="text-gray-400 mb-1">
                  Hack The Box Certified Penetration Testing Specialist
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{">"}</span> HTB CWES
                </h3>
                <p className="text-gray-400 mb-1">
                  Hack the Box Certified Web Exploitation Specialist
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2">
                <span className="text-[#00FF8C]">#</span> Projects
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>

     <div className="grid gap-4">
  {/* New Project: Recon Script */}
  <motion.div
    className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80 flex flex-col justify-between"
    variants={itemVariants}
  >
    <div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-mono font-semibold mb-1">Recon Script (Bash)</h3>
          <p className="text-sm text-gray-400 mb-2">Bug Bounty / Pentesting Tool</p>
        </div>
        <div className="text-[#00FF8C] text-xl">
          <CodeXml />
        </div>
      </div>
      <p className="text-sm text-gray-300">
        A bash script designed to automate the collection of reconnaissance data useful for bug hunters and penetration testers, streamlining the initial info-gathering phase.
      </p>
    </div>
    <button
      onClick={() => window.open("https://github.com/arslanenginner/Bash-Project/tree/main/recon_Tool", "_blank")}
      aria-label="View Recon Script on GitHub"
      className="mt-3 p-2 bg-[#00FF8C] rounded-full hover:bg-[#00cc6a] transition w-8 h-8 flex items-center justify-center"
    >
      <Github className="text-black" size={16} />
    </button>
  </motion.div>

  {/* New Project: Tool Installer Script */}
  <motion.div
    className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80 flex flex-col justify-between"
    variants={itemVariants}
  >
    <div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-mono font-semibold mb-1">Tool Installer Script (Bash)</h3>
          <p className="text-sm text-gray-400 mb-2">Pentesting Tools Automation</p>
        </div>
        <div className="text-[#00FF8C] text-xl">
          <CodeXml />
        </div>
      </div>
      <p className="text-sm text-gray-300">
        A bash script that automates the installation and setup of popular bug bounty and penetration testing tools, saving time and ensuring consistency.
      </p>
    </div>
    <button
      onClick={() => window.open("https://github.com/arslanenginner/Bash-Project/tree/main/Tool-installer", "_blank")}
      aria-label="View Tool Installer Script on GitHub"
      className="mt-3 p-2 bg-[#00FF8C] rounded-full hover:bg-[#00cc6a] transition w-8 h-8 flex items-center justify-center"
    >
      <Github className="text-black" size={16} />
    </button>
  </motion.div>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

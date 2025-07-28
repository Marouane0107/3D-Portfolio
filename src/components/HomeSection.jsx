import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ContactModal from './ContactModal';

// Custom styles for 3D effects
const styles = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
`;

const HomeSection = () => {
    const [contactOpen, setContactOpen] = useState(false);

    const openContact = () => setContactOpen(true);
    const closeContact = () => setContactOpen(false);

  return (
    <>
      <style>{styles}</style>
      <section className="h-screen bg-gradient-to-b from-violet-700 to-black 
          flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
            {/* left Section */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.2,
                    duration: 0.8
                }}
                className="z-10"
            >
                <motion.h1 
                    className="text-white text-5xl lg:text-7xl font-bold
                        leading-tight lg:leading-snug mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 120,
                        damping: 25,
                        delay: 0.4,
                        duration: 1
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Building Fast
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent"
                    >
                        Reliable Results
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="text-gray-300 text-lg lg:text-xl mb-8 max-w-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    I'm Marouane Aouzal, a software engineering student at 1337 Coding School with hands-on experience in developing beautiful, responsive front-end applications. 
                    Whether I'm crafting interactive user interfaces, implementing modern design systems, or optimizing performance, I thrive on solving challenging problems through clean and maintainable code.
                </motion.p>

                <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <motion.button
                        className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden"
                        whileHover={{ 
                            scale: 1.05, 
                            y: -3,
                            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                            delay: 1.7, 
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                        onClick={openContact}
                    >
                        {/* Animated background gradient */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                        />
                        
                        {/* Button content */}
                        <span className="relative flex items-center justify-center gap-2">
                            <motion.span
                                initial={{ x: 0 }}
                                whileHover={{ x: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Get In Touch
                            </motion.span>
                            
                            {/* Animated arrow */}
                            <motion.svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ x: 0, rotate: 0 }}
                                whileHover={{ x: 5, rotate: 15 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </motion.svg>
                        </span>

                        {/* Pulse effect */}
                        <motion.div
                            className="absolute inset-0 rounded-xl bg-white opacity-20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0, 0.3, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Right Side - 3D Model Container */}
            <motion.div 
                className="flex-1 flex items-center justify-center relative h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: 0.8,
                    duration: 1
                }}
            >
                {/* 3D Model Placeholder Container */}
                <motion.div 
                    className="w-full h-full max-w-lg max-h-lg relative flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                {/* 3D Software Engineering Model */}
                <div className="relative w-80 h-80 perspective-1000">
                    {/* Main Code Block */}
                    <motion.div
                        className="absolute inset-0 preserve-3d"
                        animate={{ 
                            rotateY: [0, 360],
                            rotateX: [0, 10, 0, -10, 0],
                        }}
                        transition={{ 
                            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                            rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Code Editor Window */}
                        <motion.div 
                            className="absolute inset-0 bg-gray-900/80 backdrop-blur border border-violet-500/30 rounded-lg shadow-2xl"
                            style={{ transform: "translateZ(40px)" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            {/* Window Header */}
                            <div className="flex items-center p-3 border-b border-violet-500/20">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="ml-4 text-violet-300 text-sm font-mono">portfolio.jsx</div>
                            </div>
                            
                            {/* Code Content */}
                            <div className="p-4 font-mono text-sm space-y-2">
                                <motion.div 
                                    className="text-purple-400"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2, duration: 0.8 }}
                                >
                                    <span className="text-blue-400">const</span> developer = {"{"}
                                </motion.div>
                                <motion.div 
                                    className="text-green-400 ml-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.3, duration: 0.8 }}
                                >
                                    name: <span className="text-yellow-400">"Marouane"</span>,
                                </motion.div>
                                <motion.div 
                                    className="text-green-400 ml-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.6, duration: 0.8 }}
                                >
                                    skills: <span className="text-orange-400">["React", "JS", ...]</span>,
                                </motion.div>
                                <motion.div 
                                    className="text-green-400 ml-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.9, duration: 0.8 }}
                                >
                                    passion: <span className="text-yellow-400">"Building"</span>
                                </motion.div>
                                <motion.div 
                                    className="text-purple-400"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 3.2, duration: 0.8 }}
                                >
                                    {"};"}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Floating Tech Icons */}
                        <motion.div 
                            className="absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl"
                            style={{ transform: "translateZ(80px) translateX(-120px) translateY(-60px)" }}
                            animate={{ 
                                rotateZ: [0, 360],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ 
                                rotateZ: { duration: 6, repeat: Infinity, ease: "linear" },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            JS
                        </motion.div>

                        <motion.div 
                            className="absolute w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                            style={{ transform: "translateZ(60px) translateX(100px) translateY(-80px)" }}
                            animate={{ 
                                rotateZ: [0, -360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                                rotateZ: { duration: 8, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                        >
                            ⚛️
                        </motion.div>

                        <motion.div 
                            className="absolute w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                            style={{ transform: "translateZ(70px) translateX(-80px) translateY(90px)" }}
                            animate={{ 
                                rotateY: [0, 360],
                                scale: [1, 1.15, 1],
                            }}
                            transition={{ 
                                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                        >
                            {"</>"}
                        </motion.div>

                        {/* Geometric Shapes */}
                        <motion.div 
                            className="absolute w-8 h-8 bg-violet-500/60 rounded-full blur-sm"
                            style={{ transform: "translateZ(100px) translateX(80px) translateY(60px)" }}
                            animate={{ 
                                rotateY: [0, 360],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{ 
                                rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />

                        <motion.div 
                            className="absolute w-6 h-6 bg-pink-500/60 rounded-full blur-sm"
                            style={{ transform: "translateZ(90px) translateX(-60px) translateY(-100px)" }}
                            animate={{ 
                                rotateZ: [0, -360],
                                scale: [1, 1.4, 1],
                            }}
                            transition={{ 
                                rotateZ: { duration: 15, repeat: Infinity, ease: "linear" },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                            }}
                        />
                    </motion.div>
                </div>

                    {/* Orbital Elements around 3D Model */}
                    <motion.div
                        className="absolute w-6 h-6 bg-violet-400/60 rounded-full blur-sm"
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{
                            transformOrigin: "0 0",
                            transform: "translateX(200px) translateY(0px)"
                        }}
                    />

                    <motion.div
                        className="absolute w-4 h-4 bg-pink-400/60 rounded-full blur-sm"
                        animate={{ 
                            rotate: -360,
                            scale: [1, 1.3, 1],
                        }}
                        transition={{ 
                            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                        }}
                        style={{
                            transformOrigin: "0 0",
                            transform: "translateX(-150px) translateY(100px)"
                        }}
                    />

                    <motion.div
                        className="absolute w-3 h-3 bg-blue-400/60 rounded-full blur-sm"
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.4, 1],
                        }}
                        transition={{ 
                            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                        }}
                        style={{
                            transformOrigin: "0 0",
                            transform: "translateX(100px) translateY(-120px)"
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 bg-violet-500/20 rounded-full blur-xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <motion.div
                className="absolute bottom-40 right-40 w-24 h-24 bg-pink-500/20 rounded-full blur-lg"
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <motion.div
                className="absolute top-1/2 right-10 w-16 h-16 bg-blue-500/20 rounded-full blur-md"
                animate={{ 
                    y: [-20, 20, -20],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />
      </section>
      
      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
    </>
  )
}

export default HomeSection

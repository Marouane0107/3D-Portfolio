import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';


const Header = () => {

	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

  return (
	<header className="absolute w-full z-50 transition-all duration-300 ease-in-out">
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
			{/* Logo */}
			<motion.div 
				className="flex items-center"
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ 
					type: 'spring',
					stiffness: 100,
					damping: 25,
					delay: 0.3,
					duration: 1.2,
				}}
			>
				<div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
					M
				</div>
				<span className="text-gray-800 font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-xl text-transparent">
					Marouane
				</span>
			</motion.div>
			{/* icons */}
			<div className='lg:flex hidden items-center space-x-4'>

				<motion.a
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.3, duration: 0.5 }} 
					className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'  
					href='https://github.com/Marouane0107'
					target='_blank'
					rel='noopener noreferrer'>
					<FiGithub className='text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 w-5 h-5' />
				</motion.a>

				<motion.a
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.3, duration: 0.5 }}
					className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
					href='https://x.com/Marouan53356164'
					target='_blank'
					rel='noopener noreferrer'>
					<FiTwitter className='text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 w-5 h-5' />
				</motion.a>
				
				<motion.a
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.3, duration: 0.5 }}
					className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
					href='https://www.linkedin.com/in/marouane-aouzal-101b43253/'
					target='_blank'
					rel='noopener noreferrer'>
					<FiLinkedin className='text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 w-5 h-5' />
				</motion.a>
			</div>

			{/* Mobile Menu Button */}
			<div className="lg:hidden flex items-center">
				<motion.button
					className="lg:hidden text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
					onClick={toggleMenu}
					whileTap={{ scale: 0.9 }}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.3, duration: 0.5 }}
				>
					{isOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
				</motion.button>
			</div>

			{/* Mobile Menu */}
			<motion.div 
				className={`lg:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700 z-40`}
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={{
					open: { opacity: 1, y: 0, visibility: "visible" },
					closed: { opacity: 0, y: -20, visibility: "hidden" }
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<nav className="flex flex-col items-center space-y-6 p-6">
					{['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
						<motion.a 
							key={item} 
							initial={{ opacity: 0, x: -20 }}
							animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 20,
								delay: isOpen ? index * 0.1 + 0.1 : 0,
							}}
							className="text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 text-lg relative group"
							href={`#${item.toLowerCase()}`}
							onClick={() => setIsOpen(false)}
						>
							{item}
							<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-600 dark:bg-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
							</span>
						</motion.a>
					))}
					
					{/* Mobile Social Icons */}
					<motion.div 
						className="flex items-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700"
						initial={{ opacity: 0, y: 20 }}
						animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ delay: isOpen ? 0.5 : 0, duration: 0.3 }}
					>
						<motion.a
							className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
							href='https://github.com/Marouane0107'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<FiGithub className='w-6 h-6' />
						</motion.a>

						<motion.a
							className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
							href='https://x.com/Marouan53356164'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<FiTwitter className='w-6 h-6' />
						</motion.a>
						
						<motion.a
							className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
							href='https://www.linkedin.com/in/marouane-aouzal-101b43253/'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<FiLinkedin className='w-6 h-6' />
						</motion.a>
					</motion.div>

				</nav>
			</motion.div>
		</div>
		
	</header>
  )
}

export default Header
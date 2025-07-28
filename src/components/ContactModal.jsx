import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactModal = ({ isOpen, onClose }) => {
    const [showThankYou, setShowThankYou] = useState(false);
    const [state, handleSubmit] = useForm("mzzrnknv"); // Replace with your form ID
    const formRef = useRef(null);

    const closeModal = () => {
        onClose();
        setShowThankYou(false);
    };

    // Handle successful form submission
    useEffect(() => {
        if (state.succeeded) {
            setShowThankYou(true);
            // Clear form fields
            if (formRef.current) {
                formRef.current.reset();
            }
            // Auto close modal after 3 seconds
            const timer = setTimeout(() => {
                closeModal();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeModal}
                >
                    <motion.div 
                        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl max-w-md w-full relative mx-4"
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30,
                            duration: 0.4 
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button with cross icon */}
                        <motion.button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                        >
                            <FiX className="w-6 h-6" />
                        </motion.button>
                        
                        <motion.h2 
                            className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200" 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                        >
                            Get In Touch 
                        </motion.h2>
                        
                        <motion.form 
                            ref={formRef}
                            className='space-y-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            onSubmit={handleSubmit}
                        >
                            {/* Thank you message */}
                            {showThankYou && (
                                <motion.div
                                    className="text-center p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-1">Thank You! 🎉</h3>
                                    <p className="text-green-600 dark:text-green-300 text-sm">
                                        Thanks for reaching out! I'll get back to you soon.
                                    </p>
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                <motion.input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your Name" 
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <ValidationError 
                                    prefix="Name" 
                                    field="name"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <motion.input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your Email" 
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <motion.textarea 
                                    name="message"
                                    placeholder="Your Message" 
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none" 
                                    rows="4"
                                    whileFocus={{ scale: 1.02 }}
                                ></motion.textarea>
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </motion.div>

                            <motion.button 
                                type="submit" 
                                disabled={state.submitting}
                                className={`w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-violet-700 hover:to-purple-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-800 ${
                                    state.submitting ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                                whileHover={!state.submitting ? { scale: 1.02 } : {}}
                                whileTap={!state.submitting ? { scale: 0.98 } : {}}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                <span className="flex items-center justify-center">
                                    {state.submitting ? (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <motion.span
                                                className="ml-2"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                →
                                            </motion.span>
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;

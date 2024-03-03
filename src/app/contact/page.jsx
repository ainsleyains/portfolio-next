'use client';
import { motion } from 'framer-motion';
export default function Contact() {
    const text = 'Say Hello';
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                <div className='h-1/2 lg:h-full lg:w-1/2'>
                    <motion.div>
                        {text.split('').map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        😊
                    </motion.div>
                </div>
                <div className='h-1/2 lg:h-full lg:w-1/2'></div>
            </div>
        </motion.div>
    );
}

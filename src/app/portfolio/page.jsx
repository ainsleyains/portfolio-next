'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export default function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ['0%,100%']);

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div
                className='h-[600vh]'
                ref={ref}
            >
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center'>
                    My Works
                </div>
            </div>
        </motion.div>
    );
}

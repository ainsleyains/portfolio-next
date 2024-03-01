'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div>
                {/* text container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
                    {/* biography */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1>BIOGRAPHY</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum
                            quibusdam cupiditate nobis accusamus sed aut aperiam, reiciendis
                            numquam! Voluptas voluptatibus obcaecati dolore itaque suscipit! Vel
                            doloremque numquam quam nihil.
                        </p>
                        <span></span>
                    </div>
                    {/* skills */}
                    <div>skills</div>
                    {/* experiences */}
                    <div>experiences</div>
                </div>
                {/* svg container */}
            </div>
        </motion.div>
    );
}

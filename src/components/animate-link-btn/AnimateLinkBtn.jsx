import { motion } from 'framer-motion';

function AnimateLinkBtn({ show, children }) {
    return (
        <motion.div
            key="link-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 1 : .5 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ marginTop: '20px', pointerEvents: show ? 'auto' : 'none' }}
        >
            {children}
        </motion.div>
    )
}
export default AnimateLinkBtn
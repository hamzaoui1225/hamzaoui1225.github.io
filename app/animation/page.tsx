'use client'
import { motion } from "framer-motion";

const Pulse = ({ n = 2, duration = 2, delay = 0.8, gap = 50 }) => {
    return (
        <motion.div style={{ display: "grid", placeItems: "center" }}>
            {Array.from({ length: n }, (_, i) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: 1.1 }}
                    style={{
                        borderRadius: "50%",
                        background:
                            "linear-gradient(90deg, rgba(21, 11, 48, 0.2) 0%, rgba(91, 57, 184, 0.2) 100%)",
                        border: "1px solid rgb(172, 142, 255)",
                        gridArea: "1 / 1 / 2 / 2",
                        width: `${100 + i * gap}px`,
                        height: `${100 + i * gap}px`,
                        zIndex: n - i
                    }}
                    transition={{
                        duration: duration + i,
                        repeat: Infinity,
                        delay: i * delay,
                        repeatDelay: n - i - 1,
                        ease: "easeOut"
                    }}
                />
            ))}
        </motion.div>
    );
};

const PulseSyncFade = ({
                           n = 4,
                           duration = 1,
                           delay = 0.5,
                           width = 100,
                           gap = 50
                       }) => {
    return (
        <motion.div
            style={{ display: "grid", placeItems: "center", position: "relative" }}
        >
            {Array.from({ length: n }, (_, i) => {
                const delta = delay * (i - 1);
                const pulseDelay = delay + delta;
                const pulseRepeatDelay = pulseDelay;
                const pulseDuration = duration + (n - delta);
                return (
                    <motion.div
                        key={i}
                        style={{
                            borderRadius: "50%",
                            background:
                                "radial-gradient(50% 50% at 50% 50%, rgba(252, 252, 252, 0.3) 0%, #FCFCFC 100%)",
                            border: "1px solid rgba(228, 228, 228, 0.85)",
                            gridArea: "1 / 1 / 2 / 2",
                            width: `${width + gap * i}px`,
                            aspectRatio: "1/1",
                            zIndex: n - i
                        }}
                        {...(i !== 0 && {
                            initial: { opacity: 0 },
                            animate: { opacity: [0, 1, 0], scale: 1.1 },
                            transition: {
                                duration: pulseDuration,
                                delay: pulseDelay,
                                ease: "easeOut",
                                repeat: Infinity,
                                repeatDelay: pulseRepeatDelay
                            }
                        })}
                    />
                );
            })}
        </motion.div>
    );
};

const PulseSyncFadeFast = ({
                               n = 4,
                               duration = 1,
                               delay = 0.5,
                               width = 100,
                               gap = 50
                           }) => {
    return (
        <motion.div
            style={{ display: "grid", placeItems: "center", position: "relative" }}
        >
            {Array.from({ length: n }, (_, i) => {
                const pulseDelay = delay * i;
                const pulseRepeatDelay = pulseDelay;
                const pulseDuration = duration + delay * (n - i);
                return (
                    <motion.div
                        key={i}
                        style={{
                            borderRadius: "50%",
                            background:
                                "radial-gradient(50% 50% at 50% 50%, rgba(252, 252, 252, 0.3) 0%, #FCFCFC 100%)",
                            border: "1px solid rgba(228, 228, 228, 0.85)",
                            gridArea: "1 / 1 / 2 / 2",
                            width: `${width + gap * i}px`,
                            aspectRatio: "1/1",
                            zIndex: n - i
                        }}
                        {...(i !== 0 && {
                            initial: { opacity: 0 },
                            animate: { opacity: [0, 1, 0], scale: 1.1 },
                            transition: {
                                duration: pulseDuration,
                                delay: pulseDelay,
                                ease: [0.05, 0.6, 0.3, 0.3],
                                repeat: Infinity,
                                repeatDelay: pulseRepeatDelay
                            }
                        })}
                    />
                );
            })}
        </motion.div>
    );
};

export default function App() {
    return <Pulse duration={1} delay={0} />;
}

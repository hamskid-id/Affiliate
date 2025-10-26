import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: -50, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 30, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: {
      duration: 0.7,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const WhytitleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const WhydescriptionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const columnsVariants: Variants = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const whoItsForSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

export const whoItsForCardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

export const whoItsForMerchantCardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.5,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

export const whoItsForAffiliateCardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.7,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

export const everythingYouNeedSectionVariants: Variants = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const everythingYouNeedContentVariants: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const everythingYouNeedCardsVariants: Variants = {
  hidden: { opacity: 0, x: 64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const everythingYouNeedCardItemVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.6 + custom * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const keyFeaturesSectionVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

export const keyFeaturesImageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.5,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

export const keyFeaturesItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.4 + custom * 0.1,
      ease: [0.17, 0.55, 0.55, 1],
    },
  }),
};

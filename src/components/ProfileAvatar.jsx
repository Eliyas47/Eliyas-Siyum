import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile/Eliyas Siyum profile.png";

const SIZES = {
  nav: "profile-avatar-nav",
  hero: "profile-avatar-hero",
  lg: "profile-avatar-lg",
};

const ProfileAvatar = ({
  size = "nav",
  className = "",
  animate = false,
  priority = false,
}) => {
  const wrapClass = SIZES[size] ?? SIZES.nav;

  const inner = (
    <div className={`profile-avatar-wrap ${wrapClass}`}>
      <img
        src={profilePhoto}
        alt="Eliyas Siyum"
        className="profile-avatar-img"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );

  if (!animate) {
    return <div className={className}>{inner}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {inner}
    </motion.div>
  );
};

export { profilePhoto };
export default ProfileAvatar;

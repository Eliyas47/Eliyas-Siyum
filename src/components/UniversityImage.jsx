/**
 * Full-width campus banner — fills the card with cover + soft green backdrop.
 */
const UniversityImage = ({ src, alt, className = "" }) => (
  <div
    className={`university-image-banner relative w-full overflow-hidden ${className}`}
  >
    <div className="university-image-bg absolute inset-0" aria-hidden="true" />
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover object-[center_40%] scale-[1.02]"
      loading="lazy"
    />
    <div className="university-image-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
  </div>
);

export default UniversityImage;

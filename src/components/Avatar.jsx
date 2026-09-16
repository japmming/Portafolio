import { useState } from "react";

export default function Avatar({ src, alt = "Mi foto", className, emojiClassName, emoji = "🧑‍💻" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span aria-hidden="true" className={emojiClassName}>{emoji}</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ objectFit: "cover" }}
      onError={() => setFailed(true)}
    />
  );
}
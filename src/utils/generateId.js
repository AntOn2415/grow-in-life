export const generateId = (title, index) => {
  const safeIndex = Array.isArray(index) ? index.join("-") : index;

  if (typeof title !== "string" || !title.trim()) {
    return `section-${safeIndex}`;
  }

  const slug = title

    .trim()

    .toLowerCase()

    .replace(/[^a-z0-9\s-]/g, "")

    .replace(/[\s-]+/g, "-");

  return `${slug}-${safeIndex}`;
};

export function TechnicalVisual({ variant, compact = false }) {
  return (
    <div
      className={`technical-visual technical-visual--${variant} ${
        compact ? "technical-visual--compact" : ""
      }`}
    >
      <span className="technical-visual__grid" />
      <span className="technical-visual__window">
        <i />
        <i />
        <i />
        <b />
        <b />
        <b />
      </span>
      {/* <span className="technical-visual__node technical-visual__node--one" />
      <span className="technical-visual__node technical-visual__node--two" />
      <span className="technical-visual__node technical-visual__node--three" /> */}
      <span className="technical-visual__database" />
      <span className="technical-visual__label">
        {variant === "hero" && "Frontend · API · Data · Deploy"}
        {variant === "retail" && "Campaign · Store · Report"}
        {variant === "pos" && "Session · Billing · Closing"}
        {variant === "automation" && "Input · Process · Deliver"}
        {variant === "commerce" && "Browse · Order · Verify"}
      </span>
    </div>
  );
}

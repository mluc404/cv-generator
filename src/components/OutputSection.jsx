import "../styles/ResumePreview.css";
export function OutputSection({ input }) {
  return (
    <>
      {input.map((obj) => (
        <p key={obj.key} className={obj.key}>
          {obj.val}
        </p>
      ))}
    </>
  );
}

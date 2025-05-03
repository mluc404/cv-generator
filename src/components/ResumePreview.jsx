import "../styles/ResumePreview.css";
export function ResumePreview({ input }) {
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

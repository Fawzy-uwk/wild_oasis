/* eslint-disable react/prop-types*/
function Form_tiltle({ children }) {
  return (
    <h2
      style={{
        textAlign: "center",

        marginBottom: "15px",
        color: "var(--color-brand-500)",
      }}
    >
      {children}
    </h2>
  );
}

export default Form_tiltle;

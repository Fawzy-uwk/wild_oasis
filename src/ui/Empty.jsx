/* eslint-disable react/prop-types*/

function Empty({ resource }) {
  return (
    <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 600,color:"var(--color-gray-800" }}>
      No {resource} could be found.
    </p>
  );
}

export default Empty;

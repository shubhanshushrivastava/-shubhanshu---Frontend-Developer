export default function CustomNode({ data }) {
  const styles = {
    1: "bg-blue-100 border-blue-500 text-blue-900",
    2: "bg-green-100 border-green-500 text-green-900",
    3: "bg-purple-100 border-purple-500 text-purple-900",
  };

  return (
    <div
      className={`px-4 py-2 rounded border text-sm font-medium shadow ${styles[data.level]}`}
    >
      {data.label}
    </div>
  );
}

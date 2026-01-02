import { saveState, loadState } from "../utils/storage";

export default function Controls({ state, setState }) {
  return (
    <div className="flex gap-3 mt-4">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => {
          saveState(state);
          alert("Saved successfully");
        }}
      >
        Save
      </button>

      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => {
          const data = loadState();
          if (data) setState(data);
        }}
      >
        Load
      </button>

      <button
        className="px-4 py-2 bg-gray-700 text-white rounded"
        onClick={() => {
          const blob = new Blob(
            [JSON.stringify(state, null, 2)],
            { type: "application/json" }
          );
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "page-structure.json";
          a.click();
        }}
      >
        Export JSON
      </button>
    </div>
  );
}

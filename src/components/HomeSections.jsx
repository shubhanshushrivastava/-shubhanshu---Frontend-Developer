import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Item({ id }) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex justify-between px-4 py-2 bg-slate-50 border rounded cursor-grab hover:bg-slate-100"
    >
      <span>{id}</span>
      <span className="text-gray-400">⋮⋮</span>
    </div>
  );
}

export default function HomeSections({ sections, setSections }) {
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(e) => {
        const { active, over } = e;
        if (!over || active.id === over.id) return;

        setSections((prev) =>
          arrayMove(prev, prev.indexOf(active.id), prev.indexOf(over.id))
        );
      }}
    >
      <SortableContext items={sections} strategy={verticalListSortingStrategy}>
        <div className="space-y-2">
          {sections.map((s) => (
            <Item key={s} id={s} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

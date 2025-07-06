import People from "@/components/People";
import TreeView from "@/components/TreeView";

export default function TreePage() {
  return (
    <main className="p-4">
      <People />
      <div>
        <TreeView />
      </div>
    </main>
  );
}

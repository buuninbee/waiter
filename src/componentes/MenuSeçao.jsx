// components/MenuSection.jsx
import MenuItem from "./MenuItem";

function MenuSection({items}) {
  return (
    <section id='' className="my-10">
      <h2 className="text-2xl font-bold mb-4"></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection
const MENU = {
  today: [
    { name: "Roast of the Day", desc: "Roast chicken with seasonal vegetables, roast potatoes, and gravy", price: "€6.50", tags: ["GF option"] },
    { name: "Veggie Curry", desc: "Red lentil and chickpea curry, steamed rice, naan bread", price: "€5.50", tags: ["V", "VG", "GF"] },
    { name: "Chicken Wrap", desc: "Grilled chicken, mixed leaves, sundried tomato pesto, tortilla", price: "€4.20", tags: [] },
    { name: "Pasta Bake", desc: "Penne, beef bolognese, mozzarella topping, garlic bread", price: "€5.00", tags: ["gluten", "dairy"] },
    { name: "Soup & Roll", desc: "Today's soup: Leek & Potato with a batch roll", price: "€3.00", tags: ["V", "GF option"] },
    { name: "Build-Your-Own Salad", desc: "Unlimited greens, toppings, dressing from the salad bar", price: "€4.50", tags: ["V", "VG", "GF"] },
  ],
  tomorrow: [
    { name: "Fish & Chips", desc: "Beer-battered cod fillet, chunky chips, mushy peas, tartare sauce", price: "€6.00", tags: ["fish", "gluten"] },
    { name: "Mushroom Risotto", desc: "Arborio rice, wild mushrooms, parmesan, truffle oil", price: "€5.50", tags: ["V", "GF"] },
    { name: "BLT Baguette", desc: "Crispy bacon, lettuce, tomato, mayo in a crusty baguette", price: "€3.80", tags: ["gluten", "dairy"] },
  ],
};

function MenuSection({ label, items }: { label: string; items: typeof MENU.today }) {
  return (
    <section aria-labelledby={`menu-${label}`}>
      <h2
        id={`menu-${label}`}
        className="font-bold text-sm text-blue-800 bg-blue-50 border-l-4 border-blue-600 px-3 py-2 rounded mb-3 mt-5 first:mt-0"
      >
        {label}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="bg-white border border-slate-200 rounded-lg p-4"
          >
            <h3 className="font-bold text-sm mb-1">{item.name}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            {item.tags.length > 0 && (
              <div className="flex gap-1 flex-wrap mt-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.65rem] bg-slate-100 text-gray-500 px-1.5 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="font-extrabold text-blue-700 mt-2 text-sm">{item.price}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function CanteenPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Canteen Menu</h1>
        <p className="text-gray-500 text-sm">
          Fresh options served daily in the Grangegorman Food Hall.
        </p>
      </div>
      <MenuSection label="Today – Wednesday 1 May" items={MENU.today} />
      <MenuSection label="Tomorrow – Thursday 2 May" items={MENU.tomorrow} />
    </div>
  );
}

import React from "react";
import CustomButton from "../common/CustomButton";

const arrivalData = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Red and White version now on sale.",
    image:
      "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    size: "large", // big left section
  },
  {
    id: 2,
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
    image:
      "https://images.unsplash.com/photo-1739773375456-79be292cedb1?q=80&w=687&auto=format&fit=crop",
    link: "#",
    size: "medium", // right top
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers",
    image:
      "https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?q=80&w=764&auto=format&fit=crop",
    link: "#",
    size: "small", // bottom left
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80&auto=format&fit=crop",
    link: "#",
    size: "small", // bottom right
  },
];

const NewArrivalProducts = () => {
  const largeItem = arrivalData.find((item) => item.size === "large");
  const mediumItem = arrivalData.find((item) => item.size === "medium");
  const smallItems = arrivalData.filter((item) => item.size === "small");

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            New Arrival Products
          </h3>
        </div>

        <div className="flex justify-center items-center gap-4">
          <CustomButton buttonText={"View all"} variant={"textDanger"} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LARGE ITEM */}
        <div className="relative rounded overflow-hidden">
          <img
            src={largeItem.image}
            alt={largeItem.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 px-6 py-3 rounded shadow space-y-1">
            <h3 className="text-xl font-bold text-black">{largeItem.title}</h3>
            <p className="text-sm text-gray-700">{largeItem.description}</p>
            <div className="max-w-28 mt-3">
              <CustomButton
                buttonText={"Shop Now"}
                variant={"danger"}
                onClick={largeItem.link}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          {/* MEDIUM ITEM */}
          <div className="relative rounded overflow-hidden h-52">
            <img
              src={mediumItem.image}
              alt={mediumItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold">{mediumItem.title}</h4>
              <p className="text-sm">{mediumItem.description}</p>
              <div className="max-w-24 mt-3">
                <CustomButton
                  buttonText={"Shop Now"}
                  variant={"secondary"}
                  onClick={largeItem.link}
                  className="text-xs"
                />
              </div>
            </div>
          </div>

          {/* SMALL ITEMS (LOOP) */}
          <div className="grid grid-cols-2 gap-4">
            {smallItems.map((item) => (
              <div
                key={item.id}
                className="relative rounded overflow-hidden h-40"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 text-white">
                  <h5 className="text-sm font-bold">{item.title}</h5>
                  <p className="text-xs">{item.description}</p>
                  <div className="max-w-24 mt-3">
                    <CustomButton
                      buttonText={"Shop Now"}
                      variant={"secondary"}
                      onClick={largeItem.link}
                      className="text-xs"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivalProducts;

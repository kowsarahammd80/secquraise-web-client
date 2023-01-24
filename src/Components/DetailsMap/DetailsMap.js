import React from "react";

const DetailsMap = ({ uniqueDetail }) => {
  const { ID, location, gender, name, data, time, img } = uniqueDetail[0];
  return (
    <div className="grid grid-cols-2">
      {/* Details text */}

      <div className="p-4">
        {/* Id/person */}
        <div className="mt-10 ">
          <h1 className="text-2xl font-bold">{ID}</h1>
          <p className="text-xl font-bold">Person Detected.</p>
        </div>

        {/* name or details */}
        <div className="mt-8 font-semibold text-xl">
          <p>
            Name <span className="ml-6">: {name}</span>
          </p>
          <p>
            Location <span className="ml-2">: {location}</span>
          </p>
          <p>
            Date <span className="ml-8">: {data}</span>
          </p>
          <p>
            Time <span className="ml-8">: {time}</span>
          </p>
        </div>

        {/* Description */}

        <div className="mt-8 mb-3 text-xl">
          <h1 className="">Description:</h1>
          <h1 className="">{name} 25 detected at</h1>
          <h1 className="">{location} on {data}</h1>
        </div>
      </div>

      {/* image */}

      <div className="">
        <h1 className="font-semibold text-lg">{gender}</h1>
        <img className="Image-size" src={img} alt="" />
      </div>
    </div>
  );
};

export default DetailsMap;

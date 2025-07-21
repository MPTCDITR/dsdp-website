import React from "react";

export type ContentProps = {
  image: string;
  titleNumber?: string;
  title: string;
  description: React.ReactNode;
}

const ContentBlock: React.FC<ContentProps> = ({
  image,
  titleNumber = "01",
  title,
  description,
}) => {
  return (
    <section id="card" className="grid lg:grid-cols-5 md:flex-wrap  grid-cols-1 gap-6 justify-between items-end self-stretch w-full">
      <div className="flex flex-col items-start gap-3 lg:col-span-3 md:col-span-2 col-span-1">
        <p className="text-8xl text-gradient font-semibold mt-6">
          {titleNumber}
        </p>
        <h2 className="text-3xl leading-10 font-semibold mb-4">{title}</h2>
       {description}
      </div>
      <img src={image} alt="image" className="rounded-lg object-contain lg:col-span-2 col-span-1" />
    </section>
  );
};

export default ContentBlock;

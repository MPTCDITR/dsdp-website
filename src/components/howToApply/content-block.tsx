import React from "react";

type ContentProps = {
  image: string;
  titleNumber?: string;
  title: string;
  description: string;
};

const ContentBlock: React.FC<ContentProps> = ({
  image,
  titleNumber = "01",
  title,
  description,
}) => {
  return (
    <div className="flex gap-6 justify-between items-end self-stretch w-full">
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-8xl text-[#004282] font-semibold mt-6">
          {titleNumber}
        </h1>
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p
          className="text-base leading-6 opacity-60"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>

      <div>
        <img src={image} alt="image" className="rounded-lg object-contain" />
      </div>
    </div>
  );
};

export default ContentBlock;

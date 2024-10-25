import { ContentItem, ContentType } from "./contentTable";

interface Props {
  content: ContentType;
}

export const ContentBlock = ({ content }: Props) => {
  const contentItemArrLength = content.itemsArr.length;
  const halfContent = Math.floor(contentItemArrLength / 2);

  const contentFunc = (el: ContentItem, ind: number) => {
    let fontSize;
    let height;
    const number = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
    const animation = `flyUpDown ${number}s ease-in-out infinite`;
    switch (el.value) {
      case 2:
        fontSize = "text-base";
        height = "min-h-14";
        break;
      case 3:
        fontSize = "text-lg";
        height = "min-h-15";
      case 4:
        fontSize = "text-xl";
        height = "min-h-20";
      default:
        fontSize = "text-sm";
        height = "min-h-6";
        break;
    }

    return (
      <div
        key={ind}
        style={{
          animation: animation,
        }}
        className={`with-tooltip ${fontSize} ${height}
        hidden group-hover:flex h-min drop-shadow-smallglow p-4 hover:p-0`}
        data-tooltip="database in projects"
      >
        {el.text}
      </div>
    );
  };

  return (
    <div
      className="flex flex-wrap text-slate-300 justify-center content-center
      gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 font-bold items-center
    duration-1000 group"
    >
      {content.itemsArr.slice(0, halfContent).map(contentFunc)}
      <p className="text-3xl animate-fly5">{content.title}</p>
      {content.itemsArr
        .slice(halfContent, contentItemArrLength)
        .map(contentFunc)}
    </div>
  );
};

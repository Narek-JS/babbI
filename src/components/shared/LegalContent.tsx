type LegalContent = {
  LONG_DESCRIPTION?: string;
  DESCRIPTION?: string;
  LIST?: Array<string>;
  TITLE?: string;
};

interface Props {
  content: Array<LegalContent>;
}

const LegalContent: React.FC<Props> = ({ content }) => (
  <div className="max-w-3xl mx-auto flex flex-col gap-4 text-[#FFFFFF]">
    {content.map((item, index) => (
      <div key={index} className="flex flex-col gap-4">
        {item.TITLE && <h2 className="text-xl font-bold">{item.TITLE}</h2>}

        {item.DESCRIPTION && (
          <p className="text-sm leading-[21px]">{item.DESCRIPTION}</p>
        )}

        {item.LIST && (
          <ul className="text-primary-grey text-sm pl-8 list-disc">
            {item.LIST.map((listItem, listIndex) => (
              <li key={listIndex} className="mb-3 last:mb-0">
                {listItem}
              </li>
            ))}
          </ul>
        )}

        {item.LONG_DESCRIPTION && (
          <p className="text-primary-grey text-sm leading-[21px]">
            {item.LONG_DESCRIPTION}
          </p>
        )}
      </div>
    ))}
  </div>
);

export { LegalContent };

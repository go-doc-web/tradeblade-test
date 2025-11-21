import clsx from "clsx";
import styles from "./Accordion.module.scss";
import { useAccordionContext } from "../../store/useAccordionContext.jsx";

export const AccordionItem = ({
  title,
  content,
  id,
  customClassItem,
  customAccordionHeader,
  customClassTitle,
  customClassIcon,
  customClassListContent,
  paragraph,
  iconOpen,
  iconClose,
}) => {
  const { isItemOpen, onToogle } = useAccordionContext();

  const isOpen = isItemOpen(id);
  console.log("isOpen", isOpen);
  const itemClasses = clsx(customClassItem, { [styles.active]: isOpen });
  const titleClasses = clsx(customClassTitle, { [styles.active]: isOpen });
  const spanClasses = clsx(customClassIcon, { [styles.active]: isOpen });
  const spanParagraph = clsx(paragraph, { [styles.active]: isOpen });
  return (
    <li className={itemClasses}>
      <div className={customAccordionHeader} onClick={() => onToogle(id)}>
        <h3 className={titleClasses}>{title}</h3>
        <span className={spanClasses}>{!isOpen ? iconClose : iconOpen}</span>
      </div>
      {isOpen && (
        <ul className={customClassListContent}>
          {content.map((p, index) => (
            <p className={spanParagraph} key={index}>
              {p}
            </p>
          ))}
        </ul>
      )}
    </li>
  );
};

const Accordion = ({
  items,
  customClassList = "",
  customClassItem = "",
  customAccordionHeader = "",
  customClassTitle = "",
  customClassIcon = "",
  customClassListContent = "",
  paragraph = "",
  iconOpen = "+",
  iconClose = "-",
}) => {
  const { isItemOpen, onToogle } = useAccordionContext();

  return (
    <>
      <ul className={clsx(styles.list, customClassList)}>
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            isOpen={isItemOpen(item.id)}
            onToggleAccordion={onToogle}
            customClassItem={customClassItem}
            customAccordionHeader={customAccordionHeader}
            customClassTitle={customClassTitle}
            customClassIcon={customClassIcon}
            customClassListContent={customClassListContent}
            paragraph={paragraph}
            iconOpen={iconOpen}
            iconClose={iconClose}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion;

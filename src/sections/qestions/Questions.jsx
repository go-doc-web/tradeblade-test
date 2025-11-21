import React from "react";
import clsx from "clsx";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Accordion from "../../components/accordion/Accordion";
import SectionTitle from "../../components/section-title";
import {
  SECTION_TITLE,
  accordionItems,
} from "../../config/accordionItemsConfig";

import styles from "./Qestions.module.scss";

const Questions = () => {
  return (
    <section
      id="faq"
      className={clsx("ection-with-fixed-header", styles.accordion)}
    >
      <div className={clsx("container", styles.sectionAccordion)}>
        <SectionTitle
          className={clsx("section-title", styles.title)}
          type={"h2"}
        >
          {SECTION_TITLE}
        </SectionTitle>
        <h2></h2>
        <div className={styles.wrapper}>
          <Accordion
            items={accordionItems}
            customClassList={styles.accordionList}
            customClassItem={styles.accordionItem}
            customAccordionHeader={styles.accordionHeader}
            customClassIcon={styles.iconArrow}
            customClassTitle={styles.titleHeader}
            paragraph={styles.paragraph}
            iconOpen={<MdKeyboardArrowUp />}
            iconClose={<MdKeyboardArrowDown />}
          />
        </div>
      </div>
    </section>
  );
};

export default Questions;

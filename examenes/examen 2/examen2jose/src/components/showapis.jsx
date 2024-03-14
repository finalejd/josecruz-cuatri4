import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import P_soloid from "../listas/p_soloid";
import P_idytitles from "../listas/p_idytitles";
import Psinr_idytitle from "../listas/psinr_idytitle";
import Pr_idytitle from "../listas/pr_idytitle";
import P_idyusers from "../listas/p_idysusers";
import Pr_idyusers from "../listas/pr_idysuers";
import Psinr_idyusers from "../listas/psinr_idysuers";

export function AccordionAPI() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>Pendientes (Solo ID's)</AccordionHeader>
        <AccordionBody>
        <P_soloid/>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Pendientes (ID's y titles)
        </AccordionHeader>
        <AccordionBody>
          <P_idytitles/>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Pendientes sin resolver (ID's y titles)
        </AccordionHeader>
        <AccordionBody>
        <Psinr_idytitle/>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        Pendientes resueltos (ID's y titles)
        </AccordionHeader>
        <AccordionBody>
          <Pr_idytitle/>
        </AccordionBody>
      </Accordion>

      
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        Pendientes (ID's y UserID)
        </AccordionHeader>
        <AccordionBody>
        <P_idyusers/>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)}>
        Pendientes resueltos (ID's y UserID)
        </AccordionHeader>
        <AccordionBody>
          <Pr_idyusers/>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)}>
        Pendientes sin resolver(ID's y UserID)
        </AccordionHeader>
        <AccordionBody>
      <Psinr_idyusers/>
        </AccordionBody>
      </Accordion>
    </>
  );
}
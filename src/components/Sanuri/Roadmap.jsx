import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../../constants";  // Ensure roadmap is correctly imported
import { Gradient } from ".././design/Roadmap";

// Import Accordion components from the provided code
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ny } from '../../lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      // Removed the 'border-b' class to eliminate the bottom border
      className={ny(className)}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={ny(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-white lg:text-xl',  // Title larger on large screens
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-neutral-500 size-4 shrink-0 transition-transform duration-200 dark:text-neutral-400" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-white lg:text-lg"  // Default smaller font size for mobile
      {...props}
    >
      <div className={ny('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

// Roadmap component
const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10 sm:px-5 xl:px-52"> {/* Added responsive padding */}

      {/* Heading */}
      <Heading tag="FAQ" title="Frequently Asked Questions" />

      {/* Accordion section placed here */}
      <Accordion type="single" collapsible>
        {roadmap && roadmap.length > 0 ? (
          roadmap.map((step, index) => (
            <AccordionItem key={index} value={`step-${index}`}>
              <AccordionTrigger>{step.title}</AccordionTrigger>

              {/* Description under each accordion header */}
              <AccordionContent>
                <p className="mt-2 sm:text-[23px] md:text-[17px] lg:text-[16.5px]">
                  {step.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <div>No roadmap steps available.</div>  // Add fallback if roadmap data is empty or missing
        )}
      </Accordion>

      <Gradient />

      {/* Our roadmap button */}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Contact Us For More</Button>
      </div>

    </div>
  </Section>
);

export default Roadmap;

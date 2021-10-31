import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const TravelService = () => {
    return (
        <div className="px-4 py-5">
            <h6 className="text-blue-500 text-center">FQA</h6>
            <h1 className="text-center text-4xl font-bold mb-10">Full range of travel service</h1>
            <div className="grid  md:grid-cols-2 py-4">
                <div className="px-4 w-3/4 py-5 mx-auto">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Start the automated process.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    The automated process start.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare..
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Process start automated magic.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare..
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="px-4">
                    <img src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/xabout2.png.pagespeed.ic.FKuxbsbrrT.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TravelService;
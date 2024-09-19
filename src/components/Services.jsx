import "./Services.css";
import ServiceCard from "./ServiceCard";

const data = [
  {
    id: "1",
    title: "Crown & Bridge",
    description: "At our lab, we pride ourselves on delivering exceptional crowns and bridges using the latest in digital design and milling technology. Whether your patients need metal-free, zirconia, or porcelain restorations, we ensure every crown and bridge is crafted with precision for a perfect fit, natural esthetics, and long-lasting durability. Our meticulous attention to detail guarantees restorations that seamlessly integrate into your patients' smiles.",
  },
  {
    id: "2",
    title: "All-on-X",
    description: "Our team excels in creating custom All-on-X full arch restorations, offering a permanent solution for edentulous patients. Using advanced digital workflows, we ensure precision from implant placement to final prosthetic design. Our full arches are designed for optimal function, esthetics, and patient comfort, providing stability and a natural appearance, helping you restore your patients' confidence and oral health.",
  },
  {
    id: "3",
    title: "Photogrammetry Scanning",
    description: " Our photogrammetry scanning service enhances implant-level precision, making it ideal for complex cases like full-arch restorations. This technology ensures that every restoration is designed with exceptional accuracy, providing you with reliable results for even the most demanding cases. We utilize cutting-edge intraoral scanning technology to capture highly accurate digital impressions, eliminating the need for traditional molds.",
  },
  {
    id: "4",
    title: "3D Printing",
    description: "Our 3D printing services enable fast and precise production of dental models, surgical guides, and custom restorations. Leveraging the latest in 3D printing technology, we can reduce turnaround times without compromising on quality. Whether for prototyping or final restorations, our lab ensures that each printed product meets the highest standards of accuracy and craftsmanship.",
  },
];

const Services = () => {
  return <div id="services" className="services container">
    <h1 className="text-accent">Our Services</h1>
    {data.map((item, index) => {
      return <ServiceCard data={item} key={index} />;
    })}
  </div>;
};

export default Services;

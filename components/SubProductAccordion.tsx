"use client";

import { useState } from "react";
import Image from "next/image";
import ExpandableDescription from "./ExpandableDescription";

type Product = {
  name: string;
  image: string;
  description: string;
  features: string[];
  specifications?: string[][];
  additionalSpecifications?: string[][];
  tableHeaders?: string[];
};

export default function SubProductAccordion({ prod }: { prod: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  const specificationTable = (specifications: string[][], headers: string[] = ["Reference", "Specification"]) => (
    <div className="specification-table">
      <div 
        className="specification-row specification-heading"
        style={headers.length !== 2 ? { gridTemplateColumns: `repeat(${headers.length}, 1fr)` } : undefined}
      >
        {headers.map((h, i) => (
          <strong key={i}>{h}</strong>
        ))}
      </div>
      {specifications.map((row, index) => (
        <div 
          className="specification-row" 
          key={index}
          style={row.length !== 2 ? { gridTemplateColumns: `repeat(${row.length}, 1fr)` } : undefined}
        >
          {row.map((cell, i) => (
            <span key={i}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div key={prod.name}>
      <section className="product-details section" style={{ paddingTop: '20px', paddingBottom: isOpen ? '0px' : '40px' }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "1px solid #d6e0e8", paddingBottom: "15px" }}>
            <h2 style={{ color: "#18354f", fontFamily: "Montserrat, sans-serif", fontSize: "22px", textTransform: "uppercase", margin: 0 }}>{prod.name}</h2>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: "#d51a1a",
                color: "white",
                border: "none",
                padding: "8px 16px",
                fontWeight: "bold",
                cursor: "pointer",
                textTransform: "uppercase",
                borderRadius: "4px"
              }}
            >
              {isOpen ? "Hide Details" : "Read More"}
            </button>
          </div>
          
          <div className="product-details-grid">
            <div>
              <div className="product-detail-image" style={{ minHeight: "250px" }}>
                <Image
                  src={`/images/products/${prod.image}`}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 800px) 100vw, 48vw"
                />
              </div>
              <a
                className="quote-button"
                href="mailto:sale@shreeindustriesheaters.com?subject=Quote%20request"
              >
                Get best quote
              </a>
            </div>
            
            <div className="product-copy">
              <ExpandableDescription text={prod.description} />
            </div>
          </div>
        </div>
      </section>
      
      {isOpen && prod.specifications && prod.specifications.length > 0 && (
        <section className="product-specifications-section" style={{ paddingTop: '20px' }}>
          <div className="container" style={{ borderTop: "none" }}>
            <div className="specification-tables">
              <div>{specificationTable(prod.specifications, prod.tableHeaders)}</div>
              {prod.additionalSpecifications && (
                <div>{specificationTable(prod.additionalSpecifications, prod.tableHeaders)}</div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

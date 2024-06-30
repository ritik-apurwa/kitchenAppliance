import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { brands } from "../../public";
import BrandCard from "./BrandCard";

const BrandPage: React.FC = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();

  const brand = brands.find((b) => b.brandName.toLowerCase() === brandName?.toLowerCase());

  useEffect(() => {
    if (brand) {
      document.title = `${brand.brandName} | Your App Name`;
    } else {
      document.title = "Brand Not Found | Your App Name";
      // Optionally redirect to a 404 page if brand is not found
      // navigate('/404', { replace: true });
    }

    return () => {
      document.title = "Your App Name";
    };
  }, [brand, navigate]);

  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div className="space-y-8">
        <BrandCard
          id={brand.id}
          brandName={brand.brandName}
          brandBgImage={brand.brandBgImage}
          brandServices={brand.brandServices}
          brandServiceDetails={brand.brandServiceDetails}
          brandServicePara={brand.brandServicePara}
        />
      </div>
    </section>
  );
};

export default BrandPage;
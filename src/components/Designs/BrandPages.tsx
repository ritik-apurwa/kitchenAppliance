import { useParams } from "react-router-dom";
import { brands } from "../../public";
import BrandCard from "./BrandCard";

const BrandPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const brand = brands.find((b) => b.id.toString() === id);

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

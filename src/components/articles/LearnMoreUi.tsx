import React from "react";

import QuickViewUi from "../ui/CountUp/QuickViewUi";

const LearnMoreUi: React.FC = () => {
  return (
    <QuickViewUi
      title="Want to Learn More?"
      description="Connect with our experts to discuss how we can help transform your business."
      linkName="Connect with Us"
      url="/contact-us"
    />
  );
};

export default LearnMoreUi;

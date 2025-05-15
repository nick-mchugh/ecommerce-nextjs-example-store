import type { ElementTrackingConfiguration } from "@snowplow/browser-plugin-element-tracking";

import productCardStyles from "@/components/productCard/index.module.scss";
import categoryStyles from "@/components/category/index.module.scss";
import recommendationStyles from "@/components/recommendations/index.module.scss";

export const elementTrackingConfig: ElementTrackingConfiguration = {
  elements: [
    {
      name: "product_impression",
      selector: [
        `.${categoryStyles.categoryContent}`,
        `.${productCardStyles.figure}`,
      ].join(" "),
      expose: {
        when: "pageview",
        minPercentage: 0.5,
        minTimeMillis: 500,
      },
      details: {
        child_text: {
          title: `.${productCardStyles.model}`,
          category: `.${productCardStyles.category}`,
          price: `.${productCardStyles.price}`,
        },
      },
    },
    {
      name: "recommendation_impression",
      selector: `.${recommendationStyles.recommendationsContainer}`,
      create: true,
      expose: {
        when: "pageview",
        minPercentage: 0.8,
      },
      details: {
        child_text: {
          title: `.${recommendationStyles.recommendationsTitle}`,
        },
      },
      contents: {
        name: "recommendations_tile",
        selector: `.${productCardStyles.figure}`,
        details: {
          child_text: {
            title: `.${productCardStyles.model}`,
            category: `.${productCardStyles.category}`,
            price: `.${productCardStyles.price}`,
          },
        },
      },
    },
  ],
};

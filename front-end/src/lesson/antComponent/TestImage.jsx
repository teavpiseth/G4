import React from "react";
import { Image } from "antd";
const TestImage = () => (
  <Image.PreviewGroup
    items={[
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/960px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
      "https://www.topgear.com/sites/default/files/2025/02/Original-25901-aw609563.jpg",
      "https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600",
    ]}
  >
    <Image
      width={200}
      src="https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600"
    />
  </Image.PreviewGroup>
);
export default TestImage;

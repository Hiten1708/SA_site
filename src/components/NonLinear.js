import React from 'react';
import AniComp from './aniComp';
// import './aniComp.css'; // Import the corresponding CSS file for styling

const NonLinear = () => {
  return (
    <div>
      <AniComp
        title="Section 1"
        beforeText="This is the text before the image."
        afterText="This is the text after the image."
        imageComponent={<img src="/path/to/your/image.jpg" alt="Description" />}
      />

      <AniComp
        title="Section 2"
        beforeText="Another section with text before the image."
        afterText="Text after the image in Section 2."
        imageComponent={<img src="/path/to/another/image.jpg" alt="Description" />}
      />

      {/* Add more instances of ReusableComponent as needed */}
    </div>
  );
};

export default NonLinear;
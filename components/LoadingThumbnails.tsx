import React from "react";
import SkeletonContent from "react-native-skeleton-content";
import * as Animatable from "react-native-animatable";

interface LoadingThumbnailsProps {
  loading: boolean;
  children: any;
}

const LoadingThumbnails = ({ loading, children }: LoadingThumbnailsProps) => {
  if (!loading) {
    return children;
  }
  return (
    <Animatable.View animation="slideInDown">
      <SkeletonContent
        containerStyle={{ flex: 1, width: "80%", marginLeft: "10%" }}
        boneColor="#121212"
        highlightColor="#333333"
        animationType="pulse"
        isLoading={loading}
        layout={[
          {
            key: "title",
            width: "100%",
            height: 20,
            marginTop: 30,
            marginBottom: 6,
          },
          {
            key: "HeroImage",
            width: "100%",
            height: 400,
            marginBottom: 10,
          },
          {
            key: "catText",
            width: "100%",
            height: 20,
            marginBottom: 6,
          },
          {
            key: "categoryTitle",
            width: "100%",
            height: 20,
            marginTop: 10,
            marginBottom: 6,
          },
          {
            key: "categoryDisplay",
            width: "100%",
            height: 100,
            marginBottom: 6,
          },
        ]}
      >
        {children}
      </SkeletonContent>
    </Animatable.View>
  );
};

export default LoadingThumbnails;

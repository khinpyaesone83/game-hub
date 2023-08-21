import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card marginY={5}>
      <HStack>
        <Skeleton height={"32px"} />
        <SkeletonText />
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;

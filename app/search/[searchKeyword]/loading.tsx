import SkeletonPostCard from "@/components/skeleton-post-card";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <SkeletonPostCard key={index} />
      ))}
    </div>
  );
};

export default Loading;

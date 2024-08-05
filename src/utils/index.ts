export const getImageUrl = (imageUrl: string) => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/storage/buckets/Images/${imageUrl}`;
};

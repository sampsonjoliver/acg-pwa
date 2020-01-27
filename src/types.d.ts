declare module 'cloudinary-react' {
  type ImageManipulation = {
    cloudName?: string;
    height?: string | number;
    width?: string | number;
    crop?: 'fill' | 'scale' | string;
    effect?: string;
    radius?: string | number;
    overlay?: string;
    gravity?: 'faces' | string;
    x?: string | number;
    y?: string | number;
    angle?: string | number;
    secure?: 'true' | 'false';
    quality?: 'auto' | string;
    fetchFormat?: 'auto';
    responsive?: boolean;
    dpr?: 'auto';
    responsiveUseBreakpoints?: 'true' | 'false';
    type?: string;
  };
  export const CloudinaryContext: React.ElementType<{ cloudName: string }>;
  export const Image: React.ElementType<{
    publicId: string;
  } & ImageManipulation>;
  export const Transformation: React.ElementType<ImageManipulation>;
  export const Video: React.ElementType;
}

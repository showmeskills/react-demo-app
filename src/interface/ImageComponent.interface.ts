export interface ImageComponentProps {
  src: string;
  alt: string;
  size?: {
    width: number | string;
    height: number | string;
    objectFit: string;
  };
}

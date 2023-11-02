import Bounded from "@/app/components/section/Bounded";
import Heading from "@/app/components/section/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="my-5 md:mb-9 font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
      {children}
    </p>
  ),
};

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid md:grid-cols-2 place-items-center"
    >
      <PrismicNextImage
        className={clsx(slice.variation === "revert" && 'md:order-2')}
        width={400}
        field={slice.primary.image} />
      <div>
        <PrismicRichText components={components} field={slice.primary.title} />
        <PrismicRichText components={components} field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default TextWithImage;

import Bounded from "@/app/components/section/Bounded";
import Heading from "@/app/components/section/Heading";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testemonials`.
 */
export type TestemonialsProps = SliceComponentProps<Content.TestemonialsSlice>;


const Components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-9 font-semibold">{children}</Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
      {children}
    </p>
  )
}
/**
 * Component for "Testemonials" Slices.
 */
const Testemonials = async ({ slice }: TestemonialsProps): Promise<JSX.Element> => {

  const client = createClient()

  const testomonials = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonials) && item.testimonials.uid
      ) {
        return client.getByUID('testomonials', item.testimonials.uid)
      }
    })
  )


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <PrismicRichText components={Components} field={slice.primary.heading} />

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {testomonials.map(
          (item, index) =>
            item && (
              <div
                key={index}
                className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
              >
                <PrismicRichText
                  field={item.data.quote}
                  components={Components}
                />

                <div className="flex items-center">
                  <PrismicNextImage
                    width={56}
                    height={56}
                    field={item.data.avatar}
                    className="rounded-full mr-4 aspect-square"
                    imgixParams={{ ar: "1:1", fit: "crop" }}
                  />
                  <div>
                    <p className="text-base font-medium text-slate-700">
                      {item.data.name}
                    </p>
                    <p className="text-base text-slate-600">
                      {item.data.destination}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Testemonials;

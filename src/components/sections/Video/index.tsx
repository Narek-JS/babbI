import { getTranslations } from "next-intl/server";

const Video: React.FC = async () => {
  const t = await getTranslations("video");

  return (
    <section className="w-full bg-[#171324] py-5 -my-10 sm:my-0" id="video">
      <div className="container mx-auto">
        <video
          poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          className="w-full h-full object-cover aspect-video overflow-hidden rounded-xl"
          preload="metadata"
          controls
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          {t("notSupportVideo")}
        </video>
      </div>
    </section>
  );
};

export { Video };

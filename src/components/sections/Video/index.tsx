const Video: React.FC = () => (
  <section className="w-full bg-[#171324] py-5" id="video">
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
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export { Video };

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MuxVideo from "@mux/mux-video-react";

const query = graphql`
  query {
    allSanitySiteSettings {
      nodes {
        herovideo {
          asset {
            _key
            _type
            status
            assetId
            playbackId
            filename
            thumbTime
            __typename
          }
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query) || {};
  const herovideo = data.allSanitySiteSettings.nodes[0].herovideo.asset;
  console.log("herovideo: ", herovideo);
  // const socialIcon = data.allSanitySocials.edges;
  return (
    <div id="hero">
      <div className="relative">
        <MuxVideo
          style={{ width: "100%" }}
          playbackId={herovideo.playbackId}
          src={`https://stream.mux.com/${herovideo.playbackId}.m3u8`}
          poster={`https://image.mux.com/${herovideo.playbackId}/thumbnail.png`}
          metadata={{
            video_id: "1",
            video_title: "Hero Video",
            viewer_user_id: "1",
          }}
          streamType="on-demand"
          loop
          autoPlay
          muted
        />
        <div className="absolute left-[19%] top-[45%] w-[21%] h-[5.2%]">
          <div className="social-links-buttons">
            <div className="flex flex-row justify-between">
              {/* {socialIcon.map((item) => (
                <a
                  href={item.node.link}
                  key={item.node.name}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black rounded-[44px] w-[28%] flex"
                >
                  {item.node.icon && item.node.icon.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(item.node.icon))
                        .fit("crop")
                        .auto("format")
                        .url()}
                      width=""
                      className="m-auto sm:w-[50%] sm:h-[50%] max-[639px]:w-[50%] max-[639px]:h-[50%]"
                      alt={item.node.icon.alt}
                    />
                  )}
                </a>
              ))} */}
            </div>
          </div>
        </div>
        <div className="relative flex overflow-x-hidden text-outline-marquee text-[#f8e64d] uppercase md:text-[3rem] sm:text-[1.5rem] md:leading-[114px] lg:text-[4rem] lg:leading-[114px] bg-[#f8e64d]">
          <div className="animate-marquee whitespace-nowrap">
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

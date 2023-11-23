import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function VideoCall() {
  const { id } = useParams();
  console.log(id);
  const port = window.location.port;
  const localhost = window.location.host;

  const myMeeting = async (element) => {
    const appID = 18616190;
    const serverSecret = "39176b4d518a3c165485e14a1b6e0006";
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      " "
    );
    const zc = ZegoUIKitPrebuilt.create(KitToken);

    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://${localhost}:${port}/facecall/${id}`,
        },
      ],
      scenario: {
        model: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });

    zc.setUserConfig({
      userId: id,
    });
  };
  
 
  return (
    <div>
      <div className="mt-36" ref={myMeeting} />
    </div>
  );
}

export default VideoCall;

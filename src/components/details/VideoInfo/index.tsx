import { useEffect, useState } from 'react';
import { channelInfo } from '../../../api/axios';
import style from './index.module.scss';
import Channel from './Channel';

type Props = {
  item: any;
};

const VideoInfo = ({ item }: Props) => {
  const [channel, setChannel] = useState({});
  let channelId = item.snippet.channelId;
  let like = 223000;
  let dislike = 1000;

  function numberToKorean(number: number) {
    var inputNumber: number = number < 0 ? 0 : number;
    var unitWords = ['', '천', '만', '억'];
    var splitUnit = 1000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = '';

    for (var i = 0; i < splitCount; i++) {
      var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }

    for (var i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }

    return resultString;
  }

  useEffect(() => {
    async function channelData() {
      try {
        const response = await channelInfo(channelId);
        setChannel(response.data.items);
      } catch (error) {
        console.log('에러가 발생했습니다.');
      }
    }
    channelData();
  }, []);

  return (
    <div className={style.videoTitle}>
      <h1>{item.snippet.title}</h1>
      <div className={style.videoContent}>
        {Array.isArray(channel)
          ? channel.map((item, idx) => {
              return <Channel item={item} key={idx} />;
            })
          : null}
        <div className={style.videoButton}>
          <span>
            <div className={style.like}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 110 110"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: '30px', height: '30px' }}
              >
                <g>
                  <g opacity="1">
                    <g transform="matrix(1,0,0,1,60,60)" opacity="1">
                      <path
                        fill-opacity="0"
                        stroke="rgb(0,0,0)"
                        stroke-width="4"
                        d=" M25.025999069213867,-4.00600004196167 C25.025999069213867,-4.00600004196167 5.992000102996826,-3.996999979019165 5.992000102996826,-3.996999979019165 C5.992000102996826,-3.996999979019165 11.012999534606934,-22.983999252319336 11.012999534606934,-22.983999252319336 C12.230999946594238,-26.90399932861328 13,-31.94300079345703 8.994000434875488,-31.981000900268555 C7,-32 5,-32 4.021999835968018,-31.007999420166016 C4.021999835968018,-31.007999420166016 -19.993000030517578,-5.03000020980835 -19.993000030517578,-5.03000020980835 C-19.993000030517578,-5.03000020980835 -20.027999877929688,32.025001525878906 -20.027999877929688,32.025001525878906 C-20.027999877929688,32.025001525878906 20.97599983215332,31.986000061035156 20.97599983215332,31.986000061035156 C25.010000228881836,31.986000061035156 26.198999404907227,29.562000274658203 26.99799919128418,25.985000610351562 C26.99799919128418,25.985000610351562 31.972000122070312,4.026000022888184 31.972000122070312,4.026000022888184 C33,-0.6930000185966492 30.392000198364258,-4.00600004196167 25.025999069213867,-4.00600004196167z"
                      ></path>
                    </g>
                    <g>
                      <path fill-opacity="0"></path>
                    </g>
                    <g transform="matrix(1,0,0,1,60,60)" opacity="1">
                      <path
                        fill-opacity="0"
                        stroke="rgb(0,0,0)"
                        stroke-width="4"
                        d=" M-19.986000061035156,-4.03000020980835 C-19.986000061035156,-4.03000020980835 -36.020999908447266,-3.996999979019165 -36.020999908447266,-3.996999979019165 C-36.020999908447266,-3.996999979019165 -36.00199890136719,31.993000030517578 -36.00199890136719,31.993000030517578 C-36.00199890136719,31.993000030517578 -20.030000686645508,32.02299880981445 -20.030000686645508,32.02299880981445 C-20.030000686645508,32.02299880981445 -19.986000061035156,-4.03000020980835 -19.986000061035156,-4.03000020980835z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              {item.statistics.likeCount}
            </div>
            <div className={style.unLike}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 110 110"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: '30px', height: '30px' }}
              >
                <g>
                  <g opacity="1">
                    <g transform="matrix(1,0,0,1,60,60)" opacity="1">
                      <path
                        fill-opacity="0"
                        stroke="rgb(0,0,0)"
                        stroke-width="4"
                        d=" M25.025999069213867,-4.00600004196167 C25.025999069213867,-4.00600004196167 5.992000102996826,-3.996999979019165 5.992000102996826,-3.996999979019165 C5.992000102996826,-3.996999979019165 11.012999534606934,-22.983999252319336 11.012999534606934,-22.983999252319336 C12.230999946594238,-26.90399932861328 13,-31.94300079345703 8.994000434875488,-31.981000900268555 C7,-32 5,-32 4.021999835968018,-31.007999420166016 C4.021999835968018,-31.007999420166016 -19.993000030517578,-5.03000020980835 -19.993000030517578,-5.03000020980835 C-19.993000030517578,-5.03000020980835 -20.027999877929688,32.025001525878906 -20.027999877929688,32.025001525878906 C-20.027999877929688,32.025001525878906 20.97599983215332,31.986000061035156 20.97599983215332,31.986000061035156 C25.010000228881836,31.986000061035156 26.198999404907227,29.562000274658203 26.99799919128418,25.985000610351562 C26.99799919128418,25.985000610351562 31.972000122070312,4.026000022888184 31.972000122070312,4.026000022888184 C33,-0.6930000185966492 30.392000198364258,-4.00600004196167 25.025999069213867,-4.00600004196167z"
                      ></path>
                    </g>
                    <g>
                      <path fill-opacity="0"></path>
                    </g>
                    <g transform="matrix(1,0,0,1,60,60)" opacity="1">
                      <path
                        fill-opacity="0"
                        stroke="rgb(0,0,0)"
                        stroke-width="4"
                        d=" M-19.986000061035156,-4.03000020980835 C-19.986000061035156,-4.03000020980835 -36.020999908447266,-3.996999979019165 -36.020999908447266,-3.996999979019165 C-36.020999908447266,-3.996999979019165 -36.00199890136719,31.993000030517578 -36.00199890136719,31.993000030517578 C-36.00199890136719,31.993000030517578 -20.030000686645508,32.02299880981445 -20.030000686645508,32.02299880981445 C-20.030000686645508,32.02299880981445 -19.986000061035156,-4.03000020980835 -19.986000061035156,-4.03000020980835z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              {item.statistics.dislikeCount}
            </div>
          </span>
          <span>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{ display: 'block', width: '30px', height: '30px' }}
            >
              <g mirror-in-rtl="">
                <path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"></path>
              </g>
            </svg>
            공유
          </span>
          <span>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{ display: 'block', width: '28px', height: '28px' }}
            >
              <g>
                <path d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"></path>
              </g>
            </svg>
            오프라인 저장
          </span>
          <span>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              <g>
                <path d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;

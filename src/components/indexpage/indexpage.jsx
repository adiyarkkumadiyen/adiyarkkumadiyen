import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";

import image1 from "../../assets/mainImage.png";
import Annam from "../../assets/annam.png";
import Annam1 from "../../assets/annam1.png";
import dhipam from "../../assets/dhipam.jpg";
import dhipam1 from "../../assets/dhipam1.jpg";
import pasu from "../../assets/pasu.jpg";
import pasu1 from "../../assets/pasu1.jpg";
import ulavarapani from "../../assets/ulavarapani.png";
import ulavarapani1 from "../../assets/ulavarapani1.jpg";
import thiruneer from "../../assets/thiruneer.jpg";
import thiruneer1 from "../../assets/thiruneer1.jpg";
import puthondu from "../../assets/puthondu.png";
import thupam from "../../assets/thupam.png";
import ThonduseyumAdiyargal from "../../assets/ThonduseyumAdiyargal.png";
import ThonduseyumAdiyargal1 from "../../assets/ThondueyumAdiyargal1.jpg";
import Handicapped from "../../assets/Handicapped.png";
import TreePlantation from "../../assets/TreePlantation.png";
//
const Index = () => {
  return (
    <Container className="p-4">
      <Row className="mb-3">
        <Row>
          <Col className="bg-light text-danger p-4 rounded">
            <div className="d-flex justify-content-between">
              <p>
                மண்ணில் பிறந்தார் பெரும்பயன் மதிக்கலும்
                <br />
                அன்னனர் அயுதாதமை அழியச் செய்தல்
                <br />
                கண்ணளிய அவர் நல்விளை போகிலை கண்டு அதனால்
                <br />
                அண்ணா மலையை இவர் முன் வழிபட உயர்ப்பார்.
              </p>
              <p>
                அன்னாலே என ஆன் கொண்டு குளிர் அருட்கண் <br />
                விண்ணோர்கள் மறைத்தொழலுடி வேத நாயகனே <br />
                கண்ணான் நாயக கயிலைமலை இருந்திடும் கோமான் <br />
                நண்ணி நாள்தொறும் நயந்து பணிசெய்கின்றான். <br />
                <span className="d-block text-end">
                  <h6>– பெரிய புராணம்</h6>
                </span>
              </p>{" "}
            </div>
            <div>
              <div className="text-center mt-3">
                <img
                  src={image1}
                  alt="Main Image"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>{" "}
            </div>
          </Col>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div>
            <h3 className="d-flex justify-content-center text-xl fw-bold">
              சிவனடியார்களுக்கு அன்னம்பாலிப்பு
            </h3>
          </div>
          <Row className="mt-4">
            <Col>
              {/* <div className="d-flex justify-content-between"> */}
              <p>
                அன்னம் பாலிக்கும் தில்லைச் சிற்றம்பலம் <br />
                பொன்னம் பாலிக்கு மேலுமிப் பூமிசை
                <br />
                என்னம் பாலிக்கும் மாறுகண் டின்புற
                <br />
                இன்னம் பாலிக்குமோ, இப் பிறவியே?
                <span className="d-block text-end">- தேவாரம்</span>
              </p>
            </Col>
            <Col>
              <p>
                கொண்டு வந்து மனைபுகுந்து குலாவுபாதம் விளக்கியே <br />
                மண்டுகாதலின் ஆதனத்திடை வைத்தருச்சனை செய்தபின் <br />
                உணடிநாலு விதத்திலாறு சுவைத்தி றத்தினில் ஒப்பிலா <br />
                அண்டர் நாயகர் தொண்டர் இச்சையில் அமுது செய்ய அளித்துளார்
                <span className="d-block text-end">– பெரியபுராணம்</span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={Annam}
                alt="Annam"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src={Annam1}
                alt="Annam1"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div>
            <h3 className="d-flex justify-content-center text-xl fw-bold">
              பராமரிப்பு இல்லாத சிவ தலங்களுக்கு தீபஎண்ணெய்‌ வழங்குதல்‌
            </h3>
          </div>
          <br />
          <Row className="  mt-4">
            <Col className="d-flex justify-content-center">
              <p>
                இல்லக விளக்கது இருள்கெடுப்பது <br />
                சொல்லக விளக்கது சோதி உள்ளது <br />
                பல்லக விளக்கது பலரும்‌ காண்பது <br />
                நல்லக விளக்கது நமசிவாயவே.
                <span className="d-block text-end">- தேவாரம்</span>
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p>
                விளக்கினை ஏற்ற வெளியை அறிமின் <br />
                விளக்கினின் முன்னே வேதனை மாறும் <br />
                விளக்கை விளக்கும் விளக்குடை யார்கள் <br />
                விளக்கில் விளங்கும் விளக்காவர் தாமே.
                <span className="d-block text-end">
                  <h6>– திருமந்திரம்</h6>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={dhipam}
                alt="dhipam"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src={dhipam1}
                alt="dhipam1"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div>
            <h3 className="d-flex justify-content-center text-xl fw-bold">
              கோயில் பசு மாட்டிக்ற்கு தீவனம் வழங்குதல்
            </h3>
          </div>
          <br />
          <Row className=" mt-4">
            <Col className="d-flex justify-content-center">
              <p>
                யாவர்க்குமாம் இறைவர்க்கு ஒரு பச்சிலை <br />
                யாவர்க்குமாம் பசுவுக்கு ஒரு வாயுறை <br />
                யாவர்க்குமாம் உண்ணும்போது ஒருகைப்பிடி <br />
                யாவர்க்குமாம் பிறர்க்கு இன்னுரை தானே.
                <span className="d-block text-end">– திருமந்திரம்</span>
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p>
                அப்பனை நந்தியை ஆரா அமுதினை <br />
                ஒப்பிலி வள்ளலை ஊழி முதல்வனை <br />
                எப்பரி சாயினும் ஏத்துமின் ஏத்தினால் <br />
                அப்பரி சீசன் அருள் பெற லாமே.
                <span className="d-block text-end">
                  <h6>– திருமந்திரம்</h6>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={pasu}
                alt="pasu"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src={pasu1}
                alt="pasu1"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div>
            <h3 className="d-flex justify-content-center text-xl fw-bold">
              திருக்கோயில் உழவாரப்பணி செய்பவர்களுக்கு உதவுதல்
            </h3>
          </div>
          <br />
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <p>
                நிலைபெறுமா றெண்ணுதியேல்‌ நெஞ்சே நீவா <br />
                நித்தலுமெம்‌ பிரானுடைய கோயில்‌ புக்குப்‌ <br />
                புலரவதனமுன் அலகிட்டு மெழுக்கு மிட்டுப் <br />
                பூமாலை புனைந்தேத்திப் புகழ்ந்து பாடித்‌ <br />
                <br />
                தலையாரக்‌ கும்பிட்டுக்‌ கூத்து மாடிச்‌ <br />
                சங்கரா சயபோற்றி போற்றி யென்றும்‌ <br />
                அலைபுனல்சேர்‌ செங்சடையெம்‌ ஆதீயென்றும்‌ <br />
                ஆரூரா என்றென்றே அலறா நில்லே
                <span className="d-block text-end">- தேவாரம்</span>
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p>
                ஆடு கின்றிலை கூத்துடை யான்கழற்‌ கன்பிலை என்புருகிப்‌ <br />
                பாடு கின்றிலை பதைப்பதும்‌ செய்கிலை பணிகிலை பாதமலர்‌ <br />
                சூடு கின்றிலை சூட்டுகின்றதுமிலை துணையிலி பிணநெஞ்சே <br />
                தேடு கின்றிலை தெருவுதோ றலறிலை செய்வதொன்‌ றறியேனே. <br />
                <br />
                ஆமாறுன்‌ திருவடிக்கே அகங்குழையேன்‌ அன்புருகேன்‌ <br />
                புமாலை புனைந்தேத்தேன்‌ புகழ்ந்துரையேன்‌ புத்தேளிர்‌ <br />
                கோமான்நின்‌ திருக்கோயில்‌ தூகேன்‌ மெழுகேன்‌ கூத்தாடேன்‌ <br />
                சாமாறே விரைகின்றேன்‌ சதுராலே சார்வானே.
                <br />
                <span className="d-block text-end">
                  <h6>- திருவாசகம்‌</h6>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={ulavarapani}
                alt="ulavarapani"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src={ulavarapani1}
                alt="ulavarapani1"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div className="d-flex justify-content-center text-xl fw-bold">
            <h3 className="fw-bold">
              திருக்கோயில்‌ தூபம்‌ மற்றும்‌ பூத்‌தொண்டு பணி <br />{" "}
              <span className="d-flex justify-content-center">
                செய்பவர்களுக்கு உதவுதல்‌
              </span>
            </h3>
          </div>
          <br />
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <p>
                புண்ணியஞ் செய்வார்க்குப் பூவுண்டு நீருண்டு <br />
                அண்ணல் அதுகண்டருள் புரியாநிற்கும் <br />
                எண்ணிலி பாவிகள் எம்மிறை ஈசனை <br />
                நண்ணறியாமல் நழுவுகின்றாரே <br />
                <span className="d-block text-end">- திருமந்திரம்</span>
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p>
                சலம்பூவொடு தூபம் மறந்தறியேன் <br />
                தமிழோடிசை பாடல் மறந்தறியேன் <br />
                நலந்தீங்கிலும் உன்னை மறந்தறியேன் <br />
                உன்னாமம்என் னாவில் மறந்தறியேன் <br />
                உலந்தார்தலை யிற்பலி கொண்டுழல்வாய் <br />
                உடலுள்ளுறு சூலை தவிர்த்தருளாய் <br />
                அலந்தேன்அடி யேன்அதி கைக்கெடில <br />
                வீரட்டா னத்துறை அம்மானே <br />
                <span className="d-block text-end">
                  <h6>- தேவாரம்‌</h6>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={puthondu}
                alt="puthondu"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src={thupam}
                alt="thupam"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div>
            <h3 className="d-flex justify-content-center text-xl fw-bold">
              திருநீற்றுப்பணி செய்தல்‌
            </h3>
          </div>
          <br />
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <p>
                மந்திரம் ஆவது நீறு வானவர் மேலது நீறு <br />
                சுந்தரம் ஆவது நீறு துதிக்கப்படுவது நீறு <br />
                தந்திரம் ஆவது நீறு சமயத்தில் உள்ளது நீறு <br />
                செந்துவர்வாய் உமை பங்கன் திரு ஆலவாயான் திருநீறே. <br />
                <span className="d-block text-end">- தேவாரம்</span>
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p>
                பூசுவதும் வெண்ணீறு, பூண்பதுவும் பொங்கரவம்
                <br />
                பேசுவதும் திருவாயால் மறைபோலுங்? காணேடீ!
                <br />
                பூசுவதும் பேசுவதும், பூண்பதுவுங், கொண்டடென்னை?
                <br />
                ஈசனவன், எவ்வுயிர்க்கும் இயல்பானான் சாழலோ!
                <br />
                <span className="d-block text-end">
                  <h6>- திருவாசகம்‌‌</h6>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={thiruneer}
                alt="thiruneer"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src={thiruneer1}
                alt="thiruneer1"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div>
            <h3 className="d-flex justify-content-center text-xl fw-bold">
              தொண்டு செய்யும்‌ அடியார்களுக்கு உதவுதல்‌
            </h3>
          </div>
          <br />
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <p>
                சிந்தை இடையறா அன்பும் திருமேனி தன்னில் அசைவும் <br />{" "}
                கந்தைமிகையாம் கருத்தும், கை உழவாரப் படையும் <br /> வந்திழி
                கண்ணிர் மழையும் வடிவிற் பொலிதிரு நீறும் <br />
                அந்தமிலாத் திருவேடத்து அரசும் எதிர்வந்தணைய
                <span className="d-block text-end">- பெரிய புராணம்</span>
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p>
                அடியார் அடியார் அடியாருக்கு அடிமைக்கு
                <br />
                அடியனாய் நல்கிட்டு அடிமையும் பூண்டேன்
                <br />
                அடியார் அருளால் அவனடி கூட
                <br />
                அடியார் இவனென்று அடிமை கொண்டானே!
                <span className="d-block text-end">
                  <h6>-திருமந்திரம்!</h6>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={ThonduseyumAdiyargal}
                alt="thiruneer"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center align-item-center">
              <img
                src={ThonduseyumAdiyargal1}
                alt="ThondueyumAdiyargal"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
      <Row className="mb-3">
        <Row className="bg-light text-danger p-4 rounded">
          <div className="d-flex justify-content-center ">
            <h3 className="  text-xl fw-bold">
              இதர பணிகள்‌ : மரம்‌ நடுதல்‌, ஊனமுற்றோர்‌ <br /> மற்றும்‌
              அனாதைகள்‌, முதியோர்களுக்கு உதவுதல்
            </h3>
          </div>
          <br />
          <Row className="mt-4">
            <Col className="d-flex justify-content-between">
              <p>
                வானாகி மண்ணாகி வளியாகி ஒளியாகி <br />
                ஊனாகி உயிராகி உண்மையுமாய் இன்மையுமாய்
                <br />
                கோனாகி யானெனதென் றவரவரைக் கூத்தாட்டு
                <br />
                வானாகி நின்றாயை என்சொல்லி வாழ்த்துவனே
                <br />
                <span className="d-block text-end">- திருவாசகம்‌‌</span>
                <br />
                தீதில்லை மாணி சிவகருமஞ் சிதைத்தானைச் <br />
                சாதியும் வேதியன் தாதைதனை தாளிரண்டுஞ் <br />
                சேதிப்ப ஈசன் திருவருளால் தேவர்தொழப் <br />
                பாதகமே சோறு பற்றினவா தோணோக்கம். <br />
                <span className="d-block text-end">- திருவாசகம்‌‌</span>
                <br />
                பேராயிரம் பரவி வானோ ரேத்தும் <br />
                பெம்மானைப் பிரிவிலா அடியார்க் கென்றும் <br />
                வாராத செல்வம் வருவிப் பானை <br />
                மந்திரமுந் தந்திரமும் மருந்து மாகித் <br />
                தீராநோய் தீர்த்தருள வல்லான் தன்னைத் <br />
                திரிபுரங்கள் தீயெழத்திண் சிலைகைக் கொண்ட <br />
                போரானைப் புள்ளிருக்கு வேளூ ரானைப் <br />
                போற்றாதே ஆற்றநாள் போக்கி னேனே
                <br />
                <span className="d-block text-end">- தேவாரம்</span>
              </p>
            </Col>
            <Col>
              <p>
                போற்றியோ நமச்சி வாய புயங்கனே மயங்கு கின்றேன்
                <br />
                போற்றியோ நமச்சி வாய புகலிடம் பிறிதொன் றில்லை <br />
                போற்றியோ நமச்சி வாய புறமெனைப் போக்கல் கண்டாய் <br />
                போற்றியோ நமச்சி வாய சயசய போற்றி போற்றி <br />
                <span className="d-block text-end">- திருவாசகம்‌‌</span>
                <br />
                கண்ணப்பன் ஒப்பதோர் அன்பின்மை கண்டபின் <br />
                என்னப்பன் என்னொப்பில் என்னையும் ஆட் கொண்டருளி <br />
                வண்ணப் பணித்தென்னை வாவென்ற வான்கருணைச் <br />
                சுண்ணப்பொன் நீற்றற்கே சென்றூதாய் கோத்தும்பீ <br />
                <span className="d-block text-end">
                  <h6>- திருவாசகம்‌‌</h6>
                </span>
                <br />
                குருவே சிவமெனக் கூறினன் நந்தி <br />
                குருவே சிவமென் பதுகுறித் தோரார் <br />
                குருவே சிவனுமாய்க் கோனுமாய் நிற்கும் <br />
                குருவே யுரையுணர் வற்றதோர் கோவே. <br />
                <span className="d-block text-end">
                  <h6>-திருமந்திரம்‌</h6>
                </span>
                <br />
                உருவாய் அருவாய், உளதாய் இலதாய் <br />
                மருவாய் மலராய், மணியாய் ஒளியாய்க் <br />
                கருவாய் உயிராய்க், கதியாய் விதியாய்க் <br />
                உருவாய் வருவாய், அருள்வாய் குகனே <br />
                <span className="d-block text-end">
                  <h6>-திருப்புகழ்</h6>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src={TreePlantation}
                alt="TreePlantation"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col className="d-flex justify-content-center align-item-center">
              <img
                src={Handicapped}
                alt="Handicapped"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button
              style={{ maxWidth: "30%" }}
              onClick={() =>
                (window.location.href =
                  "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
              }
            >
              Donate Now
            </Button>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default Index;

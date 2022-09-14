import React, { useLayoutEffect } from "react";
import "../css/Home.css";
import bgvideo from "../assets/home/BgVid.mp4";
import movie from "../assets/home/videoplayback.mp4";
import "../css/Home2.css";
import Button2 from "react-bootstrap/Button";
import Card2 from "react-bootstrap/Card";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="homepage">
      <section className="my-video-container home-section" id="section1">
        {/* <video className="my-fullscreen-video my-background" src={movie} muted loop autoPlay></video> */}
        <video
          className="my-fullscreen-video my-background"
          src={bgvideo}
          muted
          loop
          autoPlay
        ></video>
        <h1 className="text-white my-tagline" style={{ fontSize: "40pt" }}>
          Welcome to Cincinnati
        </h1>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about home-section">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img
                  src="assets/img/cincyhistory.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Cincinnati History</h3>
                <p>
                  Cincinnati was founded in 1788 by Colonel Robert Patterson and
                  Judge John Cleves Symmes. They named the city "Cincinnati"
                  after the Society of the Cincinnati, of which they were
                  members.
                </p>

                <p>
                  Cincinnati was the first major city founded after the American
                  Revolution, and because of this, it is sometimes called "The
                  Birthplace of the West."
                </p>

                <p>
                  Cincinnati grew rapidly in its early years, and by the 1830s
                  it was the sixth-largest city in the United States. It was a
                  major stop on the Underground Railroad, and its population was
                  very diverse for its time.
                </p>

                <p>
                  Cincinnati was a major manufacturing city during the
                  Industrial Revolution, and it remained an important
                  manufacturing center even after the decline of industry in the
                  mid-20th century. Today, the city is known for its arts and
                  culture scene, as well as its food (Cincinnati chili is a
                  popular dish).
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts section-bg home-section">
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="302687"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Population</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="80"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Breweries</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1788"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Year Founded</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="80327"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Jobs</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}


        <section>
          <div className="App">
            <Container>
              <Button variant="secondary">
                <h1>Things to Do</h1>
              </Button>{" "}
              <Row>
                <Col md={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="assets/img/attracts.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Attractions</CardTitle>
                      <CardSubtitle>Musuem</CardSubtitle>
                      <CardText>
                        Cincinnati is home to many tourist attractions,
                        including the Cincinnati Zoo, the National Underground
                        Railroad Freedom Center, and the Cincinnati Museum
                        Center.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="assets/img/sport.jpeg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Sports</CardTitle>
                      <CardSubtitle>Stadium</CardSubtitle>
                      <CardText>
                        Cincinnati is home to many professional sports teams,
                        including the Bengals (NFL), Reds (MLB), and FC
                        Cincinnati (MLS). The city also has a rich history in
                        college sports.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="assets/img/bar.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Bars</CardTitle>
                      <CardSubtitle>Club</CardSubtitle>
                      <CardText>
                        Some popular bars in Cincinnati include The Anchor, The
                        Comet, and The Lackman. These bars offer a variety of
                        beer, wine, and mixed drinks, as well as a variety of
                        food options.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="assets/img/brew.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Breweries</CardTitle>
                      <CardSubtitle>Beer spot</CardSubtitle>
                      <CardText>
                        There are many Cincinnati breweries, but some of the
                        most popular include Rhinegeist, MadTree, and Fifty
                        West. These breweries offer a variety of different
                        beers.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="assets/img/art.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Performing Arts & Music</CardTitle>
                      <CardSubtitle>Theater</CardSubtitle>
                      <CardText>
                        Cincinnati has a long and rich history in the performing
                        arts, dating back to the city's founding in 1788. The
                        city is home to a number of world-renowned performing
                        arts organizations.{" "}
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="assets/img/attract.jpeg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Parks and Recreation</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Cincinnati has a variety of parks and recreational
                        facilities for residents and visitors to enjoy. The city
                        operates over 60 parks, totaling more than 4,000 acres.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <video className="" src={movie} muted loop autoPlay></video> */}
        </section>

 {/*========== fun facts ========= */}
        <section className="fun-facts">
        <div className="container">
          <h1 className="fn-title text-center my-5">DID YOU KNOW!!</h1>
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="fn-card m-2 cb1 text-center">
                <div className="fn-card-body">
                  <span className="fn-card-number fw-bold">01</span>
                  <h2 className="fn-card-title mb-4">
                    Over-the-Rhine Brewery District
                  </h2>
                  <p className="fn-card-text">
                    Somewhere between Prohibition, two world wars and urban
                    sprawl, the tunnels beneath Over-the-Rhine, Newport and
                    Covington that brewery workers used to access lagering
                    cellars and transport goods between buildings were all but
                    forgotten. Then in 2008, urban explorers came across
                    original brewery blueprints, curiosity led to jack
                    hammering, and the tunnels were rediscovered.You can see the
                    curious underworld for yourself on a Brewing Heritage Trail
                    Tour. One tour ends in a cellar beneath the original
                    Kauffman Brewery malt house. Built in 1860, Kauffman grew to
                    be the fourth largest brewery in Cincinnati, but never
                    reopened after Prohibition.!.
                  </p>
                  <button className="fn-btn btn-success">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="fn-card m-2 cb1 text-center">
                <div className="fn-card-body">
                  <span className="fn-card-number fw-bold">02</span>
                  <h2 className="fn-card-title mb-4">Built on Beer</h2>
                  <p className="fn-card-text">
                    Cincinnati and Northern Kentucky were, quite literally,
                    built on beer. By the mid-1800s, 36 breweries were producing
                    more than 30 million gallons of beer and digging underground
                    lagering cellars and tunnels. One batch of lager at a time,
                    Cincinnati's so-called beer barons turned humble brewing
                    operations into beer-making empires that prospered until
                    Prohibition forced them all to close. Few reopened, and none
                    survived consecutively into the 21st century (after
                    operating for 114 years, Hudepohl Brewing Company closed in
                    1999) Now, in just a few years, the number of breweries in
                    Cincinnati and Northern Kentucky has surpased the number
                    that exhisted prior to Prohibition.
                  </p>
                  <button className="fn-btn btn-success">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="fn-card m-2 cb1 text-center">
                <div className="fn-card-body">
                  <span className="fn-card-number fw-bold">03</span>
                  <h2 className="fn-card-title mb-4">Beer Capital of the World</h2>
                  <p className="fn-card-text">
                    In 1860, as many as 36 breweries operated in Cincinnati. By
                    1889, a fewer number of breweries (23) produced even more
                    beer, collectively brewing 35,700,000 gallons of suds drunk
                    the world over (Christian Moerlein Brewing Company exported
                    beer as far as South America and Europe). In fact, so much
                    beer was made and consumed in Cincinnati that in 1890 it was
                    dubbed the “Beer Capital of the World.The vast majority of
                    Cincinnati's pre-Prohibition breweries were in
                    Over-the-Rhine, clustered together along McMicken Avenue and
                    the canal. From 1875-1900, 17 operated in Over-the-Rhine and
                    the West End.
                  </p>
                  <button className="fn-btn btn-success">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/*============ end of fun facts ============ */}

        {/* <!-- ======= Why Us Section ======= --> */}

        <section id="why-us" className="why-us home-section">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Visit Cincinnati?</h3>
                  <p>
                    Cincinnati is a great city with a lot to offer. The people
                    are friendly and there is always something to do. The city
                    has a great history and there are plenty of places to visit.
                    The food is amazing and there is a great variety of
                    restaurants. The city is also home to a great music scene.
                    There are many reasons to visit Cincinnati, but these are
                    just a few of the reasons why you should experience
                    Cincinnati for yourself.
                  </p>
                  <div className="text-center">
                    <a href="about.html" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-beer"></i>
                        <h4>Breweries</h4>
                        <p>
                          The city has a rich brewing history, and there are a
                          number of new and exciting breweries to check out.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-football"></i>
                        <h4>Sports</h4>
                        <p>
                          Sports fans in Cincinnati are passionate about their
                          teams and the city has a rich history of success in
                          both professional and collegiate sports.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      `
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-food-menu"></i>
                        <h4>Food</h4>
                        <p>
                          The city has a rich food culture with a variety of
                          cuisines to choose from. Cincinnati is also home to
                          many great restaurants and food trucks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features home-section">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="ri-star-line" style={{ color: "#ffbb2c" }}></i>
                  <h3>
                    <a href="">Attractions</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-football-line"
                    style={{ color: "#5578ff" }}
                  ></i>
                  <h3>
                    <a href="">Sports</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-goblet-fill"
                    style={{ color: "#e80368" }}
                  ></i>
                  <h3>
                    <a href="">Bars</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="ri-cup-fill" style={{ color: "#e361ff" }}></i>
                  <h3>
                    <a href="">Breweries</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-file-music-fill"
                    style={{ color: "#47aeff" }}
                  ></i>
                  <h3>
                    <a href="">Performing Arts & Music</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-walk-fill" style={{ color: "#ffa76e" }}></i>
                  <h3>
                    <a href="">Parks and Recreation</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Features Section --> */}

        
        {/* <!-- End Trainers Section --> */}
        <section className="home-section">
          <div>
            <Container>
              <h1>Excited? Plan Your Trip With Us!</h1>
              <div
                className="col-md-6 order-1 order-md-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="assets/img/travel.jpg" className="img-fluid" alt="" />
              </div>
              <Button variant="">
                <Card2.Link href="https://reservations.cincinnatiusa.com/hotel/list/4872/m2441?Search%5BhotelRegion%5D=m2441&Search%5BcheckInDate%5D=&Search%5BcheckOutDate%5D=&Search%5BnumberOfRooms%5D=1&Search%5BnumberOfAdults%5D=1&Search%5BnumberOfChildren%5D=0&Search%5BkeywordSearch%5D=&Search%5Bsort%5D=rank&Search%5BstarRating%5D=&Search%5BlowPrice%5D=&Search%5BhighPrice%5D=&customNavLink=0&Search%5Bnear%5D=&Search%5Blatitude%5D=&Search%5Blongitude%5D=&Search%5BlocationSearch%5D=Downtown&Search%5BpoiDistance%5D=">
                  <h3>Book Now</h3>
                </Card2.Link>
              </Button>
            </Container>
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Contact Info</h3>
                <div>
                  <p>City of Cincinnati</p>
                  <p>8th Floor, Room 803</p>
                  <p>801 Plum Street</p>
                  <p>Cincinnati, Ohio 45202</p>
                  <p>
                    <strong>Phone:</strong> (513) 352-3120
                  </p>
                  <strong>Email:</strong> ouremail@gmail.com
                  <br />
                  <p>Monday - Friday, 8 a.m. - 5 p.m.</p>
                  <a href="https://www.cincinnati-oh.gov/">Cincinnati-oh.gov</a>
                  <br />
                  {/* A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br /> */}
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Locations</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Map</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms Of Use</a>
                  </li>
                </ul>
              </div>

              {/* <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div> */}

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Mentor</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. --> */}
              {/* <!-- You can delete the links only if you purchased the pro version. --> */}
              {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
              {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Home;

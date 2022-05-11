import React, { Component } from "react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PreFooter from "./../components/PreFooter";
import Copyright from "./../components/Copyright";
import { NavigationBar } from "./../components/Navigation";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <br />
        <br />
        <div className="section-l" style={{ padding: "0px" }}>
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-8"
                style={{ padding: "0px", paddingRight: "10px" }}
              >
                <Swiper
                  slidesPerView={1}
                  loop={true}
                  pagination={{ dynamicBullets: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{ delay: 2000 }}
                >
                  <SwiperSlide>
                    <div className="overlay"></div>
                    <img
                      className="imgfit"
                      alt="img1"
                      src="assets/img/img1.jpg"
                    ></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="overlay"></div>
                    <img
                      className="imgfit"
                      alt="img2"
                      src="assets/img/img2.jpg"
                    ></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="overlay"></div>
                    <img
                      className="imgfit"
                      alt="img3"
                      src="assets/img/img3.jpg"
                    ></img>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-4 d-none d-lg-block padtop">
                <br />
                <br />
                <br />
                <div
                  className="desc-head text-center mx-auto"
                  style={{ paddingRight: "10px" }}
                >
                  <h5 style={{ fontWeight: "500", marginBottom: "20px" }}>
                    Welcome to Our Page
                  </h5>
                  <h1 style={{ fontWeight: "700", marginBottom: "10px" }}>
                    Pupuk Kita
                  </h1>
                  <p className="text-justify">
                    Dewi Sri Rama merupakan perushaan yang didirikan sebagai
                    pelopor produsen pupuk di Indonesia yang berdiri sejak tahun
                    2016. Dewi Sri Rama memulai operasional usaha dengan tujuan
                    utama dapat meningkatkan produksi petani Indonesia khususnya
                    di wilayah Sulawesi. Selain produsen Pupuk, Dewi Sri Rama
                    mengemban tugas dalam melaksanakan usaha perdagangan,
                    pemberian jasa dan usaha lain yang berkaitan dengan industri
                    pupuk.
                  </p>
                  <p className="text-justify">
                    Dewi Sri Rama bertanggung jawab dalam hal memajukan sektor
                    pertanian khususnya di wilayah Sulawesi dan memberikan
                    segala solusi kebutuhan petani dengan tujuan meningkatkan
                    produksi petani di wilayah Sulawesi.
                  </p>
                  <div className="text-center">
                    <a href="#milestone">
                      <button
                        type="button"
                        className="btn btn-outline-success btn-custom"
                      >
                        Mulai
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="milestone"></div>
          </div>
        </div>
        <br />
        <br />
        <div className="section-l threepoint">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 text-center">
                <img
                  src="assets/img/money.png"
                  alt="fast"
                  style={{ width: "250px", height: "250px" }}
                />
                <h2 className="text-muted">Affordable</h2>
              </div>
              <div className="col-md-12 col-lg-4 text-center">
                <img
                  src="assets/img/fast.png"
                  alt="fast"
                  style={{ width: "250px", height: "250px" }}
                />
                <h2 className="text-muted">Fast</h2>
              </div>
              <div className="col-md-12 col-lg-4 text-center">
                <img
                  src="assets/img/market.png"
                  alt="fast"
                  style={{ width: "250px", height: "250px" }}
                />
                <h2 className="text-muted">Reachable</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="section-g">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="visimisi text-center">
                  <br />
                  <h1 style={{ marginBottom: "0px" }}>Visi & Misi</h1>
                  <hr className="gradiation-w" />
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Visi</h3>
                      <div className="text-center">
                        Menjadi Perusahaan Global terdepan sebagai penyedia
                        terbaik dengan mengedepankan kwalitas dan innovasi
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3>Misi</h3>
                      <div className="text-left">
                        <li>
                          Memaksimalkan potensi Agriculture di Wilayah Sulawesi
                        </li>
                        <li>
                          Mengembangkan jiwa enterpreneur ship di kalangan
                          generasi muda
                        </li>
                        <li>
                          Mengembangkan potensi Pertanian dan Peternakan di
                          wilayah Sulawesi
                        </li>
                        <li>
                          Mengembangkan produk – produk yang aman dan bagus
                          berdasarkan penelitian
                        </li>
                        <li>
                          Mengoptimalkan Sinergi dengan Mitra, Pemerintah dan
                          Instansi Lain
                        </li>
                        <li>
                          Memberikan kontribusi positif kepada masyarakat dan
                          Lingkungan
                        </li>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-l">
          <div className="text-center">
            <h1 style={{ marginBottom: "0px" }}>Sejarah</h1>
            <hr className="gradiation" />
          </div>
          <div className="main-timeline">
            <div className="timeline">
              <div className="timeline-icon">
                <span className="year">2021</span>
              </div>
              <div className="timeline-content">
                <h3 className="title">2021</h3>
                <p className="description">
                  Pelebaran Target Pemasaran Khususnya untuk wilayah Sulawesi.
                  Dengan membangun Distributor baru di Wilayah Sulawesi Tenggara
                  dan Sulawesi Tengah
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon">
                <span className="year">2020</span>
              </div>
              <div className="timeline-content">
                <h3 className="title">2020</h3>
                <p className="description">
                  Menjalin Hubungan Kerjasama dengan beberapa Pabrikan Besar di
                  Indonesia untuk menjadi partner Penjualan untuk Produk mereka
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon">
                <span className="year">2019</span>
              </div>
              <div className="timeline-content">
                <h3 className="title">2019</h3>
                <p className="description">
                  Sudah Memiliki 4 Distributor di Gowa, Maros, Sinjai dan
                  Barombong. Menambah Pemasaran khususnya di kabupaten baru.
                  Adapun kabupaten sebagai distributor baru adalah wilayah
                  Pangkep, Bone dan Bulukumba
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon">
                <span className="year">2018</span>
              </div>
              <div className="timeline-content">
                <h3 className="title">2018</h3>
                <p className="description">
                  Ekspansi Pasar dengan membangun Cabang Pemasaran di Wilayah
                  Sulawesi Selatan. Ekspansi Distributor di wilayah Makassar
                  Khususnya kabupaten Maros, Sinjai, Gowa dan Barombong.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="image-container-scrollable">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <br />
                    <h1
                      style={{
                        marginBottom: "0px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Testimoni
                    </h1>
                    <hr className="gradiation-w" />
                    <br />
                    <br />
                    <div className="row">
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                          780: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                          },
                        }}
                      >
                        <SwiperSlide>
                          <div className="col swiper-testimoni text-center justify-content-center align-items-center">
                            <img
                              className="float-left"
                              src="assets/img/img1.jpg"
                              alt="img1"
                            />
                            <div className="mx-auto d-block text">
                              <h5>Maulana</h5>
                              <br />
                              <h4>
                                "Kualitas Pupuk yang bagus dan membantu saya
                                dalam memaksimalkan proses tanam"
                              </h4>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col swiper-testimoni text-center justify-content-center align-items-center">
                            <img
                              className="float-left"
                              src="assets/img/img1.jpg"
                              alt="img1"
                            />
                            <div className="mx-auto d-block text">
                              <h5>Firman</h5>
                              <h3>
                                "Kami sangat terbantu dengan Pupuk yang mudah di
                                dapat"
                              </h3>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col swiper-testimoni text-center">
                            <img
                              className="float-left"
                              src="assets/img/img1.jpg"
                              alt="img1"
                            />
                            <div className="mx-auto d-block text">
                              <h5>Mj Reaper</h5>
                              <h3>"Sangat Membantu"</h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-l">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <h1 style={{ marginBottom: "0px" }}>Latest Blog & News</h1>
                  <hr className="gradiation" />
                </div>
                <div className="row">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                      780: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="col swiper-news">
                        <img
                          className="imgfit"
                          src="assets/img/Pertanian.jpg"
                          alt="img1"
                        ></img>
                        <span
                          className="text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          Hari, 29 Desember 2021
                        </span>
                        <h4 style={{ textAlign: "left" }}>
                          Petani Kabupaten Kudus menggunakan pupuk non subsidi
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                          Kesadaran petani di wilayah Kabupaten Kudus mulai
                          meningkat dalam melakukan olah hasil pertanian baik
                          itu tanaman padi pada musim tanam pertama (MT I) dan
                          MT II, maupun palawija seperti kacang hijau pada MT
                          III. Untuk meningkatkan produksi pertanian pangan
                          mereka tidak lagi hanya mengandalkan pupuk bersubsidi
                          dari pemerintah, namun sebagian menggunakan pupuk
                          non-subsidi meski harus ditebus dengan harga lebih
                          mahal. Tetapi petani mengaku puas karena usahanya
                          sebanding dengan peningkatan produksi tanaman karena
                          hasilnya maksimal.....
                        </p>
                        <div className="text-center">
                          <a href="/">
                            <button
                              type="button"
                              className="btn btn-outline-success btn-custom"
                            >
                              Selengkapnya
                            </button>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col swiper-news">
                        <img
                          className="imgfit"
                          src="assets/img/Tebu.jpg"
                          alt="img2"
                        ></img>
                        <span
                          className="text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          Hari, 30 Desember 2021
                        </span>
                        <h4 style={{ textAlign: "left" }}>
                          Kebun Hortikultura menggunakan pupuk non-subsidi
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                          Kegiatan rutin yang sudah dilakukan memupuk tanaman
                          khususnya di Kebun Hortikultura, kali ini Paidi selaku
                          pemelihara kebun khususnya di Kebun Hortikultura
                          melakukan pemupukan di seluruh tanaman menggunakan
                          spayer dengan menggunakan pupuk daun, agar tanaman
                          tetap subur dan dapat diperbanyak. Pupuk daun bukanlah
                          pupuk yang berbahan dari daun ataupun pupuk untuk
                          menumbuhkan daun. Pupuk daun merupakan pupuk yang
                          berbahan baku organik maupun kimia yang diberikan pada
                          tanaman melalui mulut daun atau stomata.....
                        </p>
                        <div className="text-center">
                          <a href="/">
                            <button
                              type="button"
                              className="btn btn-outline-success btn-custom"
                            >
                              Selengkapnya
                            </button>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col swiper-news">
                        <img
                          className="imgfit"
                          src="assets/img/Perikanan.jpg"
                          alt="img3"
                        ></img>
                        <span
                          className="text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          Hari, 31 Desember 2021
                        </span>
                        <h4 style={{ textAlign: "left" }}>
                          Pelaku usaha budi daya menggunakan Pupuk non-subsidi
                        </h4>
                        <p style={{ textAlign: "justify" }}>
                          Banyaknya para pelaku usaha budi daya perikanan
                          menggunakan pupuk, karena didasarkan pada kenyataan
                          bahwa ketersediaan pupuk bersubsidi di pasaran sudah
                          semakin sulit didapatkan. Para pelaku usaha budi daya
                          membeli pupuk non subsidi, meski dengan harga sangat
                          mahal. Penggunaan pupuk yang berlebihan seperti Urea
                          dan triple super phosphate (TSP), menurut Kepala Pusat
                          Riset Perikanan Kementerian Kelautan dan Perikanan
                          (KKP) Yayan Hikmayani sangatlah tidak bagus karena
                          pupuk anorganik tidak baik.....
                        </p>
                        <div className="text-center">
                          <a href="/">
                            <button
                              type="button"
                              className="btn btn-outline-success btn-custom"
                            >
                              Selengkapnya
                            </button>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-l">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <img
                  className="nopaddingrightleft imgmedium"
                  src="assets/img/partner/1.png"
                  alt="img1"
                ></img>
                <img
                  className="nopaddingrightleft imgmedium"
                  src="assets/img/partner/2.png"
                  alt="img2"
                ></img>
                <img
                  className="nopaddingrightleft imgmedium"
                  src="assets/img/partner/3.jpg"
                  alt="img3"
                ></img>
                <img
                  className="nopaddingrightleft imgmedium"
                  src="assets/img/partner/4.svg"
                  alt="img4"
                ></img>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="prefooter">
          <PreFooter />
        </div>
        <div className="footer">
          <Copyright />
        </div>
      </div>
    );
  }
}

export default Home;
